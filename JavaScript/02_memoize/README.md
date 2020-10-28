# To implement your own version of memoize function

## Conent 

- [What is `memoize()` in underscore.js ?](#what-is-memoize()-in-underscore.js)

- [What is `memoization` ?](#what-is-memoization)

- [How to use `memoize()` function ?](#how-to-use-memoize()-function)

  
### What is `memoize()` in underscore.js?

##### _.memoize(function, [hashFunction])

It memoizes a given function by caching the computed result. It's useful for speeding up slow-running computations. 

If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on teh arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the return function

```javascript
var fibonacci = _.memoize(function(n) {
    return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
});
```

### What is `memoization`?

`Memoization` is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

### Why we need to use memoization technique ?

Take a Leetcode problem to demonstrate its usage: 

###### 509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

> F(0) = 0;
>
> F(1) = 1;
>
> F(N) = F(N - 1) + F(N  - 2), for N > 1.

Given N, calculate F(N). 

```javascript
//approach 1: without using memoization technique 
var fib = function(N) {
    if (N <= 1) {
        return N;
    }
    return fib(N - 1) + fib(N - 2);
}
```

###### Complexity Analysis:

- Time Complexity: 
- Space Complexity: 

```javascript
// approach 2: 
```





### Refereces:

- https://leetcode.com/problems/fibonacci-number/
- https://underscorejs.org/#memoize