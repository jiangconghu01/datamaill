# datamaill

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vscode安装eslint和prettier插件
1. 从插件库里安装 eslint 和 prettier
2. 本地用户配置项中（.vscode/settings.json）加上如下内容
```
{
  "editor.tabSize":2,
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },
  "eslint.validate": [
    "javascriptreact",
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    }
  ]
}
```
