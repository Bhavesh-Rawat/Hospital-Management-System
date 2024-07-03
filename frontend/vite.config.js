import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173
  }
})//
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';



// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173, // Specify the port you want to use
//     hostname: 'localhost',
//   },
// });
