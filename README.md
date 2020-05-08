# random-array

Returns an array of given length with random integers generated between max and min.

## Usage

```js
const randomArray = require("random-array");

const length = 10;
const max = 100;
const min = 0;

const myRandomArray = randomArray.create(length, max, min);
```

If no parameters are given, a default array of length 100 filled with random integers between 0 and 10 will be created.
