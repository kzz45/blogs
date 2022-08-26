# Jenkins安装

## Mac Docker Jenkins

```sh
docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins
docker exec -it $container_id /bin/sh
cat /var/jenkins_home/secrets/initialAdminPassword
```

## Jenkins插件

- Git Parameter
- Build With Parameters
- build user vars plugin
