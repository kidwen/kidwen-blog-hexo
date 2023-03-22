---
title: Develope with hexo
cover: /images/blog.jpg
categories:
  - ARTICLE
tag: doc
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start
```bash
# install hexo global
npm i -g hexo-cli

# goto workspace
npm i
# or
yarn
```
:::danger remove the comments list
goto `node-modules/hexo-theme-aurora/source/static/js/app.6d2c358d.js` and delete `ye.render = ie;`
:::

### Create a new post

``` bash
hexo new 'My New Post'
# or
hexo n page 'My New Page'
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
yarn start
```

More info: [Server](https://hexo.io/docs/server.html)

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ yarn deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)


