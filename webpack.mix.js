const mix = require('laravel-mix')

mix.sass('scss/main.scss', 'css')

// If you are using PostCSS, comment out line 3, and uncomment line 6-8
// mix.postCss('postcss/main.css', 'css', [
//         require('postcss-import')
//     ])