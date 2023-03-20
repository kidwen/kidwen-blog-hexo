---
title: powershell proxy
date: 2023-03-20 16:10:22
tags: 
  - doc
categories:
  - PROXY
---
PowerShell is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language.

> shwo your proxy config
```sh
netsh winhttp show proxy
```

> set proxy
```sh
netsh winhttp set proxy 127.0.0.1:10808
```

> cancle proxy
```sh
netsh winhttp reset proxy
```
