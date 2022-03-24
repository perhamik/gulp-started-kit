import {test} from './modules/functions.js'

window.addEventListener(
	'DOMContentLoaded',
	() => {
		test()
	},
	{once: true, passive: true},
)
