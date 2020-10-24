# Trim v1.3

A design library thats lets you add advanced looking components.
Trim is written purely using vanilla CSS and aims to provide people with advanced looking components with a simple touch.

![Trim-Logo](Trim-Banner.png)

## 💡 Contents

1. [Getting Started](#gs)
2. [About Class Naming](#acn)

<a name="gs"></a>

## 👉 Getting Started

Anybody can get started with Trim by inserting the following above the `</head>` tag.

```html
<link
  href="https://cdn.jsdelivr.net/gh/501A-Designs/Trim/Trim.css"
  rel="stylesheet"
/>
```

You can also insert the Palette CDN which will enable you to easily add color components:

```html
<link
  href="https://cdn.jsdelivr.net/gh/501A-Designs/Palette/Palette.css"
  rel="stylesheet"
/>
```

Click [here](https://github.com/501A-Designs/Palette#readme) to learn more about Palette.

<a name="acn"></a>

## ⚠ About Class Naming

Pre-Styled Components

- [🔘 Buttons / Links](#btn\lnks)
- [📊 Graphs](#grphs)
- [🎴 Content Cards](#cc)

Formatting / Position:

- [🔳 Simple Grid](#sg)
- [🔛 Simple Flex Box](#sfb)

Using Pseudo Elements:

- [☝ Hover](#hvr)
- [👀 Glance](#glc)
- [🔃 Load](#load)
- [🔛 ＋ 🎴 Flex Cards](#fcs)

<a name="btn/lnks"></a>

### 🔘 Buttons / Links:

Trim comes with two types of buttons. They can be added through the classes named `button-standard` or `button-rounded` which have rounded corners.

<a name="grphs"></a>

### 📊 Graphs:

Graphs can be inserted by adding the class `graph-bar` which creates a single horizontal bar-graph. The `graph-multi-bar` class enables you to nest multiple bar graphs with the addition of labels if necessary.

<a name="cc"></a>

### 🎴 Content Cards:

Content cards are `section` tags with the class of `contentCard` that enable you to show your information in a pre-styled card format.

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

<!-- ### ⚡ Effects:

Effects extend the child components capabilities inside your grid. Add an effect to one of your child components by inserting the `fx-effecttype-effectname` class. All effects as of the latest version are as show from the following: -->

<a name="hvr"></a>

### ☝ Hover:

Hover is initiated using the `:hover` pseudo element. Writing the `hover-classname` as a class name enables the object an effect when hovered.

| Class Name     | Effect on hover |
| -------------- | --------------- |
| hover-rotation | Rotates in 3D   |
| hover-scale    | Scales          |
| hover-opacity  | Lowers Opacity  |
| hover-blur     | Blurs           |

_Best works with Grid Content Card._

<a name="glc"></a>

### 👀 Glance:

Glance is initiated using the `:active` pseudo element. Writing the `active-glance` as a class enables the child object to become a pop up when pressed. (This component is good for when you want to condense a large amount of information in one child component)
_Best works with Grid Content Card._

<a name="load"></a>

### 🔃 Load:

The `load-effectname` class will be enabled when the webpage has loaded. This component is good for when you want to create page transitions, or when creating simple drawers with animations.

| Class Name | Effect on load                        |
| ---------- | ------------------------------------- |
| load-wave  | Shows content with a radiating circle |
| load-open  | Shows content from top to bottom      |
| load-drop  | Drops content one after another       |

_`wave` and `open` best work with the `<details>` and `<summary>` HTML tags._

<a name="fcs"></a>

### 🔛 ＋ 🎴 Flex Cards:

Flex cards utilize the flex box property and enables you to add a horizontally flowing card layout for displaying your short content.
Any `section` or `div` tag under the `flex-cards` class becomes part of the flex card.
