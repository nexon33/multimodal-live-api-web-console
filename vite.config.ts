import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const conditionalPlugins = [];

if (process.env.VITE_TEMPO) {
  conditionalPlugins.push(['tempo-devtools/swc', {}]);
}

export default defineConfig({
  plugins: [
    react({
      plugins: [...conditionalPlugins]
    })
  ],
  envPrefix: ['VITE_']
});