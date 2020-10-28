# HTML/CSS coding questions

## Table of Contents

* [Box Model](#box-mode)





### Box Model

All HTML elements can be considered as boxes. The CSS box model is essentially a box that wraps about every HTML element. It consists: margin, border, padding, and the actual content. 

The `box-sizing` CSS property sets how the total width and height of an element is calculated 

```css
#content-box {
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid red;
}
```

```javascript
console.log(document.getElementById("#content-box").offsetWidth); // 140 = 100 + (10 + 10) * 2
```

```css
#border-box {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid red;
}
```

```javascript
console.log(document.getElementById("#border-box").offsetWidth); // 100 
```

