# 03. NodeJSの標準モジュール２
## 1. パスを扱う
### パスとファイルシステム
```js
var pathUtil = require('path');
```
### path モジュール
* パス正規化
* パス生成
* ディレクトリ名/ファイル名取得
* 拡張子取得
### パス情報
現在の実行ファイルパス、ディレクトリパス

グローバルオブジェクト（global）
* __filename
* __dirname
```js
var path = __dirname + '/image.png';
```
### パス正規化
```js
pathUtil.normalize('/user/tmp/../local///bin/');
// returns
/user/local/bin/
```
### パスの構成情報の取得
* path.basename() : ファイル名
* path.dirname() : ディレクトリパス
* path.extname() : 拡張子
```js
var path = '/foo/bar/baz/asdf/quux.html';
// /foo/bar/baz/asdf
pathUtil.dirname(path);
// quux.html
pathUtil.basename(path);
// .html
pathUtil.extname(path);
```