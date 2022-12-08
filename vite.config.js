import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
 
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        :root {
          
        }
        
        @function scaleValue($value, $ideal-viewport-width:1600) {
          @return calc(
            #{$value} * (clamp(350px, 100vw, 3840px) / #{$ideal-viewport-width})
          );
        };
        
        

        @mixin respond($breakpoint) {
          @if $breakpoint == phone {
            @media only screen and (max-width: 37.5em) {
              @content;
            } //600px
          }
          @if $breakpoint == tab-port {
            @media only screen and (max-width: 56.25em) {
              @content;
            } //900px
          }
          @if $breakpoint == tab-land {
            @media only screen and (max-width: 75em) {
              @content;
            } //1200px
          }
          @if $breakpoint == big-desktop {
            @media only screen and (min-width: 112.5em) {
              @content;
            } //1800
          }
        }
        
        `,
      },
    },
  },
})
