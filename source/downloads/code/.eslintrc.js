module.exports = {
    "parserOptions": {
        "ecmaFeatures": {
            "modules": true
        },
        "project": [
            "tsconfig.eslint.json"
        ],
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "plugins": [
        "import",
        "jsdoc",
        "unicorn",
        "prefer-arrow",

    ],
    "rules": {
        "@typescript-eslint/array-type": [
            "error",
            {
                "default": "generic"
            }
        ],
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": [
            "error",
            {
                "types": {
                    "Object": {
                        "message": "Use {} instead."
                    },
                    "String": null
                }
            }
        ],
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                "overrides": {
                    "accessors": "explicit",
                    "constructors": "explicit",
                    "parameterProperties": "explicit"
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-require-imports": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-for-of": "off",
        "@typescript-eslint/prefer-readonly": "off",
        "@typescript-eslint/strict-boolean-expressions": [
            "off",
            {
                "allowNullable": true
            }
        ],
        "arrow-body-style": [
            "error",
            "as-needed"
        ],
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "brace-style": [
            "error",
            "1tbs"
        ],
        "class-methods-use-this": "off",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "complexity": [
            "error",
            {
                "max": 45
            }
        ],
        "default-case": "error",
        "eqeqeq": [
            "off",
            "always"
        ],
        "import/no-default-export": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/no-unassigned-import": "off",
        "import/order": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": [
            "off",
            {
                "code": 120
            }
        ],
        "max-lines": [
            "off",
            300
        ],
        "newline-per-chained-call": "off",
        "no-duplicate-case": "error",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-extra-bind": "error",
        "no-invalid-this": "error",
        "no-irregular-whitespace": "error",
        "no-magic-numbers": "off",
        "no-multiple-empty-lines": "error",
        "no-new-func": "error",
        "no-param-reassign": "off",
        "no-plusplus": "error",
        "no-redeclare": "error",
        "no-return-await": "error",
        "no-sequences": "error",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-void": "error",
        "padding-line-between-statements": [
            "off",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-const": [
            "off",
            {
                "destructuring": "all"
            }
        ],
        "prefer-object-spread": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "consistent"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "unicorn/filename-case": "error",
        "yoda": "error"
    },
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
                "@angular-eslint/sort-ngmodule-metadata-arrays": "error",
                "@angular-eslint/component-class-suffix": [
                    "error",
                    {
                        "suffixes": [
                            "Component"
                        ]
                    }
                ],
                "@angular-eslint/directive-class-suffix": [
                    "error",
                    {
                        "suffixes": [
                            "Directive"
                        ]
                    }
                ],
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "type": "element",
                        "prefix": "",
                        "style": "kebab-case"
                    }
                ],
                "@angular-eslint/use-injectable-provided-in": "error",
                "@angular-eslint/contextual-decorator": "error",
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "type": "element",
                        "prefix": "",
                        "style": "kebab-case"
                    }
                ],
                "@angular-eslint/use-injectable-provided-in": "error",
                "@angular-eslint/contextual-decorator": "error",

                "@angular-eslint/directive-selector": [
                    "error",
                    {
                        "type": "attribute",
                        "prefix": "",
                        "style": "camelCase"
                    }
                ],
                "@angular-eslint/no-attribute-decorator": "error",
                "@angular-eslint/no-output-on-prefix": "error",
                "@angular-eslint/no-pipe-impure": "error",
                "@angular-eslint/no-queries-metadata-property": "error",
                "@angular-eslint/no-lifecycle-call": "off",
                "@angular-eslint/component-max-inline-declarations": "off",

                "@angular-eslint/no-forward-ref": "off",
                "@angular-eslint/no-input-prefix": [
                    "off",
                    {
                        "prefixes": [
                            "can",
                            "is",
                            "should",
                            "has"
                        ]
                    }
                ],

                "@angular-eslint/pipe-prefix": "off",
                "@angular-eslint/no-output-native": "error",
                "@angular-eslint/prefer-output-readonly": "error",
                "@angular-eslint/relative-url-prefix": "error",
                "@angular-eslint/use-component-selector": "error",
                "@angular-eslint/use-component-view-encapsulation": "error",
                "@angular-eslint/contextual-lifecycle": [
                    "error"
                ],
                "@angular-eslint/prefer-on-push-component-change-detection": "error",
                "@typescript-eslint/await-thenable": "error",
                "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
                "@typescript-eslint/no-unnecessary-qualifier": "error",
                "@typescript-eslint/no-unnecessary-type-arguments": "error",
                "@typescript-eslint/promise-function-async": "error",
            }
        },
        {
            "files": [
                "*.ts"
            ],
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint",
            ],
            "rules": {
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/unbound-method": "error",
                "import/no-deprecated": "error",
                "no-useless-constructor": "error",
                "@typescript-eslint/no-unused-vars": "error"
            }
        },
        {
            "files": [
                "*.html"
            ],
            "parser": "@angular-eslint/template-parser",
            "rules": {
                "@angular-eslint/template/banana-in-box": "error",
                "@angular-eslint/template/accessibility-alt-text": "off",
                "@angular-eslint/template/accessibility-elements-content": "off",
                "@angular-eslint/template/accessibility-label-has-associated-control": "off",
                "@angular-eslint/template/accessibility-table-scope": "off",
                "@angular-eslint/template/accessibility-valid-aria": "off",
                "@angular-eslint/template/click-events-have-key-events": "off",
                // "@angular-eslint/template/conditional-complexity": [
                //     "error",
                //     {
                //         "maxComplexity": 5
                //     }
                // ],
                "@angular-eslint/template/cyclomatic-complexity": "off",
                "@angular-eslint/template/mouse-events-have-key-events": "error",
                "@angular-eslint/template/no-any": "error",
                "@angular-eslint/template/no-autofocus": "error",
                // some bug when use function call in template
                // "@angular-eslint/template/no-call-expression": "error",
                "@angular-eslint/template/no-distracting-elements": "error",
                "@angular-eslint/template/no-positive-tabindex": "off",
                "@angular-eslint/template/use-track-by-function": "off",
                "@angular-eslint/template/i18n": "off",
                "@angular-eslint/template/attributes-order": "error"
                // "@angular-eslint/template/i18n": [
                //     "error",
                //     {
                //         "requireDescription": true
                //     }
                // ]
            }
        }
    ]
}
