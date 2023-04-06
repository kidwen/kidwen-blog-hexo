---
title: python pip proxy
date: 2023-04-5 18:00:00
cover: /images/python.png
tags: 
  - python
categories:
  - PROXY
---
Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.

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
