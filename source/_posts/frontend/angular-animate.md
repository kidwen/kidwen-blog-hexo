---
title: animate-angular
tags: 
    - angular
    - animate
date: 2023-06-15 10:00:00
cover: /images/animate-angular.gif
categories:
  - FRONTEND
---
Angular Animations is a built-in animation library in Angular framework that allows you to create rich and interactive animations in your application. It provides a powerful set of tools and APIs that make it easy to implement dynamic and smooth animation effects in Angular.

> Here are some features and capabilities of Angular Animations:

1. Declarative Syntax: Angular Animations uses a declarative syntax to describe animation effects. You can use specific directives and attributes in your templates, and define animation triggers and state transitions in your component classes to control the behavior of animations.

1. Diverse Animation Support: Angular Animations supports various types of animation effects including fading, translation, rotation, scaling, color changes, and more. You can create complex animation sequences by combining and chaining multiple animations to achieve richer effects.

1. Triggers and States: By defining triggers and states, you can control when and how animations are triggered based on specific conditions. Triggers can be mouse events, route navigation, component lifecycle hooks, and more, while states define the transitions between different animation states.

1. Easing Functions: Angular Animations supports a variety of easing functions to define the speed curve of animations, making them smoother and more natural. You can use built-in easing functions or define custom ones.

1. Animation Groups and Parallel Effects: You can combine multiple animations into an animation group, allowing them to play simultaneously or sequentially. This enables you to create more complex animation effects, such as scaling and rotating an element at the same time.

1. Dynamic and Conditional Animations: Angular Animations allows you to enable or disable animations based on dynamic data or conditions. You can use Angular's data binding and conditional statements to implement dynamic animations based on states or user interactions.

1. High Performance and Optimization: Angular Animations is designed to be a high-performance animation library. It leverages Angular's change detection mechanism and frame synchronization strategy, as well as utilizes the Web Animations API when available, to achieve hardware-accelerated animation effects.

1. In summary, Angular Animations is a powerful animation library provided by the Angular framework. With its declarative syntax and rich set of features, you can easily create interactive and smooth animation effects in your application. Whether it's a simple element fade-in or a complex animation sequence, Angular Animations provides flexible tools and APIs to implement a wide range of animation effects.

---

## Preparation

> Add relation module in `NgModule`
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    declarations: [ ],
    bootstrap: [ ],
})
export class AppModule { }
```

> Use the method or property from `@angular/animations`
```typescript
import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
} from '@angular/animations';
```

## Introduction

### `state()`
> define the custom state of animation, then you can conver one state to another state to use some animations, the defualt state such as `void`(the dom not render) and `*`(the dom rendered)
```typescript
state('disable', style({
    backgroundColor: 'rgba(0, 0, 0, .12)',
    color: 'rgba(0, 0, 0, .38)'
}))
```

### `style()`
> define the style of `state`, must be cameCase for style attributes that contain dashes, such as backgroundColor or wrap them in quotes, such as 'background-color'

### `animate()`
> Use the animate() function to define the length, delay, and easing of a transition, and to designate the style function for defining styles while transitions are taking place. Use the animate() function to define the keyframes() function for multi-step animations. These definitions are placed in the second argument of the animate() function.
```typescript
animate ('duration delay easing')
```
- `duration` such as `100`, `'100ms'`, `'0.1s'`
- `delay` wait for the value time then run the animation
- `easing` suche as `ease-in`, `ease-out`, `ease-in-out`

### `transition()`
> The `transition()` function accepts two arguments: The first argument accepts an expression that defines the direction between two transition states, and the second argument accepts one or a series of `animate()` steps
```typescript
transition('open => closed', [
  animate('1s')
]),
```

### `trigger()`
> Kicks off the animation and serves as a container for all other animation function calls. HTML template binds to triggerName. Use the first argument to declare a unique trigger name. Uses array syntax.
```typescript 
@Component({
    selector: 'app-open-close',
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.8,
                backgroundColor: 'blue'
            })),
            transition('open => closed', [
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ]),
        ])
    ]
```

## Example
