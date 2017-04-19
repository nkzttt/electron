riot.tag2('app', '<nav> <virtual each="{nav}"> <a href="#{path}" if="{path != currentPath}">{title}</a> <span if="{path == currentPath}">{title}</span> </virtual> </nav> <main> <root show="{currentPath == \'/\'}"></root> <test show="{currentPath == \'/test\'}"></test> <web show="{currentPath == \'/web\'}"></web> </main>', 'app,[data-is="app"]{ display: block; font-family: sans-serif; margin: 0; padding: 1em; text-align: center; color: #666; } app nav,[data-is="app"] nav{ display: block; border-bottom: 1px solid #666; padding: 0 0 1em; } app nav > a,[data-is="app"] nav > a,app nav > span,[data-is="app"] nav > span{ display: inline-block; padding: 0 0.8em; } app nav > a:not(:first-child),[data-is="app"] nav > a:not(:first-child),app nav > span:not(:first-child),[data-is="app"] nav > span:not(:first-child){ border-left: 1px solid #eee; }', '', function(opts) {
'use strict';

var self = this;

// ナビゲーション用配列
self.nav = [{ path: '/', title: 'TOP' }, { path: '/test', title: 'TEST' }, { path: '/web', title: 'WEB' }];

// 初期化（ルート定義）
self.currentPath = '/';
location.hash = self.currentPath;

route('/', function () {
	self.currentPath = '/';
	self.update();
});

// ルート以外のルーティング
route('/test', function () {
	self.currentPath = '/test';
	self.update();
});

route('/web', function () {
	self.currentPath = '/web';
	self.update();
});
});





riot.tag2('root', '<p>これはサンプルプロジェクトです。</p>', '', '', function(opts) {
});





riot.tag2('test', '<h2>DOM操作テスト</h2> <p>テキストエリアにリスト項目を入力してください。</p> <div><input type="text" onkeyup="{checkVal}" disabled="{!items.length}"></div> <ul> <li each="{v in items}">{v}</li> </ul> <p if="{!items.length}">!!!コンプリート!!!</p> <h2>プロセス間通信テスト</h2> <p> <a href="#" onclick="{api}">クリックしてください。</a> </p>', 'test ul,[data-is="test"] ul{ padding: 0; margin: 1em 0 0; list-style: none; } test ul > li,[data-is="test"] ul > li{ display: inline-block; padding: 0 10px; }', '', function(opts) {
'use strict';

var ipcRenderer = require('electron').ipcRenderer;

var self = this;

self.items = ['hoge', 'fuga', 'piyo'];

self.checkVal = function (e) {
	var value = e.target.value,
	    index = self.items.indexOf(value);
	if (index === -1) return;

	e.target.value = '';
	self.items.splice(index, 1);
};

self.api = function (e) {
	e.preventDefault();

	ipcRenderer.send('test', 'テストメッセージ');
};

ipcRenderer.on('test-response', function (event, message) {
	alert(message);
});
});




riot.tag2('web', '<iframe src="http://riotjs.com/ja/" frameborder="0"></iframe>', 'web iframe,[data-is="web"] iframe{ width: 100%; height: 500px; }', '', function(opts) {
});
