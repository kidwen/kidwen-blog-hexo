---
title: eslint-angular
tag: eslint
date: 2023-04-01 08:00:00
cover: /images/eslint-angular.png
categories:
  - FRONTEND
---
Angular 是一个应用设计框架与开发平台，旨在创建高效而精致的单页面应用。
ESLint 是一个很棒的 JavaScript 代码检查工具。
TypeScript 是一种基于 JavaScript 的强类型编程语言。

## 在`angular`项目中添加`eslint`

> 此命令会默认安装`angular-eslint`相关依赖,包括`@angular-eslint/builder`,`@angular-eslint/eslint-plugin`,`@angular-eslint/eslint-plugin-template`,`@angular-eslint/schematics`,`@angular-eslint/template-parser`,`@typescript-eslint/eslint-plugin`,`@typescript-eslint/parser`,并在`angular.json`文件中自动添加如下配置（如果没有则手动添加）。

```json
{
    // ...
    "cli": {
        // ...
        "schematicCollections": ["@angular-eslint/schematics"]
    }
}
```

```bash
ng add @angular-eslint/schematics
```

### 安装eslint插件

```bash
npm install eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow eslint-plugin-unicorn --save-dev
```

### 配置eslint插件

> 插件用于加载第三方规则集合，在 plugins 属性中，可以定义一个数组，数组中的每个元素都是一个字符串，代表要使用的插件的名称。一旦配置中定义了插件，可以在 rules 属性中使用插件的规则。插件的规则名称由插件名称和规则名称组成，中间使用 / 分隔。

```javascript
// .eslintrc.js
module.exports = {
    // ...
    "plugins": [
        "import",
        "jsdoc",
        "unicorn",
        "prefer-arrow",
    ],
    // ...
}
```

### 配置lint规则

```javascript
// .eslintrc.js
module.exports = {
    // ...
    "rules":  {
        "import/no-default-export": "error",
        // ...
    },
    // ...
}
```

### 基于不同文件类型覆盖规则

```javascript
// .eslintrc.js
module.exports = {
    // ...
    "overrides": [
        {
            "files": [
                "*.component.ts"
            ],
            "plugins": [
                "@angular-eslint/eslint-plugin-template",
                "@angular-eslint",
            ],
            "rules": {
                "@angular-eslint/no-empty-lifecycle-method": "error",
                // ...
            }
        },
    ]
}
```

## 规则介绍

## 完整示例

{% include_code lang:javascript .eslintrc.js %}
