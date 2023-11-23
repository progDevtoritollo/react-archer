import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      // '@config': '/src/app/config',  //! don`t work why
      // '@pages': '/src/pages' //! don`t work why 
    },       //? look also at tsconfig.json 
    //? guide link to solve this problem  -    https://stackoverflow.com/questions/75201705/how-to-set-multiple-aliases-in-vite-react/75201776#75201776
  },
})
