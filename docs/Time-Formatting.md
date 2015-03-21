> [Wiki](Home) ▸ [[API Reference]] ▸ [[Time]] ▸ **Time Formatting**

D3 includes a helper module for parsing and formatting dates modeled after the venerable [strptime](http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html) and [strftime](http://pubs.opengroup.org/onlinepubs/007908799/xsh/strftime.html) C-library standards. These functions are also notably available in Python's [time](http://docs.python.org/library/time.html) module.

<a name="format" href="Time-Formatting#format">#</a> d3.time.<b>format</b>(<i>specifier</i>)

Constructs a new local time formatter using the given *specifier*. (Equivalent to [locale.timeFormat](Localization#locale_timeFormat) for the default U.S. English locale.) The specifier string may contain the following directives.

* `%a` - abbreviated weekday name.
* `%A` - full weekday name.
* `%b` - abbreviated month name.
* `%B` - full month name.
* `%c` - date and time, as "%a %b %e %H:%M:%S %Y".
* `%d` - zero-padded day of the month as a decimal number [01,31].
* `%e` - space-padded day of the month as a decimal number [ 1,31]; equivalent to `%_d`.
* `%H` - hour (24-hour clock) as a decimal number [00,23].
* `%I` - hour (12-hour clock) as a decimal number [01,12].
* `%j` - day of the year as a decimal number [001,366].
* `%m` - month as a decimal number [01,12].
* `%M` - minute as a decimal number [00,59].
* `%L` - milliseconds as a decimal number [000, 999].
* `%p` - either AM or PM.
* `%S` - second as a decimal number [00,61].
* `%U` - week number of the year (Sunday as the first day of the week) as a decimal number [00,53].
* `%w` - weekday as a decimal number [0(Sunday),6].
* `%W` - week number of the year (Monday as the first day of the week) as a decimal number [00,53].
* `%x` - date, as "%m/%d/%Y".
* `%X` - time, as "%H:%M:%S".
* `%y` - year without century as a decimal number [00,99].
* `%Y` - year with century as a decimal number.
* `%Z` - time zone offset, such as "-0700".
* `%%` - a literal "%" character.

For %U, all days in a new year preceding the first Sunday are considered to be in week 0. For %W, all days in a new year preceding the first Monday are considered to be in week 0. In some implementations of strftime and strptime (as in Python), a directive may include an optional field width or precision; this feature is not yet implemented in D3, but may be added in the future.

For locale-specific date and time formatters, see [locale.timeFormat](Localization#locale_timeFormat).

The % sign indicating a directive may be immediately followed by a padding modifier:

* `0` - zero-padding
* `_` - space-padding
* `-` - disable padding

If no padding modifier is specified, the default is `0` for all directives, except for `%e` which defaults to `_`).

The returned *format* is both an object and a function. For example:

```javascript
var format = d3.time.format("%Y-%m-%d");
format.parse("2011-01-01"); // returns a Date
format(new Date(2011, 0, 1)); // returns a string
```

<a name="_format" href="Time-Formatting#_format">#</a> <b>format</b>(<i>date</i>)

Formats the specified *date*, returning the corresponding string. The *date* must be a JavaScript [Date](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date) object. 

```javascript
var monthNameFormat = d3.time.format("%B");
var dayNameFormat = d3.time.format("%A");
monthNameFormat(new Date(2014, 4, 1));  //returns string "May" (remember javascript months are zero-indexed, thus 4 = May)
dayNameFormat(new Date(2014, 4, 1));  //returns string "Thursday"
```

Note that when dates are used in conjunction with [quantitative scales](Quantitative-Scales), the dates are implicitly coerced to numbers representing the number of milliseconds since [UNIX epoch](http://en.wikipedia.org/wiki/Unix_time). To convert between numbers and dates, you can use the following code:

```javascript
time = +date; // convert a Date object to time in milliseconds
date = new Date(time); // convert a time in milliseconds to a Date object
```

If you prefer to be explicit, you can also use the date object's [getTime](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getTime) method, but the + operator is shorter and possibly faster.

<a name="parse" href="Time-Formatting#parse">#</a> format.<b>parse</b>(<i>string</i>)

Parses the specified *string*, returning the corresponding date object. If the parsing fails, returns null. Unlike "natural language" date parsers (including JavaScript's built-in [parse](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse)), this method is strict: if the specified string does not exactly match the associated format specifier, this method returns null. For example, if the associated format is the full ISO 8601 string "%Y-%m-%dT%H:%M:%SZ", then the string "2011-07-01T19:15:28Z" will be parsed correctly, but "2011-07-01T19:15:28", "2011-07-01 19:15:28" and "2011-07-01" will return null, despite being valid 8601 dates. (Note that the hard-coded "Z" here is different from `%Z`, the time zone offset.) If desired, you can use multiple formats to try multiple format specifiers sequentially.

The `%d` and `%e` format specifiers are considered equivalent for parsing.

<a name="format_multi" href="#format_multi">#</a> d3.time.format.<b>multi</b>(<i>formats</i>)

Returns a new multi-resolution time format given the specified array of predicated *formats*. Each format is a two-element array consisting of a format specifier string (such as that passed to the [d3.time.format](#format) constructor) and a predicate function. For any date that is passed to the returned time format, the first predicate function that returns true will determine how the specified date is formatted. For example, the default time format used by [d3.time.scale](Time-Scales) is implemented as:

```js
var format = d3.time.format.multi([
  [".%L", function(d) { return d.getMilliseconds(); }],
  [":%S", function(d) { return d.getSeconds(); }],
  ["%I:%M", function(d) { return d.getMinutes(); }],
  ["%I %p", function(d) { return d.getHours(); }],
  ["%a %d", function(d) { return d.getDay() && d.getDate() != 1; }],
  ["%b %d", function(d) { return d.getDate() != 1; }],
  ["%B", function(d) { return d.getMonth(); }],
  ["%Y", function() { return true; }]
]);
```

Thus, if the specified date is not a round second, the milliseconds format (`".%L"`) is used; otherwise, if the specified date is not a round minute, the seconds format (`":%S"`) is used, and so on. See [bl.ocks.org/4149176](http://bl.ocks.org/mbostock/4149176) for an example.

The **multi** method is available on any d3.time.format constructor. For example, [d3.time.format.utc](#format_utc).multi returns a multi-resolution UTC time format, and [locale.timeFormat](Localization#timeFormat).multi returns a multi-resolution time format for the specified locale.

<a name="format_utc" href="Time-Formatting#format_utc">#</a> d3.time.format.<b>utc</b>(<i>specifier</i>)

Constructs a new UTC time formatter using the given *specifier*. (Equivalent to [locale.timeFormat.utc](Localization#locale_timeFormat_utc) for the default U.S. English locale.) The specifier may contain the same directives as the local time [format](Time-Formatting#format). Internally, this time formatter is implemented using the UTC methods on the Date object, such as [getUTCDate](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCDate) and [setUTCDate](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCDate) in place of [getDate](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getDate) and [setDate](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setDate).

<a name="format_iso" href="Time-Formatting#format_iso">#</a> d3.time.format.<b>iso</b>

The full [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) UTC time format: "%Y-%m-%dT%H:%M:%S.%LZ". Where available, this method will use [Date.toISOString](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toISOString) to format and the [Date constructor](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date) to parse strings. If you depend on strict validation of the input format according to ISO 8601, you should construct a time format explicitly instead:

```js
var iso = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
```
