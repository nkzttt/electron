# electron プロジェクトテンプレート

## モジュール
electronモジュールをインストールするディレクトリと、各アプリケーションディレクトリは分けること。

### ルートディレクトリ
- electron
- electron-packager

### 各アプリケーションディレクトリ
- 各アプリに依存するモジュール群

## 開発用コマンド
```
// プロジェクトルートにて
$ node_modules/.bin/gulp serve
```
electronのwatchが始まり、appDirにて```npm start```が実行される。  
gulpfile.js内の変数```appDir```は書き換えること。  


## mac開発時のパッケージ化
windows用にパッケージするため、brewからwineをインストールする。  
wineの所有者はnodeを実行する者と同一にする。  
