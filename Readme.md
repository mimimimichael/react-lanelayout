react-lanelayout is not quite ready for primetime yet. Thank you. Come again.

---

![alt text](https://i.imgur.com/JMnadmn.png "React Lane Layout")
# react-lanelayout

A component to display items with specific aspect ratios in horizontal or vertical lanes.

## How it works
`<LaneLayout/>` fits itself into the closest parent-element which is `relative` or `absolutely` positioned.
Based on your `lane`- & `gutter`- configuration and the available space, it adjusts the amounts of lanes accordingly. It iterates over your items and distributes them evenly throughout the lanes. Mousewheel events are captured and transformed so that even in horizontal-mode users can scroll with a standard mousewheel.

### Features
- **solid**: responsive, works on mobile/desktop, touch/non-touch
- **fast**: renders only currently visible items into the DOM
- **hassle-free**: handles `z-index` of _hovered_ items
- **smart**: captures wheel-events to unify scrolling in horizontal-/vertical-model
- **fancy**: allows to autoscroll with different speeds

## Demo
[Clickedy Click](https://mimimimichael.github.io/react-lanelayout)

## Installation

```
npm install react-lanelayout --save
```

## Simple Example
```js
import React from 'react'
import ReactDOM from 'react-dom'
import LaneLayout from 'react-lanelayout'

import MyItemRenderer from './MyItemRenderer'
import {items, moreItemsFunc} from './my-fancy-api'

const App = ({items, moreItemsFunc}) => <div>
    <LaneLayout items={items} itemRenderer={MyItemRenderer} onEnd={() => moreItemsFunc()}/>
</div>;

const target = document.getElementById("root");
ReactDOM.render(<App items={items} moreItemsFunc={moreItemsFunc} />, target);
```

### Item Shape
To correctly display your items, `<LaneLayout/>` needs to know the _aspect ratio_ of them. This is the format of an item that `<LaneLayout/>` expects:
```js
 const item = {
    key: 1,         // a unique identifier
    ratio: 4 / 3,   // the width / height ratio of your item
    itemProps: {    // your actual item, forwarded to your `ItemRenderer`
        foo: 'bar'
    }
  };
```
#### Example:
You want to display photos. The shape of a photo-item looks like this:

```js
const photo = {
    id: 12345,
    url: 'https://example.com/photo1.jpg',
    width: 800,
    height: 600
}
```

This translates to the following item-shape:
```js
const item = {
    key: photo.id,
    ratio: photo.width / photo.height,
    itemProps: photo
}
````

Transform a whole collection:
```js
const items = photos.map(photo=>{
    return {
        key: photo.id,
        ratio: photo.width / photo.height,
        itemProps: photo
    }
});
