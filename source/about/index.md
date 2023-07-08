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
    <section class="person">
            <div class="header"></div>
            <div class="arm left"></div>
            <div class="body"></div>
            <div class="arm right"></div>
            <div class="leg left"></div>
            <div class="leg right"></div>
        </section>
</div>
<style>
    .post-html {
        padding: 0;
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
    .person {
        position: absolute;
        height: 67px;
        left: 30px;
        bottom: 0;
        animation: 1s ease-in-out 0s infinite alternate jumpTop;
    }
    .header {
        width: 20px;
        height: 20px;
        background-color: #999;
        border-radius: 50%;
    }
    .arm, .leg, .body {
        width: 2px;
        height: 25px;
        background-color: #666;
    }
    .left {
        position: absolute;
        transform: rotate(45deg);
    }
    .right {
        left: 20px;
        position: absolute;
        transform: rotate(-45deg);
    }
    .body {
        position: absolute;
        left: 10px;
    }
    .leg.left {
        top: 42px;
        left: 10px;
        transform-origin: top right;
        transform: rotate(15deg);
        animation: 1s ease-in-out 0s infinite alternate jump;
    }
    .leg.right {
        top: 42px;
        left: 10px;
        transform-origin: top left;
        transform: rotate(-15deg);
        animation: 1s ease-in-out 0s infinite alternate jumpRight;
    }
    @keyframes typing {
        from { width: 0; }
        to { width: 100% }
    }
    @keyframes jump {
        from {
            transform: rotate(15deg);
        }
        to {
            transform: rotate(45deg);
        }
    }
    @keyframes jumpRight {
        from {
            transform: rotate(-15deg);
        }
        to {
            transform: rotate(-45deg);
        }
    }
    @keyframes jumpTop {
        from {
            bottom: 0;
        }
        to {
            bottom: 20px;
        }
    }
    @media only screen and (max-width: 720px) {
        .content {
            height: 30vh;
        }
    }
</style>
