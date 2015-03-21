> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Formatting**

Formatting numbers is one of those things you don't normally think about until an ugly "0.30000000000000004" appears on your axis labels. Also, maybe you want to group thousands to improve readability, and use fixed precision, such as "$1,240.10". Or, maybe you want to display only the significant digits of a particular number. D3 makes this easy using a standard **number format**. For example, to create a function that zero-fills to four digits, say:

```javascript
var zero = d3.format("04d");
```

Now you can conveniently format numbers:

```javascript
zero(2); // "0002"
zero(123); // "0123"
```

In addition to numbers, D3 also supports formatting and parsing [[dates|Time-Formatting]], and [[comma-separated values|CSV]].

## Numbers

<a name="d3_format" href="#d3_format">#</a> d3.<b>format</b>(<i>specifier</i>)

Returns a new format function with the given string *specifier*. (Equivalent to [locale.numberFormat](Localization#locale_numberFormat) for the default U.S. English locale.) A format function takes a number as the only argument, and returns a string representing the formatted number. The format specifier is modeled after Python 3.1's built-in [[format specification mini-language|http://docs.python.org/release/3.1.3/library/string.html#formatspec]]. The general form of a specifier is:
```
 [​[fill]align][sign][symbol][0][width][,][.precision][type]
```
The *fill* can be any character other than "{" or "}". The presence of a fill character is signaled by the character following it, which must be one of the *align* options.

The *align* can be:

* ("<") Forces the field to be left-aligned within the available space. 
* (">") Forces the field to be right-aligned within the available space. (This is the default).
* ("^") Forces the field to be centered within the available space.

The *sign* can be:

* plus ("+") - a sign should be used for both positive and negative numbers.
* minus ("-") - a sign should be used only for negative numbers. (This is the default.)
* space (" ") - a leading space should be used on positive numbers, and a minus sign on negative numbers.

The *symbol* can be:

* currency ("$") - a currency symbol should be prefixed (or suffixed) per the locale.
* base ("#") - for binary, octal, or hexadecimal output, prefix by "0b", "0o", or "0x", respectively.

The "0" option enables zero-padding.

The *width* defines the minimum field width. If not specified, then the width will be determined by the content.

The *comma* (",") option enables the use of a comma for a thousands separator.

The *precision* indicates how many digits should be displayed after the decimal point for a value formatted with types "f" and "%", or before and after the decimal point for a value formatted with types "g", "r" and "p".

The available *type* values are:

* exponent ("e") - use [[Number.toExponential|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toExponential]].
* general ("g") - use [[Number.toPrecision|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toPrecision]].
* fixed ("f") - use [[Number.toFixed|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toFixed]].
* integer ("d") - use [[Number.toString|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toString]], but ignore any non-integer values.
* rounded ("r") - round to *precision* significant digits, padding with zeroes where necessary in similar fashion to fixed ("f"). If no *precision* is specified, falls back to general notation.
* percentage ("%") - like fixed, but multiply by 100 and suffix with "%".
* rounded percentage ("p") - like rounded, but multiply by 100 and suffix with "%".
* binary ("b") - outputs the number in base 2.
* octal ("o") - outputs the number in base 8.
* hexadecimal ("x") - outputs the number in base 16, using lower-case letters for the digits above 9.
* hexadecimal ("X") - outputs the number in base 16, using upper-case letters for the digits above 9.
* character ("c") - converts the integer to the corresponding unicode character before printing.
* SI-prefix ("s") - like rounded, but with a unit suffixed such as "9.5M" for mega, or "1.00µ" for micro.

The type "n" is also supported as shorthand for ",g". 

<a name="d3_formatPrefix" href="#d3_formatPrefix">#</a> d3.<b>formatPrefix</b>(<i>value</i>[, <i>precision</i>])

Returns the [SI prefix](http://en.wikipedia.org/wiki/Metric_prefix) for the specified *value*. If an optional *precision* is specified, the *value* is rounded accordingly using [d3.round](#d3_round) before computing the prefix. The returned prefix object has two properties:

* symbol - the prefix symbol, such as "M" for millions.
* scale - the scale function, for converting numbers to the appropriate prefixed scale.

For example:

```js
var prefix = d3.formatPrefix(1.21e9);
console.log(prefix.symbol); // "G"
console.log(prefix.scale(1.21e9)); // 1.21
```

This method is used by d3.format for the `s` format.

<a name="d3_round" href="Formatting#d3_round">#</a> d3.<b>round</b>(<i>x</i>[, <i>n</i>])

Returns the value *x* rounded to *n* digits after the decimal point. If *n* is omitted, it defaults to zero. The result is a number. Values are rounded to the closest multiple of 10 to the power minus *n*; if two multiples are equally close, the value is rounded up in accordance with the built-in [[round|https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math/round]] function. For example:

```js
d3.round(1.23); // 1
d3.round(1.23, 1); // 1.2
d3.round(1.25, 1); // 1.3
d3.round(12.5, 0); // 13
d3.round(12, -1); // 10
```

Note that the resulting number when converted to a string may be imprecise due to IEEE floating point precision; to format a number to a string with a fixed number of decimal points, use [d3.format](Formatting#d3_format) instead.

## Strings

<a name="d3_requote" href="Formatting#d3_requote">#</a> d3.<b>requote</b>(<i>string</i>)

Returns a quoted (escaped) version of the specified *string* such that the string may be embedded in a regular expression as a string literal.

```js
d3.requote("[]"); // "\[\]"
```

## Dates

See the [[d3.time|Time-Formatting]] module.
