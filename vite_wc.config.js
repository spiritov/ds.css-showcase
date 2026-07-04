import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { resolve } from 'node:path';

export default defineConfig({
	plugins: [
		tailwindcss(),
		cssInjectedByJsPlugin(),
		svelte({
			compilerOptions: ({ filename }) => {
				return {
					// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
					runes: filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
					// web components
					customElement: true
				};
			},

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter({
				// See below for an explanation of these options
				config: undefined,
				platformProxy: {
					configPath: undefined,
					environment: undefined,
					persist: undefined
				},
				fallback: 'plaintext',
				routes: {
					include: ['/*'],
					exclude: ['<all>']
				}
			})
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.js'),
			name: 'DSCalendar',
			fileName: 'ds-calendar',
			formats: ['es']
		}
	}
});
