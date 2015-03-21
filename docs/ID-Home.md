> **Wiki**

**D3.js** adalah pustaka JavaScript untuk manipulasi dokumen berdasarkan data. D3 membantu anda menyajikan data menggunakan HTML, SVG dan CSS. Penekanan D3 pada standard web memberi Anda kompatibilitas penuh trerhadap perambah web (_web browser_) modern tanpa mengkaitkan anda dengan _framework proprietary_, menggabungkan komponen-komponen visualisasi yang powerful dan pendekatan berdasarkan data pada manipulasi DOM (_Document Object Model_).

## Resources

* [Pengantar](/widiantonugroho/d3/wiki/Apa-Itu-D3js)
* [Gallery contoh-contoh](/mbostock/d3/wiki/Gallery)
* [Tutorial dan Diskusi](/mbostock/d3/wiki/Tutorials)
* [Referensi API (Bahasa Indonesia)](/widiantonugroho/d3/wiki/API-Reference-%28Bahasa-Indonesia%29)
* [Catatan Rilis](/mbostock/d3/releases)
* [Plugins](/d3/d3-plugins)
* [Pertanyaan mengenai d3.js di Stack Overflow](http://stackoverflow.com/questions/tagged/d3.js)
* [Milis d3-js di Google Group](http://groups.google.com/group/d3-js)
* [English](/mbostock/d3/wiki)
* [한국어](https://github.com/zziuni/d3/wiki)
* [日本語](/mbostock/d3/wiki/JP-Home)
* [中文](/mbostock/d3/wiki/CN-Home)
* [[API Reference (русскоязычная версия)]]
* [API Kaynak - Türkçe](https://github.com/ahmetkurnaz/d3/wiki)


## Browser Support

D3 mendukung apa yang disebut sebagai perambah (browser) web “modern”, yang umumnya semua perambah _kecuali_ IE8 dan dibawahnya. D3 diujicoba terhadap Firefox, Chrome (Chromium), Safari (WebKit), Opera dan IE9. Beberapa bagian dari D3 mungkin dapat berjalan pada perambah yang lebih tua, karena pustaka inti (_core_) mempunyai _requirement_ minimal: JavaScript dan API [W3C DOM](http://www.w3.org/DOM/). Untuk IE8, direkomendasikan menggunakan pustaka kompatibilitas [Aight](https://github.com/shawnbot/aight). D3 memnggunakan [Selectors API](http://www.w3.org/TR/selectors-api/) Level 1, tapi Anda dapat mem-preload [Sizzle](http://sizzlejs.com/) untuk kompatibilitas. Anda akan membutuhkan perambah modern untuk menggunakan [SVG](http://www.w3.org/TR/SVG/) dan [CSS3 Transitions](http://www.w3.org/TR/css3-transitions/). D3 bukanlah suatu lapisan kompatibilitas, jadi bila perambah Anda tidak mendukung standard, Anda tidak beruntung. Mohon maaf :)

D3 bekerja juga dengan Node.js. Lihat <https://groups.google.com/forum/#!msg/d3-js/JyldAkWkTvI/n8thanJeGvAJ> untuk detailnya.

## Installing

Unduh versi terakhir di sini:

* <https://github.com/mbostock/d3/releases>

Atau, me-link secara langsybg ke rilis terakhir, kopi potongan kode berikut:

```html
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
```

Atau, bila Anda ingin repositori lengkapnya termasuk pengetesan-pengetesan:

* <https://github.com/mbostock/d3/zipball/master>

Ketika membangun secara lokal, lihat bahwa perambah Anda mungkin memaksa permisi yang ketat untuk membaca file di luar _file system_ lokal. **Bila anda menggunakan [d3.xhr](/mbostock/d3/wiki/Requests) secara lokal (termasuk d3.json dan lain-lain), Anda harus mempunyai server web lokal.** Sebagai contoh, Anda dapat menjalankan built-in server Python:

    python -m SimpleHTTPServer 8888 &

atau untuk Python 3+

    python -m http.server 8888 &

Setelah berjalan, masuk ke <http://localhost:8888/>.

D3 mendukung API definisi modul asinkronos (asynchronous module definition - AMD). Sebagai contoh, bila Anda menggunakan [RequireJS](http://requirejs.org/), Anda mungkin me-load yang berikut ini:

```js
require.config({paths: {d3: "http://d3js.org/d3.v3.min"}});

require(["d3"], function(d3) {
  console.log(d3.version);
});
```

## Modifying

Bila Anda ingin memodifikasi bagaimana D3 diimplementasikan, klik tombol "Fork" pada pojok kanan-atas dari halaman ini, dan kemudian _clone_ menjadi _fork_ Anda dengan perintah _command line_ dengan mengganti *username* dengan *username* Github Anda:

```bash
git clone git://github.com/username/d3.git
```

Repositori D3 seharusnya dapat berjalan bila Anda hanya ingin membuat visualisasi baru menggunakan D3. Di sisi lain, bila Anda ingin memperluas D3 dengan fitur-fitur baru, memperbaiki bug, atau menjalankan pengetesan-pengetesan, Anda harus [mem-fork repositori D3](/mbostock/d3), dan instal [Node.js](http://nodejs.org/) (version 0.10.x atau lebih). Dari direktori _root_ dari repositori ini, Anda kemudian dapat menginstal dependensi D3:

    npm install

Untuk menjalankan tes, gunakan:

    make test

