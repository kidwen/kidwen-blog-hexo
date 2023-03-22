---
title: powershell proxy
date: 2023-03-20 16:10:22
cover: images/powershell.png
tags: 
  - powershell
categories:
  - PROXY
---
PowerShell is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language.

## Show
```sh
netsh winhttp show proxy
```

## Set
```sh
netsh winhttp set proxy 127.0.0.1:10808
```

## Cancle
```sh
netsh winhttp reset proxy
```
