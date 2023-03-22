---
title: npm/yarn proxy/registry
date: 2023-03-20 16:12:22
cover: /images/yarn.png
tags: 
  - npm
  - yarn
categories:
  - PROXY
  - REGISTRY
---
npm stands for Node Package Manager. It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies.
Yarn is a package manager that doubles down as project manager. Whether you work on one-shot projects or large monorepos, as a hobbyist or an enterprise user, we've got you covered.

## Show config
```sh
# show all config
npm config ls -l
# or
npm get proxy

yarn config list
# or
yarn config get proxy
```

## Set proxy
```sh
npm config set proxy=http://127.0.0.1:10809

yarn config set proxy http://127.0.0.1:10809
```

## Cancle proxy
```sh
npm config delete proxy

yarn config delete proxy
```

## set registry
```sh
npm config set registry https://registry.npmmirror.com

yarn config set registry https://registry.npmmirror.com
```

## Cancle proxy
```sh
npm config set registry https://registry.npmjs.org

yarn config set registry https://registry.yarnpkg.com
```
