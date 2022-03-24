import gulp from 'gulp'
import {path} from './gulp/config/path.js'
import {plugins} from './gulp/config/plugins.js'

global.app = {
	isProd: process.argv.includes('--prod'),
	isDev: !process.argv.includes('--prod'),
	path: path,
	plugins: plugins,
	gulp: gulp,
}

import {copy} from './gulp/tasks/copy.js'
import {html} from './gulp/tasks/html.js'
import {scss} from './gulp/tasks/scss.js'
import {js} from './gulp/tasks/js.js'
import {images} from './gulp/tasks/images.js'
import {reset} from './gulp/tasks/reset.js'
import {server} from './gulp/tasks/server.js'
import {otfToTtf, ttfToWoff, fontsStyle} from './gulp/tasks/fonts.js'
import {zip} from './gulp/tasks/zip.js'

function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.js, js)
	gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)

export {dev}
export {build}
export {deployZIP}

gulp.task('default', dev)
