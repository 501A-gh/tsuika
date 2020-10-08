![Trim-Logo](Trim-Banner.png)

# Trim v1.1

A design library thats lets you add advanced looking components.
Trim is written purely using vanilla CSS and aims to provide people with advanced looking components with a simple touch.
A live example is accessible through [this](https://codepen.io/501A/project/editor/XbnYoK) CodePen link.

## Contents

1. [Getting Started](#gs)
2. [About Class Naming](#acn)

<a name="gs"></a>

## 👉 Getting Started

Anybody can get started with Trim by inserting the following above the `</head>` tag.
`<link href="https://cdn.jsdelivr.net/gh/501A-Designs/Trim/Trim.css" rel="stylesheet" />`

<a name="acn"></a>

## About Class Naming

### 🎨 Colors:

The background color of any component can be easily changed using the `bg-colorname` class.
Using the `bg---colorname` class will make the selected background color lighter.
Using the `bg-d-colorname` class will make the selected background color darker.
All existing colors as of the latest version are as show from the following:

| Light Colors | Standard Colors | dark Colors |
| ------------ | --------------- | ----------- |
|              | bg-salmon       |             |
| bg---red     | bg-red          | bg-d-red    |
| bg---blue    | bg-blue         | bg-d-blue   |
| bg---green   | bg-green        | bg-d-green  |
| bg---grey    | bg-grey         |             |

### 🔘 Buttons / Links:

Trim comes with two types of buttons. They can be added through the classes named `button-standard` or `button-rounded` which have rounded corners.

### 📊 Graphs:

Graphs can be inserted by adding the class `graph-bar` which creates a single horizontal bar-graph. The `graph-multi-bar` class enables you to nest multiple bar graphs with the addition of labels if necessary.

### 🎴 Content Cards:

Content cards are `section` tags with the class of `contentCard` that enable you to show your information in a pre-styled card format.

### 🔳 Simple Grid:

You can use CSS grid by simply adding `grid-1fr-1fr-1fr...` as a class to a component. However, this grid can only support up to 6 columns at max (`grid-1fr-1fr-1fr-1fr-1fr-1fr`). Note: If you add the `section` tag as a child component of the Simple Grid class, it will be formatted into a Content Card (Grid Content Card).

### ⚡ Effects:

Effects extend the child components `:hover` capabilities inside your grid. Add an effect to one of your child components by inserting the `effect-effectname` class. All effects as of the latest version are as show from the following:

| Class Name      | Effect on hover |
| --------------- | --------------- |
| effect-rotation | Rotates in 3D   |
| effect-scale    | Scales          |
| effect-opacity  | Lowers Opacity  |
| effect-blur     | Blurs           |

_Best works with Grid Content Card._

### 👀 Glance (Left & Right):

Glance is similar to Effects in the sense that it extends the capability of a grid child object. Writing the `effects-glance-right` or `effects-glance-right` as a class enables the child object to become a pop up when pressed. (This component is good for when you want to condense a large amount of information in one child component)
_Best works with Grid Content Card._
