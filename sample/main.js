const 
	electron = require('electron'),
	{app} = electron,
	{BrowserWindow} = electron,
	client = require('electron-connect').client,
	path = require('path'),
	url = require('url');

// setup api
require('./api.js');

// ウィンドウオブジェクトをグローバル参照しておく
// しないと、ガベージコレクタにより自動的に閉じられてしまう
let win;

// webブラウザでルートパスを使えるようにする
let useRootPaht = function () {
	
	electron.protocol.interceptFileProtocol('file', (req, callback) => {
		
		const requestedUrl = req.url.substr(7);

		if (path.isAbsolute(requestedUrl)) {
			callback(path.normalize(path.join(__dirname, requestedUrl)));
		} else {
			callback(requestedUrl);
		}
		
	});
	
};

// ブラウザ生成
let createWindow = function () {
	
	win = new BrowserWindow({width: 800, height: 600});

	win.loadURL(url.format({
		pathname: path.join(__dirname, '/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.on('closed', () => {
		win = null;
	});
	
};

app.on('ready', () => {
	
	// クライアントからrequireを使うため、相対とする
	// useRootPaht();
	createWindow();
	
	// サーバープロセスへ接続
	client.create(win);
});

app.on('window-all-closed', () => {
	// macOSでは、Cmd + Q(終了)をユーザーが実行するまではウィンドウが全て閉じられても終了しないでおく
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// macOS では、ドックをクリックされた時にウィンドウがなければ新しく作成する
	if (win === null) {
		createWindow();
	}
});
