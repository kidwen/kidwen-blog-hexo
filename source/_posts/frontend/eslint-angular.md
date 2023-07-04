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
    - 禁止使用 `!` 进行非空断言后缀运算符。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-non-null-assertion": "error"
    }
    ```

#### no-require-imports
- [官方地址](https://typescript-eslint.io/rules/no-require-imports)

- 描述
    - 禁止调用 `require()`

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-require-imports": "error"
    }
    ```

#### no-this-alias
- [官方地址](https://typescript-eslint.io/rules/no-this-alias)

- 描述
    - 禁止使用 `this` 别名

- 选项
    ```typescript
    interface Options {
        /**
        * 是否忽略解构, 例如 `const { props, state } = this`.
        */
        allowDestructuring?: boolean;
        /**
        * 忽略的名称, 例如 ["self"] for `const self = this;`.
        */
        allowedNames?: string[];
    }

    const defaultOptions: Options = [
        { allowDestructuring: true, allowedNames: [] },
    ];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/no-this-alias": "error"
    }
    ```

#### no-unnecessary-type-assertion
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)

- 描述
    - 禁止不更改表达式类型的类型断言。

- 选项

    ```typescript
    interface Options {
        /**
         * 忽略的类型名称列表。
        */
        typesToIgnore?: string[];
    }

    const defaultOptions: Options = [{}];
    ```

- 示例
    ```json
    {
        "@typescript-eslint/no-unnecessary-type-assertion": ["error", { "typesToIgnore": ["Foo"] }]
    }
    ```

