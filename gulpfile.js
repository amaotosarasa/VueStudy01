'use strict';

let gulp = require('gulp');

// ローカルサーバー
let browsersync = require('browser-sync').create();
let connectSSI   = require('connect-ssi');

// サーバーを立ち上げる
gulp.task('build-server', function (done) {
	browsersync.init({
		server: {
			baseDir: "root/",
			middleware: [
				connectSSI({
					baseDir: __dirname + '/root/',
					ext: '.html'
				})
			]
		}
	});
	done();
	console.log('Server was launched');
});

// ブラウザのリロード
gulp.task('browser-reload', function (done) {
	browsersync.reload();
	done();
	console.log('Browser reload completed');
});

// 監視ファイル
gulp.task('watch-files', function (done) {
	gulp.watch('root/**/*.html', gulp.task('browser-reload'));
	gulp.watch('root/**/*/*.css', gulp.task('browser-reload'));
	gulp.watch('root/**/*/*.js', gulp.task('browser-reload'));
	done();
	console.log(('gulp watch started'));
});

// タスクの実行
gulp.task('default', gulp.series('build-server', 'watch-files',function (done) {
	done();
	console.log('Default all task done!');
}));