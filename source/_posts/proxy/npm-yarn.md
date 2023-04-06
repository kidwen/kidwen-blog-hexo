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

## NPM

### Show config

```bash
# show all config
npm config ls -l
# or
npm get proxy
```

### Set proxy

```bash
npm config set proxy=http://127.0.0.1:10809
```

### Cancle proxy

```bash
npm config delete proxy
```

### Set registry

```bash
npm config set registry https://registry.npmmirror.com
```

## Yarn

### Show config

```bash
yarn config list
# or
yarn config get proxy
```

### Set proxy

```bash
yarn config set proxy http://127.0.0.1:10809
```

### Cancle proxy

```bash
yarn config delete proxy
```

### Set registry

```bash
yarn config set registry https://registry.npmmirror.com
```
