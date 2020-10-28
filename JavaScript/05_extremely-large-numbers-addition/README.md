# Adding Extremely Large Numbers

## Problem:
In JavaScript, you can only store up to 53 bits as a number. Which means maximum number you can store in a safe integer format is 9007199254740991. (see Number.MAX_SAFE_INTEGER).

This is a problem if we want to do operations with extremely large numbers. 

## Solution:
First, since JavaScript cannot even store large numbers in number format, we store them as strings to avoid any issues. We return the sum of two numbers also as a string.
