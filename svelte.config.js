import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [mdsvex({ extension: '.md', smartypants: true }), sveltePreprocess()],

	kit: {
		adapter: adapter({
			pages: 'docs'
		})
	}
};

export default config;
