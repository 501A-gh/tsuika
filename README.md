# Trim Design Tools : Beta

Note : This design library is still at its beta stage development.

Trim design tools is a design library thats lets you add advanced looking components, with a simple touch.

## Beta Release Changes / Features:
- NPM support
- New img-blur component added

![Trim-Logo](img/trimBanner.png)

## 💡 Contents

1. [Getting started with a CDN](#cdn)
2. [NPM Installation](#npm)
2. [Documentation](#acn)

<a name="cdn"></a>

## 👉 CDN (Recommended)

Anybody can get started with Trim by inserting the following above the `</head>` tag.

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/501A-Designs/Trim/public/index.js" defer></script>
<link
  href="https://cdn.jsdelivr.net/gh/501A-Designs/Trim/public/trim.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/501A-Designs/Trim/public/classes.css"
  rel="stylesheet"
/>
```

Optional:
You can also insert the Palette CDN which will enable you to easily add color via `class`:

```html
<link
  href="https://cdn.jsdelivr.net/gh/501A-Designs/Palette/Palette.css"
  rel="stylesheet"
/>
```

Click [here](https://github.com/501A-Designs/Palette#readme) to learn more about Palette.

<a name="npm"></a>

## 📦 NPM Installation
If you want to tinker with the source feel free to do so by typing the following command in the terminal of your project.

`npm i trim-design-tools --save`


<a name="acn"></a>

## ⚠ About Class Naming

Pre-Styled Classes

- [Styled Ordered List](#sol)

Formatting / Position:

- [Simple Grid](#sg)
- [Simple Flex Box](#sfb)

Using Pseudo Elements:

- [Hover](#hvr)
- [Load](#load)



<a name="sol"></a>

### 📃 Styled Ordered Lists:

Adding the `id` with the names below will enable you to add styles to the number of your ordered list (Ordered list are use numerical values).

| Id Name      | List Style                             |
| ------------ | -------------------------------------- |
| ol-round     | Adds a circle around the number        |
| ol-capsule   | Adds a capsule shape around the number |
| ol-rectangle | Adds a rectangle around the number     |
| ol-square    | Adds a square around the number        |

_Add the id's to the `ol` tag_

You can also additionally style the color of the numbers and background by adding the `::before` pseudo class to your `id`'s `li` tag.

Example:
`ol-round li::before`

<a name="sg"></a>

### 🔳 Simple Grid:

You can use CSS grid by simply adding `grid-1fr-1fr-1fr...` as a class to a component. However, this grid can only support up to 6 columns at max (`grid-1fr-1fr-1fr-1fr-1fr-1fr`). Note: If you add the `section` tag as a child component of the Simple Grid class, it will be formatted into a Content Card (Grid Content Card). You can also use the `grid-auto` class, which will create a grid that is automatically laid out depending on the number of components you have.

<a name="sfb"></a>

### 🔛 Simple Flex Box:

You can create a CSS flex box by adding the following class names to any parent component. All flex properties have a flex-direction of `row`. Variations include the following:

| Class Name    | Flex Property            |
| ------------- | ------------------------ |
| flex-standard | No Assigned Property     |
| flex-right    | justify-content: right;  |
| flex-center   | justify-content: center; |
| flex-left     | justify-content: left;   |

<a name="hvr"></a>

### ☝ Hover:

Hover is initiated using the `:hover` pseudo element. Writing the `hover-classname` as a class name enables the object an effect when hovered.

| Class Name     | Effect on hover          |
| -------------- | ------------------------ |
| hover-rotation | Rotates in 3D            |
| hover-scale    | Scales                   |
| hover-opacity  | Lowers Opacity           |
| hover-blur     | Blurs                    |
| hover-arrow    | Adds an arrow at the end |

_Best works with Grid Content Card. `hover-arrow` works best with buttons_

<a name="load"></a>

### 🔃 Load:

The `load-effectname` class will be enabled when the webpage has loaded. This component is good for when you want to create page transitions, or when creating simple drawers with animations.

| Class Name | Effect on load                        |
| ---------- | ------------------------------------- |
| load-wave  | Shows content with a radiating circle |
| load-open  | Shows content from top to bottom      |
| load-drop  | Drops content one after another       |

_`wave` and `open` best work with the `<details>` and `<summary>` HTML tags._

v1.7 now supports the `load-animation` web component. You can change the color of the animating object using the `objColor` property.