const
	appDir = __dirname + '/sample',
	gulp = require('gulp'),
	electron = require('electron-connect').server.create({path: appDir}),
	exec = require('child_process').exec;

gulp.task('serve', () => {

	// Start browser process 
	electron.start();

	// Restart browser process 
	gulp.watch(appDir + '/main.js', electron.restart);

	// Reload renderer process 
	gulp.watch([appDir + '/*.html', appDir + '/js/**/*.js'], electron.reload);
	
	// run npm script in app dir
	exec('npm start', {cwd: appDir}, (err, stdout, stderr) => {
		console.log(err, stdout, stderr);
		if (err) electron.stop();
	});
	
});