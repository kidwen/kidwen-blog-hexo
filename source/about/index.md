---
title: About
date: 2023-03-19 17:04:18
type: about
tags: 
  - me
---

<div class="content">
    <section class="about-content">
        <div class="tip">$</div>
        <div class="info">Hi! It's me, a web developer.</div>
    </section>
</div>
<style>
    .post-html {
        padding: 0;
    }
    @keyframes typing {
        from { width: 0; }
        to { width: 100% }
    }
    .content {
        background-color: #000;
        height: 20vh;
        border-radius: 4px;
        padding: 40px 20px 20px 20px;
        position: relative;
    }
    .content::before {
        height: 1px;
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 30px;
        background: #333;
        width: 100%;
        border-radius: 4px 4px 0 0;
    }
    .content::after {
        height: 1px;
        content: "✨";
        position: absolute;
        right: 0;
        text-align: center;
        line-height: 33px;
        top: 0;
        width: 100%;
    }
    .about-content {
        color: #ccc;
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    .info {
        width: 0;
        height: 20px;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 1s steps(20, end) forwards;
        border-right: 1px solid transparent;
    }
</style>
