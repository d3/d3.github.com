> [Wiki](Home) ▸ [Release Notes](/mbostock/d3/releases) ▸ **3.0**

このページでは D3.js 3.0 の新機能について解説します。2.x から 3.0 への移行方法については[3.0へのアップグレード](https://github.com/mbostock/d3/wiki/Upgrading-to-3.0) をご覧ください。

* [English](/mbostock/d3/releases/v3.0.0)

参考：[地図投影法の一覧 - Wikipedia](http://ja.wikipedia.org/wiki/%E5%9C%B0%E5%9B%B3%E6%8A%95%E5%BD%B1%E6%B3%95%E3%81%AE%E4%B8%80%E8%A6%A7)

## Geo

<table>
  <tr height="146" valign="top">
    <td>逆子午線切断<br><a target="_blank" href="http://bl.ocks.org/3788999"><img src="http://bl.ocks.org/mbostock/raw/3788999/thumbnail.png" width="202"></a></td>
    <td>三軸回転<br><a target="_blank" href="http://bl.ocks.org/4282586"><img src="http://bl.ocks.org/mbostock/raw/4282586/thumbnail.png" width="202"></a></td>
    <td>ヴィンケル図法の回転<br><a target="_blank" href="http://bl.ocks.org/3790085"><img src="http://bl.ocks.org/mbostock/raw/3790085/thumbnail.png" width="202"></a></td>
    <td>正距円筒図法の回転<br><a target="_blank" href="http://bl.ocks.org/3734273"><img src="http://bl.ocks.org/mbostock/raw/3734273/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="bottom">
    <td>クリッピング<br><a target="_blank" href="http://www.jasondavies.com/maps/clip/"><img src="http://d3js.org/ex/geo-clip.png" width="202"></a></td>
    <td>可変型リサンプリング<br><a target="_blank" href="http://bl.ocks.org/3795544"><img src="http://bl.ocks.org/mbostock/raw/3795544/thumbnail.png" width="202"></a></td>
    <td>カンバス・レンダリング<br><a target="_blank" href="http://bl.ocks.org/4183330"><img src="http://bl.ocks.org/mbostock/raw/4183330/thumbnail.png" width="202"></a></td>
    <td>衛星と経緯度線図<br><a target="_blank" href="http://bl.ocks.org/3790444"><img src="http://bl.ocks.org/mbostock/raw/3790444/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="bottom">
    <td>投影法変化（へんげ）<br><a target="_blank" href="http://bl.ocks.org/3711652"><img src="http://bl.ocks.org/mbostock/raw/3711652/thumbnail.png" width="202"></a></td>
    <td>統計地図<br><a target="_blank" href="http://bl.ocks.org/4060606"><img src="http://bl.ocks.org/mbostock/raw/4060606/thumbnail.png" width="202"></a></td>
    <td>ラスター再投影<br><a target="_blank" href="http://bl.ocks.org/4329423"><img src="http://bl.ocks.org/mbostock/raw/4329423/thumbnail.png" width="202"></a></td>
  </tr>
</table>

D3 に強力な新しい地理投影システムが追加されました！前のバージョンの D3 が投影を点関数として解釈するだけだったのに対し、D3 3.0 では投影を完全な幾何変換としてモデル化しています。これにより D3　は、直線を曲線に投影する際、線を細分化して不要な投影生成物を除去するために、設定可能な[可変型リサンプリング](http://bl.ocks.org/mbostock/3795544)を用いるようになりました。例として[ラリヴィ図法](http://bl.ocks.org/mbostock/3719042)や[ヴァン・デル・グリテン図法](http://bl.ocks.org/mbostock/3796831)でスムーズに描かれた南極大陸をご覧ください。線やポリゴンが逆子午線（訳注：中央にとった子午線の180度反対側の経度を通る子午線）を横切るとき、D3は事前にシェイプファイルを切断するのではなく[ジオメトリを切断](http://bl.ocks.org/mbostock/3788999)します。また、すべての投影法が[小円](http://bl.ocks.org/mbostock/3790444)と[クリッピング](http://www.jasondavies.com/maps/clip/)、それに[三軸回転](http://bl.ocks.org/mbostock/4282586)に対応するようになりました。

内部的には D3 はストリーミング幾何変換（ d3.geo.stream )を用い、作業用オブジェクトの生成を避けることでメモリ使用量を削減しています。この設計で[カンバス直接レンダリング](http://bl.ocks.org/mbostock/4183330)性能も劇的に向上しました。ストリームは、表示されている図形と、投影範囲や重心、境界線がずれてしまわないための計算にも使われ、さらに[縮尺に応じた図形の単純化](http://bost.ocks.org/mike/simplify/)のための幾何計算も可能にしています。

d3.geo パッケージには便利なコンポーネントが多数追加されました。例えば[graticule（経緯度線図）](http://bl.ocks.org/mbostock/3664049)は地球の全体図をレンダリングするための線と球体の格子図を表示します。d3.geo.circle クラスは小円と大円レンダリングにも対応し、[テイソーの指示楕円](http://bl.ocks.org/mbostock/4052873)の近似計算が可能になりました。

新しい d3.geo.interpolatae で大きな弧の球面座標補間も簡単にできるようになりました。さらに球面範囲、重心、境界を正確に計算するための新しい関数群も追加されています。

### プラグイン

<table>
  <tr height="146" valign="top">
    <td> ペイルス・クインカンシャル図法<br><a target="_blank" href="http://bl.ocks.org/4310087"><img src="http://bl.ocks.org/mbostock/raw/4310087/thumbnail.png" width="202"></a></td>
    <td>ワグナー第6図法<br><a target="_blank" href="http://bl.ocks.org/3710148"><img src="http://bl.ocks.org/mbostock/raw/3710148/thumbnail.png" width="202"></a></td>
    <td>正距円錐図法<br><a target="_blank" href="http://bl.ocks.org/3734317"><img src="http://bl.ocks.org/mbostock/raw/3734317/thumbnail.png" width="202"></a></td>
    <td>モルワイデ図法<br><a target="_blank" href="http://bl.ocks.org/3734336"><img src="http://bl.ocks.org/mbostock/raw/3734336/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="bottom">
    <td>Sinu・モルワイデ図法<br><a target="_blank" href="http://bl.ocks.org/4319903"><img src="http://bl.ocks.org/mbostock/raw/4319903/thumbnail.png" width="202"></a></td>
    <td>グード図法<br><a target="_blank" href="http://bl.ocks.org/3739752"><img src="http://d3js.org/ex/goode-homolosine.png" width="202"></a></td>
    <td>ヴァン・デル・グリテン図法<br><a target="_blank" href="http://bl.ocks.org/3796831"><img src="http://bl.ocks.org/mbostock/raw/3796831/thumbnail.png" width="202"></a></td>
    <td>d3.hexbin<br><a target="_blank" href="http://bl.ocks.org/4330486"><img src="http://bl.ocks.org/mbostock/raw/4330486/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="bottom">
    <td>d3.geo.tile<br><a target="_blank" href="http://bl.ocks.org/4150951"><img src="http://bl.ocks.org/mbostock/raw/4150951/thumbnail.png" width="202"></a></td>
    <td>TopoJSON<br><a target="_blank" href="http://bl.ocks.org/4108203"><img src="http://bl.ocks.org/mbostock/raw/4108203/thumbnail.png" width="202"></a></td>
    <td>地図配色<br><a target="_blank" href="http://bl.ocks.org/4180634"><img src="http://bl.ocks.org/mbostock/raw/4180634/thumbnail.png" width="202"></a></td>
    <td>スムーズ・ズーミング<br><a target="_blank" href="http://bl.ocks.org/3828981"><img src="http://bl.ocks.org/mbostock/raw/3828981/thumbnail.png" width="202"></a></td>
  </tr>
</table>

[地図投影法](/d3/d3-plugins/tree/master/geo/projection)プラグインは拡張され、対応する投影法は 40 を越えました。d3.geo.projection や d3.geo.projectionMutator を使って独自の投影法を作ったり、The [d3.geo.tile](http://bl.ocks.org/mbostock/4150951) プラグインを使って自分の地図のなかに簡単に256 x 256 のラスタータイルを挿入することもできます。


d3.behavior.zoom と組み合わせれば[滑らかに動く地図](http://bl.ocks.org/mbostock/4132797)もすばやく作れます。[d3.hexbin](http://bl.ocks.org/mbostock/4330486) と [d3.interpolateZoom](http://bl.ocks.org/mbostock/3828981) なども地図製作に便利なプラグインです。

[TopoJSON](https://github.com/mbostock/topojson)は GeoJSON を拡張したフォーマットです。典型的には 80-90% ファイルサイズが縮小します。また TopoJSON はトポロジーもエンコードしており、（ MapShaper のような）トポロジーを維持したままの図形簡略化、[地図配色](http://bl.ocks.org/mbostock/4180634)、[統計地図](http://prag.ma/code/d3-cartogram/), [境界メッシュ計算](http://bl.ocks.org/mbostock/4090870)その他多くのことが可能になりました。 TopoJSON は自体は D3 のプラグインではなく、TopoJSON から GeoJSON へ変換するための単体の JavaScript ライブラリに過ぎません。しかし将来の d3.geo のリリースで  TopoJSON にネイティブに対応するかもしれません。

## トランジション（画面遷移）

<table>
  <tr height="146" valign="top">
    <td>チェインしたトランジション、I<br><a target="_blank" href="http://bl.ocks.org/3903818"><img src="http://bl.ocks.org/mbostock/raw/3903818/thumbnail.png" width="202"></a></td>
    <td>チェインしたトランジション、II<br><a target="_blank" href="http://bl.ocks.org/3943967"><img src="http://bl.ocks.org/mbostock/raw/3943967/thumbnail.png" width="202"></a></td>
    <td>チェインしたトランジション、III<br><a target="_blank" href="http://bl.ocks.org/4341417"><img src="http://bl.ocks.org/mbostock/raw/4341417/thumbnail.png" width="202"></a></td>
    <td>チェインしたトランジション、IV<br><a target="_blank" href="http://bl.ocks.org/4341574"><img src="http://bl.ocks.org/mbostock/raw/4341574/thumbnail.png" width="202"></a></td>
  </tr>
  <tr height="146" valign="top">
    <td>トランジションの再選択、I<br><a target="_blank" href="http://bl.ocks.org/4323929"><img src="http://bl.ocks.org/mbostock/raw/4323929/thumbnail.png" width="202"></a></td>
    <td>トランジションの再選択、II<br><a target="_blank" href="http://bl.ocks.org/3885705"><img src="http://bl.ocks.org/mbostock/raw/3885705/thumbnail.png" width="202"></a></td>
  </tr>
</table>

3.0 では、従来のデータとセレクションとの結合方法と似た形で、トゥイーンやその他のトランジションの状態を DOM と結合できるようになりました。これは結合させたその DOM から、定義されたトランジションを*再選択*し、その DOM を変更できるようになるということです。例えば[カスタマイズされた](http://bl.ocks.org/mbostock/3885705) [軸](http://bl.ocks.org/mbostock/4323929)などがその例です。 こうした DOM 要素はJavaScript コンソールを使って調べることができるため容易にデバッグできます。

トランジションを使いやすくするため、値関数は transition.attr と transition.style を使って即時評価されるようになりました。従来のようにトランジションの開始を待つ必要はありません。これにより、軸領域など外部の状態に依存する[チェインされたトランジション](http://bl.ocks.org/mbostock/3903818)も大幅に単純化されました。また、transition.transition メソッドは、（同時実行するトランジションではなく）前のトランジション終了後に開始するトランジションを生成するようになりました。もう他のトランジションの終了イベントを待つことなく[トランジションをチェインする](http://bl.ocks.org/mbostock/3943967) ことが可能になったわけです。

D3 におけるトランジションの詳しい仕組みについてはチュートリアル[「トランジションを使う」](http://bost.ocks.org/mike/transition/)や [[3.0へのアップグレード]]のトランジションの項をご覧ください。

## リクエスト

<table>
  <tr height="146" valign="bottom">
    <td>プログレスイベント<br><a target="_blank" href="http://bl.ocks.org/3750941"><img src="http://bl.ocks.org/mbostock/raw/3750941/thumbnail.png" width="202"></a></td>
    <td>d3.xhr + Queue.js<br><a target="_blank" href="http://bl.ocks.org/4060606"><img src="http://bl.ocks.org/mbostock/raw/4060606/thumbnail.png" width="202"></a></td>
  </tr>
</table>

3.0では、リクエスト発行のための D3 非同期メソッドが[d3.xhr](Requests#d3_xhr) を返すようになりました。これによって従来よりずっと優れたリクエスト管理が可能になりました。たとえば[progress](http://bl.ocks.org/mbostock/3750941)、load 、error の各イベントごとに別のリスナーを持たせるなど、複数のリスナー設定が可能となりました。[xhr.abort](Requests#abort) を使って実行中のリクエストをキャンセルしたり、[xhr.header](Requests#header) を使ってリクエストヘッダを追加したり、[xhr.send](Requests#send)で HTTP メソッドや body データのカスタマイズも可能になりました。不本意ではありますが、マイクロソフトの非標準の XDomainRequest オブジェクトを使う方法で IE9 への CORS 互換性の対応も行いました。

また、非同期リクエストメソッドが Node.js のコールバック形式（ コールバック関数への最初の引数が「エラー」、第2引数が「結果」という形式）に対応しました。これにより d3.xhs が[Queue.js](/mbostock/queue) のような非同期 JavaScript ヘルパーライブラリとの互換性を持ち、複数のリソースの同時読み込みをずっと容易に行えるようになります。具体例は[[Upgrading to 3.0]] のリクエストのセクションをご参照ください。

## その他

ここまで述べたことの他にも、3.0 では少数のバグフィックスと性能の改善点のほか、いくつかの新機能が加わっています。例えば新しく追加された d3.shuffle メソッドは[フィッシャー・イェーツ・シャッフル](http://bost.ocks.org/mike/shuffle/)を提供します。d3.format クラスは align と fill に対応しました。d3.format と d3.time.format はいずれも実行時 [POSIX ロケール化](http://en.wikipedia.org/wiki/Locale) に対応するようになりました。

また、d3.layout.treemap は「スライスとダイス」アルゴリズムに対応しました。

最後に、ブラウジングとフォークをしやすくするため、すべての D3 の事例集を[bl.ocks.org](http://bl.ocks.org) と [GitHub Gist](http://gist.github.com) に移転したことを書き加えておきます。