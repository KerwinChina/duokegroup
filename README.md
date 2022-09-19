后端程序目录
===============

**系统需求**

- PHP >= 7.2.5
- MySQL >= 5.5.3
- Redis

## 安装

## 一键安装
上传你的代码，站点入口目录设置/public
在浏览器中输入你的域名或IP（例如：www.yourdomain.com）,
安装程序会自动执行安装。期间系统会提醒你输入数据库信息以完成安装，安装完成后建议删除app\install目录。

后台访问地址：
1.域名/admin
2.域名/index.php/admin
3.域名/index.php?s=/admin


安装过程中请牢记您的账号密码！

## 重新安装
1. 清除数据库
2. 删除/public/install.lock 文件
3. 执行：域名/install/ 按照提示进行安装
## 手动安装
1.创建数据库，倒入数据库文件
数据库文件目录/public/install/crmeb.sql
2.修改数据库连接文件
配置文件路径/.env
~~~
APP_DEBUG = true

[APP]
DEFAULT_TIMEZONE = Asia/Shanghai

[DATABASE]
TYPE = mysql
HOSTNAME = 127.0.0.1 #数据库连接地址
DATABASE = test #数据库名称
USERNAME = username #数据库登录账号
PASSWORD = password #数据库登录密码
HOSTPORT = 3306 #数据库端口
CHARSET = utf8
DEBUG = true

[LANG]
default_lang = zh-cn

[REDIS]
REDIS_HOSTNAME = 127.0.0.1 # redis链接地址
PORT = 6379 #端口号
REDIS_PASSWORD = 123456 #密码
SELECT = 0 #数据库
~~~
3.修改目录权限（linux系统）777
/public
/runtime
4.后台登录：
http://域名/admin
默认账号：admin 密码：crmeb.com
## 消息队列
```sh
php think queue:listen --queue
```

## 消息队列
```sh
php think queue:listen --queue
```

## 定时任务
在自动收货,库存预警等功能使用到
```sh
php think timer [ status ] [ --d ]
```
参数
- status: 状态
  - start: 启动
  - stop: 关闭
  - restart: 重启
- --d : 后台执行

## 长连接服务
在h5聊天,后台管理员消息通知等功能使用到
```sh
php think workerman [ status ]  [ --d ]
```
windows环境下需要分三步执行
```sh
# 内部通讯服务
php think workerman start --d
```
参数
- status: 状态
  - start: 启动
  - stop: 关闭
  - restart: 重启
- --d : 后台执行

## 文档

[TP6开发手册](https://www.kancloud.cn/manual/thinkphp6_0/content)


## 参与开发

