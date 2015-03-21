**D3.js** is a JavaScript library for manipulating documents based on data. **D3** helps you bring data to life using HTML, SVG and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

## Resources

* [Introduction](http://d3js.org/)
* [Examples Gallery](/mbostock/d3/wiki/Gallery)
* [Tutorials and Talks](/mbostock/d3/wiki/Tutorials)
* [API Reference](/mbostock/d3/wiki/API-Reference)
* [Release Notes](/mbostock/d3/releases)
* [Plugins](/d3/d3-plugins)
* [d3.js on Stack Overflow](http://stackoverflow.com/questions/tagged/d3.js)
* [d3-js Google Group](http://groups.google.com/group/d3-js)

### Translations (Unofficial)

* [한국어](/zziuni/d3/wiki)
* [日本語](/mbostock/d3/wiki/JP-Home)
* [简体中文](/mbostock/d3/wiki/CN-Home)
* [繁體中文](/mbostock/d3/wiki/TW-Home)
* [Русский](/mbostock/d3/wiki/API-Reference-\(русскоязычная-версия\))
* [Türkçe](/ahmetkurnaz/d3/wiki)
* [Indonesian](/widiantonugroho/d3/wiki)

## Browser / Platform Support

D3 supports so-called “modern” browsers, which generally means everything _except_ IE8 and below. D3 is tested against Firefox, Chrome, Safari, Opera, IE9+, Android and iOS. Parts of D3 may work in older browsers, as the core D3 library has minimal requirements: JavaScript and the [W3C DOM](http://www.w3.org/DOM/) API. D3 uses the [Selectors API](http://www.w3.org/TR/selectors-api/) Level 1, but you can preload [Sizzle](http://sizzlejs.com/) for compatibility. You'll need a modern browser to use [SVG](http://www.w3.org/TR/SVG/) and [CSS3 Transitions](http://www.w3.org/TR/css3-transitions/). D3 is not a compatibility layer, so if your browser doesn't support standards, you're out of luck. Sorry!

D3 also runs on [Node.js](http://nodejs.org/). Use `npm install d3` to install, and `require("d3")` to load. On Node, limited DOM support is provided by [JSDOM](https://github.com/tmpvar/jsdom). D3 can also run within a [WebWorker](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html) by creating a [custom build](/mbostock/smash/wiki) containing only the desired (non-DOM) features.

## Installing

Download the latest version here:

* <https://github.com/mbostock/d3/releases>

Or, to link directly to the latest release, copy this snippet:

```html
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
```

**Note:** the non-minified source code contains non-ASCII characters and must be served with UTF-8 encoding, either via the `charset="utf-8"` attribute on the script tag or by adding `<meta charset="utf-8">` to the top of the page. If you see a SyntaxError: Unexpected token ILLEGAL at `var Ï€ = Math.PI`, it is because you are serving the non-minified source with the incorrect ISO-8859-1 encoding. See this [StackOverflow answer](http://stackoverflow.com/a/14301241) for more information.

If you want the full repository including tests, download or clone the D3 git repository:

* <https://github.com/mbostock/d3/zipball/master>

D3 is also available via numerous package managers, including: [NPM](https://npmjs.org/package/d3) (Node.js), [Bower](http://bower.io/search/?q=d3), [Browserify](http://browserify.org/), [Component](http://component.io/), [Jam](http://jamjs.org/packages/#/details/d3), [Composer / Packagist](https://packagist.org/packages/mbostock/d3) (PHP), [SPM](https://spmjs.org/gallery/d3/), [JSPM](http://jspm.io/), [NuGet](https://www.nuget.org/packages/d3/) (.Net), and [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) (e.g., [RequireJS](http://requirejs.org/)). The official releases of D3 are on [NPM](https://npmjs.org/package/d3) and [GitHub](/mbostock/d3) only; support for other package managers is unofficial and maintained by contributors.

## Using

When developing locally, note that your browser may enforce strict permissions for reading files out of the local file system. **If you use [d3.xhr](wiki/Requests) locally (including d3.json et al.), you must have a local web server.** For example, you can run Python's built-in server:

    python -m SimpleHTTPServer 8888 &

or for Python 3+

    python -m http.server 8888 &

If you have have PHP installed you could try

    php -S localhost:8888

or if you are running Ruby you can use

    ruby -run -e httpd . -p 8888

Once this is running, go to <http://localhost:8888/>.

Or if you are running nodejs you can do

    npm install http-server -g
    http-server

Another option is to start a local jetty instance, by using the jetty-runner library with the JVM already installed on your system. In order to achieve this you'll need to download [jetty-runner](http://central.maven.org/maven2/org/eclipse/jetty/jetty-runner/9.3.0.M0/jetty-runner-9.3.0.M0.jar), then you can simply do:

    java -jar jetty-runner-9.3.0.M0.jar  --port 8080  .

and this will start the server on http://localhost:8080 as usual from the current directory, or a different directory, simply changing '.' to the path to that directory.

D3 supports the asynchronous module definition (AMD) API. For example, if you use [RequireJS](http://requirejs.org/), you may load as follows:

```js
require.config({paths: {d3: "http://d3js.org/d3.v3.min"}});

require(["d3"], function(d3) {
  console.log(d3.version);
});
```

## Modifying

If you want to modify how D3 is implemented, click the "Fork" button in the top-right corner of this page, and then clone your fork from the command line by replacing *username* with your GitHub username:

```bash
git clone git://github.com/username/d3.git
```

The D3 repository should work out of the box if you just want to create new visualizations using D3. On the other hand, if you want to extend D3 with new features, fix bugs, or run tests, you should [fork the D3 repository](/mbostock/d3), and install [Node.js](http://nodejs.org/) (version 0.10.x or higher). From the root directory of this repository, you can then install D3's dependencies:

    npm install

To run the tests, use:

    make test