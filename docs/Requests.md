> [Wiki](Home) ▸ [[API Reference]] ▸ [[Core]] ▸ **Requests**

You can’t visualize data if you can’t access it! Fortunately, there are many ways to get data into the browser. For small datasets, you might hardcode the data in your script, or embed data in the DOM using [[data attributes|http://ejohn.org/blog/html-5-data-attributes/]]. For larger datasets, you could load an external script that defines your data as a global variable. ([[JSONP|http://en.wikipedia.org/wiki/JSONP]] is a common example of this.) But, the most versatile way of loading data into the browser is using an [[XMLHttpRequest|http://en.wikipedia.org/wiki/XMLHttpRequest]], or **XHR**. This allows data to be loaded _asynchronously_ (so the rest of the page can display while data is loading), and is safer than JSONP. D3’s xhr module simplifies loading and parsing data.

When loading data asynchronously, code that depends on the loaded data should generally exist within the callback function. For example, see the [[calendar visualization|http://mbostock.github.com/d3/ex/calendar.html]] on the D3 website. Code that doesn't depend on data can run immediately when the page loads. Also, you may find it convenient to save loaded data to the global namespace, so that you can access it after the initial render, such as during a transition. You can do this using closures, or simply assign the loaded data to a global:

```javascript
var data; // a global

d3.json("path/to/file.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  visualizeit();
});
```

By default, most browsers do not allow cross-domain requests. To [enable cross-domain requests](http://enable-cors.org/), have the server set the header Access-Control-Allow-Origin: *. For more details, see the W3C recommendation on [[Cross-Origin Resource Sharing|http://www.w3.org/TR/cors/]]. For IE9, d3.xhr uses the nonstandard XDomainRequest for cross-domain requests.

## XHR

<a name="d3_xhr" href="#d3_xhr">#</a> d3.<b>xhr</b>(<i>url</i>[, <i>mimeType</i>][, <i>callback</i>])

Creates an asynchronous request for specified *url*. An optional *mime type* may be specified as the second argument, such as "text/plain". If a *callback* is specified, the request is immediately issued with the GET method and the callback is invoked asynchronously when the resource is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the XMLHttpRequest object representing the response. The response is undefined if an error occurs. If the response has an unsuccessful status code, the error is the XMLHttpRequest object. If no callback is specified, the returned request can be issued using [xhr.get](#get), [xhr.post](#post) or similar, and handled using [xhr.on](#on).

<a name="header" href="#header">#</a> xhr.<b>header</b>(<i>name</i>[, <i>value</i>])

If *value* is specified, sets the request header with the specified *name* to the specified value. If *value* is null, removes the request header with the specified *name*. If *value* is not specified, returns the current value of the request header with the specified *name*. Header names are case-insensitive.

Request headers can only be modified before the request is [sent](#sent). Therefore, you cannot pass a callback to the [d3.xhr constructor](#d3_xhr) if you wish to specify a header. Instead, use [xhr.get](#get) or similar. For example:

```js
d3.csv("/path/to/file.csv")
    .header("header-name", "header-value")
    .get(function(error, data) {
      // callback
    });
```

<a name="mimeType" href="#mimeType">#</a> xhr.<b>mimeType</b>([<i>type</i>])

If *type* is specified, sets the request mime type to the specified value. If *type* is null, clears the current mime type, if any. If *type* is not specified, returns the current mime type, which defaults to null. The mime type is used to both set the ["Accept" request header](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html) and for [overrideMimeType](http://www.w3.org/TR/XMLHttpRequest/#the-overridemimetype%28%29-method), where supported. Request headers can only be modified before the request is [sent](#sent).

<a name="responseType" href="#responseType">#</a> xhr.<b>responseType</b>(<i>type</i>)

If *type* is specified, sets the [response type](http://www.w3.org/TR/XMLHttpRequest/#the-responsetype-attribute), e.g. "", "arraybuffer", "blob", "document", or "text". If *type* is not specified, returns the current response type, which defaults to "".

<a name="response" href="#response">#</a> xhr.<b>response</b>(<i>value</i>)

If *value* is specified, sets the response value function to the specified function. If *value* is not specified, returns the current response value function, which defaults to the identity function. The response value function is used to map the response XMLHttpRequest object to its associated data value. For example, for text requests, you might use `function(request) { return request.responseText; }`, whereas for JSON requests, you might use `function(request) { return JSON.parse(request.responseText); }`.

<a name="get" href="#get">#</a> xhr.<b>get</b>([<i>callback</i>])

Issues this request using the GET method. If a *callback* is specified, it will be invoked asynchronously when the request is done or errors; the callback is invoked with two arguments: the error, if any, and the response value. The response value is undefined if an error occurs. If no *callback* is specified, then "load" and "error" listeners should be registered via [xhr.on](#on). This method is a convenience wrapper of [xhr.send](#send).

<a name="post" href="#post">#</a> xhr.<b>post</b>([<i>data</i>][, <i>callback</i>])

Issues this request using the POST method, optionally posting the specified *data* in the request body. If a *callback* is specified, it will be invoked asynchronously when the request is done or errors; the callback is invoked with two arguments: the error, if any, and the response value. The response value is undefined if an error occurs. If no *callback* is specified, then "load" and "error" listeners should be registered via [xhr.on](#on). This method is a convenience wrapper of [xhr.send](#send).

An example using URL encoding:

```js
d3.csv("/path/to/file.csv")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post("a=2&b=3", function(error, data) {
      // callback
    });
```

An example using JSON encoding:

```js
d3.csv("/path/to/file.csv")
    .header("Content-Type", "application/json")
    .post(JSON.stringify({a: 2, b: 3}), function(error, data) {
      // callback
    });
```

<a name="send" href="#send">#</a> xhr.<b>send</b>(<i>method</i>[, <i>data</i>][, <i>callback</i>])

Issues this request using the specified *method*, optionally posting the specified *data* in the request body. If a *callback* is specified, it will be invoked asynchronously when the request is done or errors; the callback is invoked with two arguments: the error, if any, and the response value. The response value is undefined if an error occurs. If no *callback* is specified, then "load" and "error" listeners should be registered via [xhr.on](#on).

<a name="abort" href="#abort">#</a> xhr.<b>abort</b>()

Aborts this request, if it is currently in-flight. See [XMLHttpRequest’s abort](http://www.w3.org/TR/XMLHttpRequest/#the-abort%28%29-method).

<a name="on" href="#on">#</a> xhr.<b>on</b>(<i>type</i>[, <i>listener</i>])

Adds or removes an event *listener* to this request for the specified *type*. The type must be one of the following:

* _beforesend_ - before the request is sent, to allow custom headers and the like to be set.
* _progress_ - to monitor the [progress of the request](http://www.w3.org/TR/progress-events/).
* _load_ - when the request completes successfully.
* _error_ - when the request completes unsuccessfully; this includes 4xx and 5xx response codes.

If an event listener was already registered for the same type, the existing listener is removed before the new listener is added. To register multiple listeners for the same event type, the type may be followed by an optional namespace, such as "load.foo" and "load.bar". To remove a listener, pass null as the listener.

If *listener* is not specified, returns the currently-assigned listener for the specified type, if any.

## Convenience Methods

Often, d3.xhr is not used directly. Instead, one of the type-specific methods is used instead, such as [d3.text](#d3_text) for plain text, [d3.json](#d3_json) for JSON, [d3.xml](#d3_xml) for XML, [d3.html](#d3_html) for HTML, [d3.csv](#d3_csv) for comma-separated values, and [d3.tsv](#d3_tsv) for tabulation-separated values.

<a name="d3_text" href="Requests#d3_text">#</a> d3.<b>text</b>(<i>url</i>[, <i>mimeType</i>][, <i>callback</i>])

Creates a request for the text file at the specified *url*. An optional *mime type* may be specified as the second argument, such as "text/plain". If a *callback* is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the response text. The response text is undefined if an error occurs. If no callback is specified, the returned request can be issued using xhr.get or similar, and handled using xhr.on.

<a name="d3_json" href="Requests#d3_json">#</a> d3.<b>json</b>(<i>url</i>[, <i>callback</i>])

Creates a request for the [JSON](http://json.org) file at the specified *url* with the mime type "application/json". If a *callback* is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the parsed JSON. The parsed JSON is undefined if an error occurs. If no callback is specified, the returned request can be issued using xhr.get or similar, and handled using xhr.on.

<a name="d3_xml" href="Requests#d3_xml">#</a> d3.<b>xml</b>(<i>url</i>[, <i>mimeType</i>][, <i>callback</i>])

Creates a request for the XML file at the specified *url*. An optional *mime type* may be specified as the second argument, such as "application/xml". If a *callback* is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the parsed XML as a [document](http://www.w3.org/TR/XMLHttpRequest/#the-responsexml-attribute). The parsed XML is undefined if an error occurs. If no callback is specified, the returned request can be issued using xhr.get or similar, and handled using xhr.on.

<a name="d3_html" href="Requests#d3_html">#</a> d3.<b>html</b>(<i>url</i>[, <i>callback</i>])

Creates a request for the HTML file at the specified *url* with the mime type "text/html". If a *callback* is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the parsed HTML as a [document fragment](https://developer.mozilla.org/en-US/docs/DOM/range.createContextualFragment). The parsed HTML is undefined if an error occurs. If no callback is specified, the returned request can be issued using xhr.get or similar, and handled using xhr.on.

<a name="d3_csv" href="CSV">#</a> d3.<b>csv</b>(<i>url</i>[, <i>accessor</i>][, <i>callback</i>])

Creates a request for the [[CSV]] file at the specified *url* with the mime type "text/csv". If a *callback* is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the array of [parsed rows](CSV#parse) per [RFC 4180](http://tools.ietf.org/html/rfc4180). The rows array is undefined if an error occurs. If no callback is specified, the returned request can be issued using xhr.get or similar, and handled using xhr.on.

<a name="d3_tsv" href="CSV#tsv">#</a> d3.<b>tsv</b>(<i>url</i>[, <i>accessor</i>][, <i>callback</i>])

Creates a request for the [TSV](CSV#d3_tsv) file at the specified *url* with the mime type "text/tab-separated-values". If a *callback* is specified, the request is immediately issued with the GET method, and the callback will be invoked asynchronously when the file is loaded or the request fails; the callback is invoked with two arguments: the error, if any, and the array of [parsed rows](CSV#tsv_parse) per [RFC 4180](http://tools.ietf.org/html/rfc4180). The rows array is undefined if an error occurs. If no callback is specified, the returned request can be issued using xhr.get or similar, and handled using xhr.on.
