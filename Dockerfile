# 该镜像需要依赖的基础镜像
FROM java:8
# 将当前目录下的jar包复制到docker容器的/目录下
ADD  /target/pand-embedded-1.0.0.jar /pand-embedded-server.jar
# 运行过程中创建一个zdiot-archive-docker-server.jar文件
RUN bash -c 'touch /pand-embedded-server.jar'
# 指定docker容器启动时运行jar包
ENTRYPOINT ["java","-Xms128m" ,"-Xmx128m", "-Xss1024K","-Djava.security.egd=file:/dev/./urandom","-jar", "-jar","/pand-embedded-server.jar"]
