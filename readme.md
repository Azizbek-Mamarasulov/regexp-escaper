To install the package, run the following command
<br>

> npm install --save regexp-escaper

This package helps to escape regular expressions' special characters in the text.
```
    [ ] . * + ? ^ $ { } ( ) | \
```

## Usage
```
import { regexpEscaper } from 'regexp-escaper'; // ES6 Module
const { regexpEscaper } = require('regexp-escaper'); // CommonJS

const text = "S.o\m[e(t]h)ing"
console.log(regexpEscaper(text)); // S\.om\[e\(t\]h\)ing
```
