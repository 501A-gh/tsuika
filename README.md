![Trim-Logo](Trim-Banner.png)

# Trim v1.2

A design library thats lets you add advanced looking components.
Trim is written purely using vanilla CSS and aims to provide people with advanced looking components with a simple touch.

## Contents

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

Click [here](https://github.com/501A-Designs/Palette/blob/master/Palette.css) to learn more about Palette.

<a name="acn"></a>

## About Class Naming

### 🔘 Buttons / Links:

Trim comes with two types of buttons. They can be added through the classes named `button-standard` or `button-rounded` which have rounded corners.

### 📊 Graphs:

Graphs can be inserted by adding the class `graph-bar` which creates a single horizontal bar-graph. The `graph-multi-bar` class enables you to nest multiple bar graphs with the addition of labels if necessary.

### 🎴 Content Cards:

Content cards are `section` tags with the class of `contentCard` that enable you to show your information in a pre-styled card format.

### 🔳 Simple Grid:

You can use CSS grid by simply adding `grid-1fr-1fr-1fr...` as a class to a component. However, this grid can only support up to 6 columns at max (`grid-1fr-1fr-1fr-1fr-1fr-1fr`). Note: If you add the `section` tag as a child component of the Simple Grid class, it will be formatted into a Content Card (Grid Content Card). You can also use the `grid-auto` class, which will create a grid that is automatically laid out depending on the number of components you have.

### ⚡ Effects:

Effects extend the child components capabilities inside your grid. Add an effect to one of your child components by inserting the `fx-effecttype-effectname` class. All effects as of the latest version are as show from the following:

#### ☝ Hover:

The below are all effects that are initiated using the `:hover` element. `:hover` is the only element where you would not need to write the effecttype.

| Class Name  | Effect on hover |
| ----------- | --------------- |
| fx-rotation | Rotates in 3D   |
| fx-scale    | Scales          |
| fx-opacity  | Lowers Opacity  |
| fx-blur     | Blurs           |

_Best works with Grid Content Card._

#### 👀 Glance:

Glance is initiated using the `:active` element. Writing the `fx-active-glance` as a class enables the child object to become a pop up when pressed. (This component is good for when you want to condense a large amount of information in one child component)
_Best works with Grid Content Card._

#### 🔃 Load:

The `fx-load-effectname` class will be enabled when the webpage has loaded. This component is good for when you want to create page transitions, or when creating simple drawers with animations.

| Class Name   | Effect on load                        |
| ------------ | ------------------------------------- |
| fx-load-wave | Shows content with a radiating circle |
| fx-load-open | Shows content from top to bottom      |

_Best works with `<details>` and `<summary>` HTML tags._
