/*
 * @description: human
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-10 16:22:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-22 10:33:40
 */

function addDiagram (name) {
  alert(1)
  var diagramType =
    typeof editor.dm.getAttr('diagramType') === 'undefined'
      ? 0
      : editor.dm.getAttr('diagramType')
  var diagramJson = JSON.stringify({ json: editor.dm.toJSON() })
  return request
    .post(exportApiAdd, {
      id: editor.dm.getAttr('spaceUuid'),
      content: diagramJson
    })
    .then(function (res) {
      editor.dm.a('uuid', res.data.uuid)
      /**
       * @description: 存入文件备份
       */
      addFile(
        recoveryDataPath + exportApiName + '/' + res.data.uuid + '.json',
        JSON.stringify({
          spaceUuid: editor.dm.getAttr('spaceUuid'),
          diagram: diagramJson,
          type: diagramType,
          name: name
        })
      )
    })
}
function updateDiagram (icon, name) {
  var diagramType =
    typeof editor.dm.getAttr('diagramType') === 'undefined'
      ? 0
      : editor.dm.getAttr('diagramType')
  var diagramJson = JSON.stringify({
    json: editor.dm.toJSON(),
    icon: icon
  })
  var uuid = editor.dm.getAttr('uuid')
  return request
    .put(exportApiUpdate, {
      spaceUuid: editor.dm.getAttr('spaceUuid'),
      diagram: diagramJson,
      type: diagramType,
      name: name,
      uuid: uuid
    })
    .then(function () {
      /**
       * @description: 存入文件备份
       */
      addFile(
        recoveryDataPath + exportApiName + '/' + uuid + '.json',
        JSON.stringify({
          spaceUuid: editor.dm.getAttr('spaceUuid'),
          diagram: diagramJson,
          type: diagramType,
          name: name,
          uuid: editor.dm.getAttr('uuid')
        })
      )
    })
}
function deleteFile (path) {
  return fileRequest.post('/diagramFile/deleteFileByDir', {
    filename: path
  })
}
function addFile (path, content) {
  var c = content
  var p = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,/i
  p.test(c) && (c = c.replace(p, ''))
  return fileRequest.post(
    '/diagramFile/upload',
    {
      content: c,
      fileUrl: path
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
MockService = function (handler) {
  this.handler = handler
  this.handler({
    type: 'connected',
    message: 'Mock service connected'
  })
}

ht.Default.def('MockService', Object, {
  request: function (cmd, data, callback) {
    this[cmd](data, callback)
    var message = cmd
    if (data) {
      if (typeof data === 'string') {
        message = cmd + ': ' + data
      } else if (data.path) {
        message = cmd + ': ' + data.path
      }
    }
    this.handler({ type: 'request', message: message, cmd: cmd, data: data })
  },
  explore: function (data, callback) {
    fileRequest
      .post('/diagramFile/getFileNames', {
        filename: data
      })
      .then(function (res) {
        callback(res.data)
      })
      .catch(function () {
        callback({})
      })
  },
  mkdir: function (data, callback) {
    var self = this
    fileRequest
      .post('/diagramFile/createDir', { filename: data })
      .then(function (res) {
        callback(true)
        self.handler({ type: 'fileChanged', path: data })
      })
      .catch(function () {
        callback(false)
      })
  },
  upload: function (data, callback) {
    // console.log(data, '=======================================', editor.dm)
    var path = data.path
    var self = this
    var uploadPathArr = path.split('/')
    var dir = uploadPathArr[0]
    var name = uploadPathArr[uploadPathArr.length - 1]
    var dotIndex = name.indexOf('.')
    name = name.substring(0, dotIndex)
    var icon = /\.(png|jpg|gif|jpeg|bmp)$/i.test(path) ? data.content : null
    if (
      dir === 'displays' &&
      !icon &&
      editor.dm &&
      !editor.dm.getAttr('uuid')
    ) {
      addDiagram(name).then(function () {
        callback(true)
        self.handler({ type: 'fileChanged', path: path })
        self.handler({ type: 'updateStation', path: path })
      })
    } else if (
      dir === 'displays' &&
      (icon || (editor.dm && editor.dm.getAttr('uuid')))
    ) {
      updateDiagram(icon, name).then(function () {
        callback(true)
        self.handler({ type: 'fileChanged', path: path })
        self.handler({ type: 'updateStation', path: path })
      })
    } else if (dir === exportApiName) {
      updateDiagram(icon, name).then(function () {
        callback(true)
        self.handler({ type: 'fileChanged', path: path })
        self.handler({ type: 'updateStation', path: path })
      })
    } else if (dir === 'previews') {
      deleteFile(path).then(function (res) {
        addFile(path, data.content)
          .then(function (res) {
            callback(true)
            self.handler({ type: 'fileChanged', path: path })
          })
          .catch(function () {
            callback(false)
          })
      })
    } else {
      addFile(path, data.content)
        .then(function (res) {
          callback(true)
          self.handler({ type: 'fileChanged', path: path })
        })
        .catch(function () {
          callback(false)
        })
    }
  },
  rename: function (data, callback) {
    var self = this
    fileRequest
      .post('/diagramFile/reNameFile', {
        oldFileNameDir: data.old,
        newFileNameDir: data.new
      })
      .then(function (res) {
        callback(true)
        self.handler({ type: 'fileChanged', path: data.old })
        self.handler({ type: 'fileChanged', path: data.new })
      })
      .catch(function () {
        callback(false)
      })
  },
  remove: function (data, callback) {
    var self = this
    deleteFile(data)
      .then(function (res) {
        callback(true)
        self.handler({ type: 'fileChanged', path: data })
      })
      .catch(function () {
        callback(false)
      })
  },
  locate: function (data, callback) {
    // Not supported
  },
  source: function (path, callback) {
    console.log(path, 'ppp')
    if (/\.(png|jpg|gif|jpeg|bmp)$/i.test(path.url)) {
      // fileRequest
      //   .post(
      //     '/diagramFile/getFileContent',
      //     {
      //       filename: path.url
      //     }
      //   )
      //   .then(function(res) {
      //     var blob = new Blob(res.data, {type:'image/jpeg'})
      //     var file = new FileReader()
      //     file.onload = function(e) {
      //       console.log(e.target.result,e,'ppppppppppppppppp')
      //       callback(e.target.result)
      //     }
      //     file.readAsDataURL(blob)
      //   })
      ht.Default.xhrLoad(
        path.url,
        function (data) {
          var file = new FileReader()
          file.onload = function (e) {
            callback(e.target.result)
          }
          file.readAsDataURL(data)
        },
        { responseType: 'blob' }
      )
    } else {
      fileRequest
        .post('/diagramFile/getFileContent', {
          filename: path.url
        })
        .then(function (res) {
          var data = res.data[0]
          callback(data)
        })
    }
  }
})
