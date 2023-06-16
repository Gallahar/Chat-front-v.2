import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		proxy: {
			'^/upload': {
				target: process.env.VITE_PUBLIC_API_BASE_URL,
			},
		},
	},
})
