# How to empty an array in JavaScript?

## Method 1:

`arr = 0`

# Method 2:

`arr.length = 0`

## Method 3:

`arr.splice(0 , arr.length)`

## Method 4:

```while(arr.length) {
    arr.pop();
}
```
