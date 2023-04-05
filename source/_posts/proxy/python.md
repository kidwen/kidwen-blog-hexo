---
title: python pip proxy
date: 2023-04-5 18:00:00
# cover: /images/powershell.jpg
tags: 
  - python
categories:
  - PROXY
---
Python is powerful... and fast;
plays well with others;
runs everywhere;
is friendly & easy to learn;
is Open.

## `pip` 单次设置代理
```bash
pip install xxx --proxy=http://localhost:10809
```

## `pip` 设置镜像源
```ini
# C:\Users\[userName]\pip\pip.ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn

[search]
index = https://pypi.tuna.tsinghua.edu.cn/simple
```
