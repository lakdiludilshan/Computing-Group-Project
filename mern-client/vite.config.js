// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // ... other configurations
  resolve: {
    alias: {
      '@mui/material': 'path-to-material-ui-package',
      '@mui/icons-material': 'path-to-material-ui-icons-package',
    },
  },
});
