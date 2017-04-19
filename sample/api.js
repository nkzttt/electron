const 
	electron = require('electron'),
	{ipcMain} = electron;

ipcMain.on('test', (event, message) => {
	console.log(message);
	event.sender.send('test-response', 'テスト完了');
});

module.exports = ipcMain;