#### no-var-requires
- [官方地址](https://typescript-eslint.io/rules/no-var-requires)

- 描述
    - 不允许 `require` 语句（导入语句中除外）

        | ❌ | ✅ |
        | --- | --- |
        | var foo = require('foo'); | import foo = require('foo'); |
        | const foo = require('foo'); | require('foo'); |
        | let foo = require('foo'); | import foo from 'foo'; |

- 选项
    - none

- 示例

    ```typescript
    {
        "@typescript-eslint/no-var-requires": "error"
    }
    ```

#### prefer-for-of
- [官方地址](https://typescript-eslint.io/rules/prefer-for-of)

- 描述
    - 尽可能强制使用 for-of 循​​环而不是标准 for 循环。

- 选项
    - none

- 示例
    ```json
    {
        "@typescript-eslint/prefer-for-of": "error"
    }
    ```

#### prefer-readonly
- [官方地址](https://typescript-eslint.io/rules/prefer-readonly)

- 描述
    - 如果私有成员从未在构造函数外部修改过，则要求将其标记为只读

- 选项

    ```typescript
    interface Options {
        // 用于限制仅检查立即分配 `lambda` 值的成员。
        onlyInlineLambdas?: boolean;
    }

    const defaultOptions: Options = [{ onlyInlineLambdas: false }];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/prefer-readonly": ["error", { "onlyInlineLambdas": true }]
    }
    ```

#### strict-boolean-expressions
- [官方地址](https://typescript-eslint.io/rules/strict-boolean-expressions)

- 描述
    - 禁止布尔表达式中的某些类型。

- 选项

    ```typescript
    interface Options {
        allowString?: boolean;
        allowNumber?: boolean;
        allowNullableObject?: boolean;
        allowNullableBoolean?: boolean;
        allowNullableString?: boolean;
        allowNullableNumber?: boolean;
        allowNullableEnum?: boolean;
        allowAny?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
    }

    const defaultOptions: Options = [
        {
            allowString: true,
            allowNumber: true,
            allowNullableObject: true,
            allowNullableBoolean: false,
            allowNullableString: false,
            allowNullableNumber: false,
            allowNullableEnum: true,
            allowAny: false,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
    ];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/strict-boolean-expressions": "error"
    }
    ```

#### await-thenable
- [官方地址](https://typescript-eslint.io/rules/await-thenable)

- 描述
    - 禁止 `await` 不是 `Thenable` 的值。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/await-thenable": "error"
    }
    ```

#### no-unnecessary-boolean-literal-compare
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)

- 描述
    - 禁止与布尔文字进行不必要的相等比较。

- 选项

    ```typescript
    interface Options {
        /**
        * 是否允许可空布尔变量和“true”之间的比较。
        */
        allowComparingNullableBooleansToTrue?: boolean;
        /**
        * 是否允许可为 null 的布尔变量和“false”之间进行比较。
        */
        allowComparingNullableBooleansToFalse?: boolean;
    }

    const defaultOptions: Options = [
        {
            allowComparingNullableBooleansToTrue: true,
            allowComparingNullableBooleansToFalse: true,
        },
    ];
    ```
- 示例

    ```json
    {
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error"
    }
    ```

#### no-unnecessary-qualifier
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-qualifier)

- 描述
    - 禁止不必要的命名空间限定符。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unnecessary-qualifier": "error"
    }
    ```

#### no-unnecessary-type-arguments
- [官方地址](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)

- 描述
    - 不允许类型参数等于默认值。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unnecessary-type-arguments": "error"
    }
    ```

#### promise-function-async
- [官方地址](https://typescript-eslint.io/rules/promise-function-async)

- 描述
    - 要求任何返回 Promise 的函数或方法被标记为异步。

- 选项

    ```typescript
    interface Options {
        /**
        * 是否将“any”和“unknown”视为 Promise。
        */
        allowAny?: boolean;
        /**
        * 任何额外的类或接口名称都被视为 Promise。
        */
        allowedPromiseNames?: string[];
        checkArrowFunctions?: boolean;
        checkFunctionDeclarations?: boolean;
        checkFunctionExpressions?: boolean;
        checkMethodDeclarations?: boolean;
    }

    const defaultOptions: Options = [
        {
            allowAny: true,
            allowedPromiseNames: [],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true,
        },
    ];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/promise-function-async": "error"
    }
    ```

#### restrict-plus-operands
- [官方地址](https://typescript-eslint.io/rules/restrict-plus-operands)

- 描述
    - 要求加法的两个操作数类型相同，并且为 `bigint` `number` 或 `string`。

- 选项

    ```typescript
    interface Options {
        /**
        * 是否允许`any`类型值。

        */
        allowAny?: boolean;
        /**
        * 是否允许`boolean`类型值。
        */
        allowBoolean?: boolean;
        /**
        * 是否允许 `null` 或者 `undefined` 类型值.
        */
        allowNullish?: boolean;
        /**
        * 是否允许 `bigint`/`number` 类型值和 `string` 类型值相加。
        */
        allowNumberAndString?: boolean;
        /**
        * 是否允许 `regexp` 类型值。
        */
        allowRegExp?: boolean;
        /**
        * 是否检查复合赋值，例如`+=`。
        */
        checkCompoundAssignments?: boolean;
    }

    const defaultOptions: Options = [{ checkCompoundAssignments: false }];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/restrict-plus-operands": "error"
    }
    ```

#### unbound-method
- [官方地址](https://typescript-eslint.io/rules/unbound-method)

- 描述
    - 强制以预期范围调用未绑定方法。

- 选项

    ```typescript
    interface Options {
        /**
        * 是否跳过检查“静态”方法是否正确绑定。
        */
        ignoreStatic?: boolean;
    }

    const defaultOptions: Options = [{ ignoreStatic: false }];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/unbound-method": "error"
    }
    ```

#### no-unused-vars
- [官方地址](https://typescript-eslint.io/rules/no-unused-vars)

- 描述
    - 禁止使用未使用的变量。

- 选项
    - none

- 示例

    ```json
    {
        // 必须禁用基础规则
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error"
    }
    ```

#### no-explicit-any
- [官方地址](https://typescript-eslint.io/rules/no-explicit-any)

- 描述
    - 禁用 `any` 类型

- 选项
    ```typescript
    interface Options {
        /**
        * 是否启用自动修复，将`any`类型转换为`unknown`类型。
        */
        fixToUnknown?: boolean;
        /**
        * 是否忽略其余参数数组。
        */
        ignoreRestArgs?: boolean;
    }

    const defaultOptions: Options = [
        { fixToUnknown: false, ignoreRestArgs: false },
    ];
    ```

- 示例

    ```json
    {
        "@typescript-eslint/no-explicit-any": "error"
    }
    ```

#### no-unsafe-argument
- [官方地址](https://typescript-eslint.io/rules/no-unsafe-argument)

- 描述
    - 禁止使用`any`类型的值调用函数。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unsafe-argument": "error"
    }
    ```

#### no-unsafe-assignment
- [官方地址](https://typescript-eslint.io/rules/no-unsafe-assignment)

- 描述
    - 禁止将任何类型的值分配给变量和属性。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unsafe-assignment": "error"
    }
    ```

#### no-unsafe-call
- [官方地址](https://typescript-eslint.io/rules/no-unsafe-call)

- 描述
    - 禁止调用`any`类型的值。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unsafe-call": "error"
    }
    ```

#### no-unsafe-member-access
- [官方地址](https://typescript-eslint.io/rules/no-unsafe-member-access)

- 描述
    - 禁止成员访问`any`类型的值。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unsafe-member-access": "error"
    }
    ```

#### no-unsafe-return
- [官方地址](https://typescript-eslint.io/rules/no-unsafe-return)

- 描述
    - 禁止从函数返回`any`类型的值。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-unsafe-return": "error"
    }
    ```

#### no-useless-empty-export
- [官方地址](https://typescript-eslint.io/rules/no-useless-empty-export)

- 描述
    - 禁止不更改模块文件中任何内容的空导出。

- 选项
    - none

- 示例

    ```json
    {
        "@typescript-eslint/no-useless-empty-export": "error"
    }
    ```

## 完整示例

:::details Check what you want to copy to your config file
{% include_code lang:javascript .eslintrc.js %}
:::
