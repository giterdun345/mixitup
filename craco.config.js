// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}

// after craco config for tailwindcss config 
// npm uninstall tailwindcss postcss autoprefixer
// npm install tailwindcss@latest postcss@latest autoprefixer@latest

// npx tailwindcss init -p

// npm uninstall tailwindcss postcss autoprefixer
// npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

// per issue here: https://github.com/tailwindlabs/tailwindcss/issues/2831

// or manually 