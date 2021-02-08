/*
 * @description: api配置
 * @version: 0.0.1
 * @Author: dai_zheng
 * @Date: 2019-09-19 14:38:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-15 10:22:15
 */
/**
 * @description: 接线图
 */
var apiDiagramAdd = '/space/diagram/add'
var apiDiagramRemove = '/space/diagram/delete'
var apiDiagramList = '/space/diagram/select'
var apiDiagramUpdate = '/space/diagram/update'
/**
 * @description: 平面图
 */
var apiPlanAdd = '/diagram/add'
var apiPlanRemove = '/space/diagram2d/delete'
var apiPlanList = '/space/diagram2d/select'
var apiPlanUpdate = '/space/diagram2d/update'
/**
 * @description: 备份路径
 */
var recoveryDataPath = 'backups/'
var editorType = util.getUrlParam('type')
var exportApiAdd
var exportApiRemove
var exportApiList
var exportApiUpdate
var exportApiName
if (editorType === 'hookup' || !editorType) {
  exportApiAdd = apiDiagramAdd
  exportApiRemove = apiDiagramRemove
  exportApiList = apiDiagramList
  exportApiUpdate = apiDiagramUpdate
  exportApiName = '接线图管理'
} else if (editorType === 'plan') {
  exportApiAdd = apiPlanAdd
  exportApiRemove = apiPlanRemove
  exportApiList = apiPlanList
  exportApiUpdate = apiPlanUpdate
  exportApiName = '平面图管理'
}
