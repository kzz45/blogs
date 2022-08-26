---
prev: ./README.md
---

# OMG自建容器平台

## 依赖

- helm
- Gitlab
- Harbor(或者阿里云镜像仓库)
- Jenkins

## 约定

- 集群中的namespace的名称为: **项目名称**
- 用户代码仓库中包含配置好的**Jenkinsfile**
- 或者代码仓库中包含配置好的**gitlab-ci.yml**
- 用户项目所在Jenkins的目录: **产品名称/项目名称/环境名称/item_name**

## 使用步骤

### 系统管理后台

1. 新增用户组 新增产品 新增Jenkins 新增项目 新增Gitlab项目
2. Gitlab项目中新增开发者用户
3. Jenkins新增凭证(开发者用户)使得能够访问Gitlab项目

### 容器管理后台

1. 新增集群 新增应用环境 新增仓库

## 后端运行

```sh
python3 manage.py runserver 0.0.0.0:8000
```
