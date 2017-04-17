const 
	electron = require('electron'),
	{app} = electron,	// アプリケーションを操作するモジュール
	{BrowserWindow} = electron,	// ネイティブブラウザウィンドウを作成するモジュール
	path = require('path'),
	url = require('url');

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
		pathname: '/index.html',
		protocol: 'file:',
		slashes: true
	}));

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
	
};

app.on('ready', () => {
	useRootPaht();
	createWindow();
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
		createWindow()
	}
});
