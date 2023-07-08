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
    <section class="person person2">
        <div class="header"></div>
        <div class="arm left left2"></div>
        <div class="body bordy2"></div>
        <div class="arm right right2"></div>
        <div class="leg left left2"></div>
        <div class="leg right right2"></div>
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
        left: 90px;
        bottom: 0;
        animation: 1s ease-in-out 0s infinite alternate jumpTop;
    }
    .person2 {
        transform: rotate(3deg);
        left: 20px;
        animation: none;
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
    .left2 {
        transform: rotate(0);
        background-color: #555;
    }
    .right {
        left: 20px;
        position: absolute;
        transform: rotate(-45deg);
    }
    .right2 {
        transform: rotate(-15deg);
        background-color: #333;
    }
    .body {
        position: absolute;
        left: 10px;
    }
    .bordy2 {
        background-color: #333;
    }
    .arm.left2 {
        transform-origin: top right;
        left: 10px;
        top: 25px;
        animation: 1s ease-in-out 1s infinite alternate toRightArm;
    }
    .arm.right2 {
        transform-origin: top right;
        left: 10px;
        top: 25px;
        animation: 1s ease-in-out 0s infinite alternate toLeftArm;
    }
    .leg.left {
        top: 42px;
        left: 10px;
        transform-origin: top right;
        transform: rotate(15deg);
        animation: 1s ease-in-out 0s infinite alternate jump;
    }
    .leg.left2 {
        animation: 1s ease-in-out 0s infinite alternate toRight;
    }
    .leg.right {
        top: 42px;
        left: 10px;
        transform-origin: top left;
        transform: rotate(-15deg);
        animation: 1s ease-in-out 0s infinite alternate jumpRight;
    }
    .leg.right2 {
        animation: 1s ease-in-out 0s infinite alternate toLeft;
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
    @keyframes toRight {
        from {
            transform: rotate(15deg);
        }
        to {
            transform: rotate(-15deg);
        }
    }
    @keyframes toLeft {
        from {
            transform: rotate(-15deg);
        }
        to {
            transform: rotate(15deg);
        }
    }
    @keyframes toRightArm {
        from {
            transform: rotate(15deg);
        }
        to {
            transform: rotate(-35deg);
        }
    }
    @keyframes toLeftArm {
        from {
            transform: rotate(15deg);
        }
        to {
            transform: rotate(-35deg);
        }
    }
</style>
