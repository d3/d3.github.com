> [Wiki](Home) ▸ **日本語**

**D3.js** は document ベースでデータを操作するための JavaScript ライブラリです。 **D3** を使うことで、 HTML, SVG, CSS を利用し、データを表現する事ができます。D3 はプロプライエタリなフレームワークを使わなくとも、モダンブラウザの機能でパワフルな視覚化コンポーネントとデータ駆動アプローチでの DOM 操作を実現するためにWeb標準を重視しています。

## Resources

* [はじめに](http://mbostock.github.com/d3/)
* [[事例ギャラリー|Gallery]]
* [[チュートリアル と 資料|JP-Tutorials]]
* [[API Reference]]
* [Release Notes](/mbostock/d3/releases)
* [Plugins](/d3/d3-plugins)
* [d3.js on Stack Overflow](http://stackoverflow.com/questions/tagged/d3.js)
* [d3-js Google Group](http://groups.google.com/group/d3-js)
* [英語](/mbostock/d3/wiki/Home)
* [한국어](https://github.com/zziuni/d3/wiki)
* [中文](/mbostock/d3/wiki/CN-Home)

## ブラウザサポート

D3 は、いわゆる "モダン" ブラウザ (一般的に、IE8およびそれ以前を除くすべて) をサポートします。 D3 は、 Firefox, Chrome (Chromium), Safari (Webkit), Opera および IE9 に対してテストされています。 D3 の一部は D3 のコアライブラリの最小動作要件が JavaScript と [W3C DOM](http://www.w3.org/DOM/) APIであるために古いブラウザでも機能します。 IE8 に対しては、 [Aight](https://github.com/shawnbot/aight) という互換ライブラリが推奨されます。 D3 は Level 1 の [Selectors API](http://www.w3.org/TR/selectors-api/) Level 1 を利用していますが、[Sizzle](http://sizzlejs.com/) をプリロードしておくことで互換性を得ることができます。 [SVG](http://www.w3.org/TR/SVG/) と [CSS3 Transitions](http://www.w3.org/TR/css3-transitions/) を利用するためにモダンブラウザが必要となるでしょう。D3 は互換レイヤではないので、利用するブラウザが標準をサポートしないのであれば、残念だけど、ごめんね！

## インストール

最新の D3 のはこちらです。

* <https://github.com/mbostock/d3/releases>

最新リリースの直リンクであれば、以下のスニペットをコピーしてください。

```html
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
```

もし、テストを含むリポジトリ全てが必要であれば

* <https://github.com/mbostock/d3/zipball/master>

ローカル環境で開発するときに、ブラウザでローカルファイルシステム以外へのファイル読み込みに厳しい制限があるかもしれません。 **もし (d3.json などを含む) [d3.xhr](wiki/Requests) をローカルで利用するのであれば、ローカルWebサーバを起動しなければなりません。** 例えば、Pythonでサーバを起動することができます：

    python -m SimpleHTTPServer 8888 &

Python3以降なら

    python -m http.server 8888 &

これを動かしたら、 <http://localhost:8888/examples/> を開いてください。

D3 はthe asynchronous module definition (AMD) API をサポートしています。[RequireJS](http://requirejs.org/)を使用しているなら、次のようにロードすることができます。

```js
require.config({paths: {d3: "http://d3js.org/d3.v3.min"}});

require(["d3"], function(d3) {
  console.log(d3.version);
});
```

## Modifying

D3 の実装を変更したい場合は、このページの右上にある "Fork" ボタンを押して、次のコマンドラインから *username* の部分をあなたのGitHub のユーザネームに変更してクローンしてください。

```bash
git clone git://github.com/username/d3.git
```

D3 を利用した新しい視覚化を作りたいなら、 D3 リポジトリがそのまま使えるはずです。そうではなく、新機能を追加したりバグ修正したりテストを動かしたいなら[D3 のレポジトリをフォーク](/mbostock/d3) して、[Node.js](http://nodejs.org/) (version 0.10.x 以降) をインストールしてください。このリポジトリのルートから、 D3 の依存関係をインストールすることができます。

    npm install

テストを実行するのは次のコマンドです:

    make test
