---
title: git proxy
date: 2023-04-6 17:06:00
cover: /images/git.png
tags: 
  - git
categories:
  - PROXY
---
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

## Show config

```bash
git config -l
```

## Set proxy

```bash
git config --global http.proxy 127.0.0.1:10809
git config --global https.proxy 127.0.0.1:10809
```

## Cancle proxy

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```
