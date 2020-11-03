# HTML/CSS coding questions

## Table of Contents

* [Block Element](#block-element)
* [Inline Element](#inline-element)
* [Inline-block Element](#inline-block-element)
* [Box Model](#box-mode)



## Block Element

### features:

- respects margins and padding
- can have a width and height set
- if width is not defined, occupies the full width of the container
- if height is not defined, vertical space equal to the height of its contents

## Inline Element

### features:

	- respects left & right margins and padding, but not top & bottom
	- cannot have a width and height set
	- allows other elements to sit to their left and right

## Inline-block Element

### features: 

- allows other elements to sit to their left and right
- respect top & bottom margins and padding
- respect height and width



## Box Model

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

