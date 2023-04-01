---
title: eslint-angular
tag: eslint
cover: /images/eslint-angular.png
categories:
  - FRONTEND
---
Angular 是一个应用设计框架与开发平台，旨在创建高效而精致的单页面应用。
ESLint 是一个很棒的 JavaScript 代码检查工具。
TypeScript 是一种基于 JavaScript 的强类型编程语言。

## 在angular项目中添加eslint
```bash
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

### 安装eslint插件
```bash
npm install eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow eslint-plugin-unicorn --save-dev
```

### 配置eslint插件
> 插件用于加载第三方规则集合，在 plugins 属性中，可以定义一个数组，数组中的每个元素都是一个字符串，代表要使用的插件的名称。一旦配置中定义了插件，可以在 rules 属性中使用插件的规则。插件的规则名称由插件名称和规则名称组成，中间使用 / 分隔。
```javascript
module.exports = {
    ...
    "plugins": [
        "import",
    ],
    "rules":  {
        "import/no-default-export": "error",
        ...
    }
}
```
## 完整示例
{% include_code lang:javascript .eslintrc.js %}
