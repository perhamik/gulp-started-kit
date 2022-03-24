import replace from 'gulp-replace'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import browsersync from 'browser-sync'
import ifPlugin from 'gulp-if'

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	newer: newer,
	browsersync: browsersync,
	if: ifPlugin,
}
