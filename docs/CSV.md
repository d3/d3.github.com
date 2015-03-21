> [Wiki](Home) ▸ [[API Reference]] ▸ **CSV**

D3 provides built-in support for parsing [comma-separated values](http://en.wikipedia.org/wiki/Comma-separated_values), tab-separated values and arbitrary delimiter-separated values. These tabular formats are popular with spreadsheet programs such as Microsoft Excel. Tabular formats are often more space-efficient than JSON, which can improve loading times for large datasets.

<a name="csv" href="#csv">#</a> d3.<b>csv</b>(<i>url</i>[[, <i>accessor</i>], <i>callback</i>])

Issues an HTTP GET request for the comma-separated values (CSV) file at the specified *url*. The file contents are assumed to be [RFC4180-compliant](http://tools.ietf.org/html/rfc4180). The mime type of the request will be "text/csv". The request is processed asynchronously, such that this method returns immediately after opening the request. When the CSV data is available, the specified *callback* will be invoked with the [parsed rows](CSV#parse) as the argument. If an error occurs, the callback function will instead be invoked with null. An optional <i>accessor</i> function may be specified, which is then passed to [d3.csv.parse](#parse); the <i>accessor</i> may also be specified by using the return request object’s row function. For example:

```js
d3.csv("path/to/file.csv")
    .row(function(d) { return {key: d.key, value: +d.value}; })
    .get(function(error, rows) { console.log(rows); });
```

See the [unemployment choropleth](http://bl.ocks.org/mbostock/4060606) for an example.

<a name="parse" href="#parse">#</a> d3.csv.<b>parse</b>(<i>string</i>[, <i>accessor</i>])

Parses the specified *string*, which is the contents of a CSV file, returning an array of objects representing the parsed rows. The string is assumed to be [RFC4180-compliant](http://tools.ietf.org/html/rfc4180). Unlike the [parseRows](CSV#parseRows) method, this method requires that the first line of the CSV file contains a comma-separated list of column names; these column names become the attributes on the returned objects. For example, consider the following CSV file:

```
Year,Make,Model,Length
1997,Ford,E350,2.34
2000,Mercury,Cougar,2.38
```

The resulting JavaScript array is:

```javascript
[
  {"Year": "1997", "Make": "Ford", "Model": "E350", "Length": "2.34"},
  {"Year": "2000", "Make": "Mercury", "Model": "Cougar", "Length": "2.38"}
]
```

Note that the values themselves are always strings; they will not be automatically converted to numbers. JavaScript may coerce strings to numbers for you automatically (for example, using the + operator). By specifying an <i>accessor</i> function, you can convert the strings to numbers or other specific types, such as dates:

```javascript
d3.csv("example.csv", function(d) {
  return {
    year: new Date(+d.Year, 0, 1), // convert "Year" column to Date
    make: d.Make,
    model: d.Model,
    length: +d.Length // convert "Length" column to number
  };
}, function(error, rows) {
  console.log(rows);
});
```

Using + rather than [parseInt](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseInt) or [parseFloat](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/parseFloat) is typically faster, though more restrictive. For example, "30px" when coerced using + returns NaN, while parseInt and parseFloat return 30.

<a name="parseRows" href="CSV#parseRows">#</a> d3.csv.<b>parseRows</b>(<i>string</i>[, <i>accessor</i>])

Parses the specified *string*, which is the contents of a CSV file, returning an array of arrays representing the parsed rows. The string is assumed to be [RFC4180-compliant](http://tools.ietf.org/html/rfc4180). Unlike the [parse](CSV#parse) method, this method treats the header line as a standard row, and should be used whenever the CSV file does not contain a header. Each row is represented as an array rather than an object. Rows may have variable length. For example, consider the following CSV file:

```
1997,Ford,E350,2.34
2000,Mercury,Cougar,2.38
```

The resulting JavaScript array is:

```javascript
[
  ["1997", "Ford", "E350", "2.34"],
  ["2000", "Mercury", "Cougar", "2.38"]
]
```

Note that the values themselves are always strings; they will not be automatically converted to numbers. See [parse](CSV#parse) for details.

An optional *accessor* function may be specified as the second argument. This function is invoked for each row in the CSV file, being passed the current row and index as two arguments. The return value of the function replaces the element in the returned array of rows; if the function returns null, the row is stripped from the returned array of rows. In effect, the accessor is similar to applying a [map](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map) and [filter](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter) operator to the returned rows. The accessor function is used by [parse](CSV#parse) to convert each row to an object with named attributes.

<a name="format" href="CSV#format">#</a> d3.csv.<b>format</b>(<i>rows</i>)

Converts the specified array of *rows* into comma-separated values format, returning a string. This operation is the reverse of [parse](CSV#parse). Each row will be separated by a newline (\n), and each column within each row will be separated by a comma (,). Values that contain either commas, double-quotes (") or newlines will be escaped using double-quotes.

Each row should be an object, and all object properties will be converted into fields.  For greater control over which properties are converted, convert the rows into arrays containing only the properties that should be converted and use [formatRows](CSV#formatRows).

<a name="formatRows" href="CSV#formatRows">#</a> d3.csv.<b>formatRows</b>(<i>rows</i>)

Converts the specified array of *rows* into comma-separated values format, returning a string. This operation is the reverse of [parseRows](CSV#parseRows). Each row will be separated by a newline (\n), and each column within each row will be separated by a comma (,). Values that contain either commas, double-quotes (") or newlines will be escaped using double-quotes.

## TSV

Tab-separated values are equivalent to comma-separated values, except the tab character is used as a delimiter rather than the comma.

<a name="tsv" href="#tsv">#</a> d3.<b>tsv</b>(<i>url</i>[, <i>accessor</i>][, <i>callback</i>])

Equivalent to [d3.csv](#csv), but for tab-separated values.

<a name="tsv_parse" href="#tsv_parse">#</a> d3.tsv.<b>parse</b>(<i>string</i>[, <i>accessor</i>])

Equivalent to [csv.parse](#parse), but for tab-separated values.

<a name="tsv_parseRows" href="#tsv_parseRows">#</a> d3.tsv.<b>parseRows</b>(<i>string</i>[, <i>accessor</i>])

Equivalent to [csv.parseRows](#parseRows), but for tab-separated values.

<a name="tsv_format" href="#tsv_format">#</a> d3.tsv.<b>format</b>(<i>rows</i>)

Equivalent to [csv.format](#format), but for tab-separated values.

<a name="tsv_formatRows" href="#tsv_formatRows">#</a> d3.tsv.<b>formatRows</b>(<i>rows</i>)

Equivalent to [csv.formatRows](#formatRows), but for tab-separated values.

## Arbitrary Delimiters

<a name="dsv" href="#dsv">#</a> d3.<b>dsv</b>(<i>delimiter</i>, <i>mimeType</i>)

Constructs a new parser for the given delimiter and mime type. For example, to parse values separated by "|", the vertical bar character, use:

```js
var dsv = d3.dsv("|", "text/plain");
```

<a name="_dsv" href="#_dsv">#</a> <b>dsv</b>(<i>url</i>[, <i>accessor</i>][, <i>callback</i>])

Equivalent to [d3.csv](#csv), but for delimiter-separated values.

<a name="dsv_parse" href="#dsv_parse">#</a> dsv.<b>parse</b>(<i>string</i>[, <i>accessor</i>])

Equivalent to [csv.parse](#parse), but for delimiter-separated values.

<a name="dsv_parseRows" href="#dsv_parseRows">#</a> dsv.<b>parseRows</b>(<i>string</i>[, <i>accessor</i>])

Equivalent to [csv.parseRows](#parseRows), but for delimiter-separated values.

<a name="dsv_format" href="#dsv_format">#</a> dsv.<b>format</b>(<i>rows</i>)

Equivalent to [csv.format](#format), but for delimiter-separated values.

<a name="dsv_formatRows" href="#dsv_formatRows">#</a> dsv.<b>formatRows</b>(<i>rows</i>)

Equivalent to [csv.formatRows](#formatRows), but for delimiter-separated values.

### Content Security Policy

If a [content security policy](http://www.w3.org/TR/CSP/) is in place, note that [csv.parse](#csv_parse), [tsv.parse](#tsv_parse) and [dsv.parse](#dsv_parse) require `unsafe-eval` in the `script-src` directive, due to their (safe) use of dynamic code generation for fast parsing.
This also applies to the default constructors [d3.csv](#csv), [d3.tsv](#tsv) and [dsv](#_dsv), which issue an HTTP GET request for the resource and then parse the response to objects using [csv.parse](#csv_parse), [tsv.parse](#tsv_parse) or [dsv.parse](#dsv_parse).

If `unsafe-eval` cannot be used, then [csv.parseRows](#csv_parseRows), [tsv.parseRows](#tsv_parseRows) or [dsv.parseRows](#dsv_parseRows) can be used as a workaround, in combination with [d3.text](Requests#d3_text) to retrieve the resource if necessary.
