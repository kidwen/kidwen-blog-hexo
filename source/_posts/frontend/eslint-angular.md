---
title: eslint-angular
tags: 
  - eslint
  - angular
  - typescript
  - javascript
date: 2023-04-01 08:00:00
cover: /images/eslint-angular.jpeg
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

### @typescript-eslint

#### array-type

- [官方地址](https://typescript-eslint.io/rules/array-type)

- 描述
    - 配置数组声明方式,`error`代表使用`T[]`

- 类型
    - 'error'|Array
- 选项

    ```TypeScript
    {
        default?: "array" | "generic" | "array-simple";
        readonly?: "array" | "generic" | "array-simple";
    }
    ```

- 示例

    ```json
    {
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "generic"
            }
        ],
    }
    ```

#### ban-ts-comment

- [官方地址](https://typescript-eslint.io/rules/ban-ts-comment)

- 描述
    - 禁止`@ts-<directive>`注释或要求指令后的描述
    - 默认只允许`@ts-check`
    - `allow-with-description`允许带描述的注释指令

    ```typescript
    // @ts-expect-error: description
    ```

    - `descriptionFormat`正则匹配指令注释后的描述,不匹配则报错
    - `minimumDescriptionLength`指令注释后的描述最短长度

- 选项

    ```typescript
    type DirectiveConfigSchema =
        | boolean
        | "allow-with-description"
        | {
            descriptionFormat?: string;
            };

    interface Options {
        "ts-expect-error"?: DirectiveConfigSchema;
        "ts-ignore"?: DirectiveConfigSchema;
        "ts-nocheck"?: DirectiveConfigSchema;
        "ts-check"?: DirectiveConfigSchema;
        minimumDescriptionLength?: number;
    }

    const defaultOptions: Options = [
        {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": true,
            "ts-check": false,
            minimumDescriptionLength: 3,
        },
    ];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/ban-ts-comment": [
            "error",
            { 
                "ts-expect-error": "allow-with-description",
                "ts-ignore": true,
                "ts-nocheck": true,
                "ts-check": false,
                "minimumDescriptionLength": 3
            }
        ],
    }
    ```

#### ban-types

- [官方地址](https://typescript-eslint.io/rules/ban-types)

- 描述
    - 使用小写类型以保持一致性
    - 使用正确的函数类型
    - 使用安全的object类型

        | ❌ | ✅ |
        | --- | --- |
        | String | string |
        | Boolean | boolean |
        | Number | number |
        | Symbol | symbol |
        | BigInt | bigint |
        | Function | () => {} |
        | Object | object \| 特定类型 |
        | {} | 特定类型 |

- 选项

    ```typescript
    interface Options {
    types?: {
        [k: string]:
        | null
        | boolean
        | string
        | {
            message?: string;
            fixWith?: string;
            suggest?: string[];
            };
    };
    extendDefaults?: boolean;
    }

    const defaultOptions: Options = [{}];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/ban-types": "error"
    }
    // 或者
    {
        "@typescript-eslint/ban-types": [
            "error",
            {
            "types": {
                // 自定义消息描述为什么不能使用此类型
                "Foo": "Don't use Foo because it is unsafe",

                // 添加一个自定义消息，并告知插件如何修复这个问题
                "OldAPI": {
                "message": "Use NewAPI instead",
                "fixWith": "NewAPI"
                },

                // 取消默认禁用的类型
                "{}": false
            },
            "extendDefaults": true
            }
        ]
    }
    ```

#### consistent-type-definitions

- [官方地址](https://typescript-eslint.io/rules/consistent-type-definitions)

- 描述
    - 强制使用`interface`或者`type`来声明类型

- 选项

    ```typescript
    type Options = "interface" | "type";

    const defaultOptions: Options = ["interface"];
    ```

- 示例

    ```json
    {
       "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
       // 或者
       "@typescript-eslint/consistent-type-definitions": ["error", "type"]
    }
    ```

#### dot-notation
- [官方地址](https://typescript-eslint.io/rules/dot-notation)

- 描述
    - 尽可能强制执行点表示法

        | ❌ | ✅ |
        | --- | --- |
        | obj["property"] | obj.property |

- 选项

    ```typescript
    interface Options extends BaseDotNotationOptions {
        allowPrivateClassPropertyAccess?: boolean;
        allowProtectedClassPropertyAccess?: boolean;
        allowIndexSignaturePropertyAccess?: boolean;
    }

    const defaultOptions: Options = {
        ...baseDotNotationDefaultOptions,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
    };
    ```

- 示例

    ```json
    {
        // 必须禁用基础规则
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "error"
    }
    ```

#### explicit-member-accessibility
- [官方地址](https://typescript-eslint.io/rules/explicit-member-accessibility)

- 描述
    - 需要对类属性和方法进行显式可访问性修饰符。`public`, `protected`, `private`

- 选项

    ```typescript
    type AccessibilityLevel = "explicit" | "no-public" | "off";

    interface Options {
        accessibility?: AccessibilityLevel;
        overrides?: {
            accessors?: AccessibilityLevel;
            constructors?: AccessibilityLevel;
            methods?: AccessibilityLevel;
            properties?: AccessibilityLevel;
            parameterProperties?: AccessibilityLevel;
        };
        ignoredMethodNames?: string[];
    }

    const defaultOptions: Options = [{ accessibility: "explicit" }];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/explicit-member-accessibility": "error"
    }
    ```

#### no-empty-function
- [官方地址](https://typescript-eslint.io/rules/no-empty-function)

- 描述
    - 不允许空方法

- 选项

    ```typescript

    type AllowOptionEntries =
        | 'functions'
        | 'arrowFunctions'
        | 'generatorFunctions'
        | 'methods'
        | 'generatorMethods'
        | 'getters'
        | 'setters'
        | 'constructors'
        | 'private-constructors'
        | 'protected-constructors'
        | 'asyncFunctions'
        | 'asyncMethods'
        | 'decoratedFunctions'
        | 'overrideMethods';

    interface Options extends BaseNoEmptyFunctionOptions {
        allow?: Array<AllowOptionEntries>;
    }
    const defaultOptions: Options = {
        ...baseNoEmptyFunctionDefaultOptions,
        allow: [],
    };
    ```

- 示例

    ```json
    {
        // 必须禁用基础规则
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": [
            "error",
            {
                "allow": ["decoratedFunctions"]
            }
        ]
    }
    ```

#### no-for-in-array
- [官方地址](https://typescript-eslint.io/rules/no-for-in-array)

- 描述
    - 禁止使用 for-in 循环迭代数组。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-for-in-array": "error"
    }
    ```

#### no-inferrable-types
- [官方地址](https://typescript-eslint.io/rules/no-inferrable-types)

- 描述
    - 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明。

        | ❌ | ✅ |
        | --- | --- |
        | const a: bigint = 10n; | const a = 10n; |
        | const a: bigint = BigInt(10); | const a = BigInt(10); |
        | const a: boolean = !0; | const a = !0; |
        | const a: boolean = Boolean(null); | const a = Boolean(null); |
        | const a: boolean = true; | const a = true; |
        | const a: null = null; | const a = null; |
        | const a: number = 10; | const a = 10; |
        | const a: number = Infinity; | const a = Infinity; |
        | const a: number = NaN; | const a = NaN; |
        | const a: number = Number('1'); | const a = Number('1'); |
        | const a: RegExp = /a/; | const a = /a/; |
        | const a: RegExp = new RegExp('a'); | const a = new RegExp('a'); |
        | const a: string = `str`; | const a = `str`; |
        | const a: string = String(1); | const a = String(1); |
        | const a: symbol = Symbol('a'); | const a = Symbol('a'); |
        | const a: undefined = undefined; | const a = undefined; |
        | const a: undefined = void someValue; | const a = void someValue;

- 选项

    ```typescript
    interface Options {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
    }

    const defaultOptions: Options = [
        { ignoreParameters: false, ignoreProperties: false },
    ];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/no-inferrable-types": "error"
    }
    ```

#### no-non-null-assertion
- [官方地址](https://typescript-eslint.io/rules/no-non-null-assertion)

- 描述
- 选项
- 示例

#### no-require-imports
- [官方地址](https://typescript-eslint.io/rules/no-require-imports)

- 描述
- 选项
- 示例

#### no-this-alias
- [官方地址](https://typescript-eslint.io/rules/no-this-alias)

- 描述
- 选项
- 示例

#### no-unnecessary-type-assertion
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)

- 描述
- 选项
- 示例

#### no-var-requires
- [官方地址](https://typescript-eslint.io/rules/no-var-requires)

- 描述
- 选项
- 示例

#### prefer-for-of
- [官方地址](https://typescript-eslint.io/rules/prefer-for-of)

- 描述
- 选项
- 示例

#### prefer-readonly
- [官方地址](https://typescript-eslint.io/rules/prefer-readonly)

- 描述
- 选项
- 示例

#### strict-boolean-expressions
- [官方地址](https://typescript-eslint.io/rules/strict-boolean-expressions)

- 描述
- 选项
- 示例

#### await-thenable
- [官方地址](https://typescript-eslint.io/rules/await-thenable)

- 描述
- 选项
- 示例

#### no-unnecessary-boolean-literal-compare
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)

- 描述
- 选项
- 示例

#### no-unnecessary-qualifier
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-qualifier)

- 描述
- 选项
- 示例

#### no-unnecessary-type-arguments
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)

- 描述
- 选项
- 示例

#### promise-function-async
- [官方地址](https://typescript-eslint.io/rules/promise-function-async)

- 描述
- 选项
- 示例

#### restrict-plus-operands
- [官方地址](https://typescript-eslint.io/rules/restrict-plus-operands)

- 描述
- 选项
- 示例

#### unbound-method
- [官方地址](https://typescript-eslint.io/rules/unbound-method)

- 描述
- 选项
- 示例

#### no-unused-vars
- [官方地址](https://typescript-eslint.io/rules/no-unused-vars)

- 描述
- 选项
- 示例

## 完整示例

:::details Check what you want to copy to your config file
{% include_code lang:javascript .eslintrc.js %}
:::
