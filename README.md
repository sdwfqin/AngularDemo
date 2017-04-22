# Angular+Bootstrap

## Bootstrap导入
1. 在工程目录下面安装以下两个包
``` bash
npm install -S jquery bootstrap
```
2. 将这两个第三方框架放入到依赖中去
``` bash
npm install -D @types/jquery @types/bootstrap
```
3. 修改.angular-cli.json文件
``` json
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.js",
    "../node_modules/bootstrap/dist/js/bootstrap.js"
  ],
```
4. 修改tsconfig.app.json文件
``` json
"types": [
  "jquery",
  "bootstrap"
]
```

