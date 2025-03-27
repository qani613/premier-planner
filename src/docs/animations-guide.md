# Premier Planner Animation System Guide

This guide explains how to use the reusable animation system throughout the Premier Planner website.

## Quick Start

1. Import the necessary files in your component:

```astro
---
// YourComponent.astro
import { initAnimations } from '../scripts/animations.js';
---
```

2. Add animation classes to your elements:

```html
<div class="animate slide-up delay-200">This will slide up with a delay</div>
```

3. Initialize the animations in your component's script:

```html
<script>
  import { initAnimations } from '../scripts/animations.js';
  document.addEventListener('DOMContentLoaded', initAnimations);
</script>
```

## Available Animation Classes

### Base Class
- `animate`: Required base class for all animated elements

### Animation Types
- `slide-up`: Element slides up into view
- `slide-down`: Element slides down into view
- `slide-left`: Element slides in from right to left
- `slide-right`: Element slides in from left to right
- `fade-in`: Element fades in without motion
- `scale-in`: Element scales up slightly while fading in

### Delay Classes
- `delay-100`: 0.1 second delay
- `delay-200`: 0.2 second delay
- `delay-300`: 0.3 second delay
- `delay-400`: 0.4 second delay
- `delay-500`: 0.5 second delay

### Special Animations
- `circle-progress`: For circular progress indicators 
- `percentage-text`: For percentage text inside circular indicators

## Examples

### Basic Slide-Up Animation

```html
<div class="animate slide-up">I will slide up when scrolled into view</div>
```

### Delayed Fade-In Animation

```html
<div class="animate fade-in delay-300">I will fade in with a delay</div>
```

### Staggered Card Animations

```html
<div class="grid grid-cols-3 gap-4">
  <div class="card animate slide-up delay-100">Card 1</div>
  <div class="card animate slide-up delay-200">Card 2</div>
  <div class="card animate slide-up delay-300">Card 3</div>
</div>
```

### Circular Progress Animation

```html
<div class="animate fade-in">
  <svg class="w-full h-full" viewBox="0 0 36 36">
    <path
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke="#f3f3f3"
      stroke-width="3"
    />
    <path
      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
      fill="none"
      stroke="#E75A7C"
      stroke-width="3"
      stroke-dasharray="75, 100"
      class="circle-progress"
    />
    <text x="18" y="20.35" class="percentage-text" text-anchor="middle" fill="#E75A7C">75%</text>
  </svg>
</div>
```

## Advanced Usage

### Triggering Animations Manually

```js
import { triggerAnimations } from '../scripts/animations.js';

// Trigger all animations with a specific class
triggerAnimations('.my-custom-elements');

// Trigger all animations
triggerAnimations();
```

### Resetting Animations

```js
import { resetAnimations } from '../scripts/animations.js';

// Reset animations to play again
resetAnimations('.my-section .animate');
```

## Tips for Best Use

1. **Group animations logically**: Use similar animations for similar content types
2. **Use delays sparingly**: Too many delayed animations can feel slow
3. **Keep it subtle**: Small movements often look more professional
4. **Consider performance**: Animate larger containers rather than many small elements
5. **Test on mobile**: Ensure animations work well on smaller screens 