#### 配置路径别名 @

```react
//craco.config.js
const path = require("path")
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
// tsconfig.json
"baseUrl": ".",
"paths": {
  "@/*": [
    "src/*"
  ]
}
```

#### 配置eslint

```shell
  npm install -D eslint
  npx eslint --init
```

#### css重置

```shell
 npm install normalize.css
 // 在index.tsx引入
 import ("normalize.css")
```
