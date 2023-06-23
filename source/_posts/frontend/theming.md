---
title: 主题
tag: theming
date: 2023-06-15 13:30:00
cover: /images/theming.jpeg
categories:
  - FRONTEND
---

*将你的页面自适应匹配用户的喜好，例如黑色模式*

你可以调整你的网站的展示以匹配用户的喜好。首先，你需要知道如何借力浏览器来增加你的网站曝光从而提高品牌知名度。

### 自定义浏览器界面

一些浏览器可以允许你基于网站的调色板设置一个主题颜色。然后浏览器界面会自适应你设置的颜色。在页面`head`中名为`theme-color`的`meta`元素中添加颜色。
```html
<meta name="theme-color" content="#00D494">
```

> 像这样将样式信息放在HTML中而不是CSS中可能会显得有点怪异，但是这允许浏览器一旦加载好页面尽快更新它的界面而不是等待CSS加载好。

你可以使用JavaScript更新`theme-color`的值。请谨慎操作。如果浏览器的颜色模式变化太频繁会使用户难以接受。请考虑微调主题颜色的细微方式。如果变化过于明显，用户可能会因为感到烦恼而离开。

你也可以在网页[manifest](https://developer.mozilla.org/docs/Web/Manifest)中指定一个主题色。这个JSON文件中包含了关于你的网站的元数据。

将清单文件的链接放在文档的`head`。使用`rel`值为`manifest`的`link`元素

```html
<link rel="manifest" href="/manifest.json">
```

在`manifest`文件中，使用键值对（key/value）的方式列出你的元数据
```json
{
    "short_name": "Clearleft",
    "name": "Clearleft design agency",
    "start_url": "/",
    "background_color": "#00D494",
    "theme_color": "#00D494",
    "display": "standalone"
}
```

如果访问者决定将您的网站添加到他们的主屏幕上，浏览器将使用您清单文件中的信息来显示适当的快捷方式。

> 了解如何添加 Web 应用manifest的更多信息

1. [Web App Manifest - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Manifest): Mozilla Developer Network (MDN) 提供的关于 Web App Manifest 的详细文档，包含各个属性和用法的解释。

1. [Web App Manifest Specification - W3C](https://www.w3.org/TR/appmanifest/): Web App Manifest 的官方规范文档，由 W3C（World Wide Web Consortium）提供，包含清单文件的详细规范。

1. [Introduction to Web App Manifests - Google Developers](https://web.dev/add-manifest): Google Developers 提供的关于 Web App Manifest 的简介和入门指南，包含示例和最佳实践。

通过查阅以上资源，您将能够更深入地了解如何添加和配置 Web 应用清单（Web App Manifest）以及相关属性的使用方法。

### 提供一个黑色模式

许多操作系统允许用户指定一个黑色或者亮色主题，这是根据用户的主题偏好优化您的网站的好主意。你可以通过在媒体特性中的`prefers-color-scheme`访问此首选项。

```css
@media (prefers-color-scheme: dark) {
    // 定义黑色主题样式
}
```

{% iframe https://codepen.io/kidwen-the-solid/embed/jOQVyjj?default-tab=html%2Cresult %}

在`meta`元素中使用`prefers-color-scheme`媒体特性指定主题颜色。

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
```

你也可以在svg中使用`prefers-color-scheme`媒体特性。如果你使用一个SVG文件作为你的图标，它也会被黑色模式调节。[参考](https://blog.tomayac.com/2019/09/21/prefers-color-scheme-in-svg-favicons-for-dark-mode-icons/)

### 使用自定义属性主体化

### 图片

### 表单

{% iframe https://codepen.io/kidwen-the-solid/embed/VwEOYmo?default-tab=html%2Cresult&editable=true %}
