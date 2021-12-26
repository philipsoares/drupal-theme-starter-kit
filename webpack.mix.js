// webpack.mix.js

let mix = require("laravel-mix");
const globImporter = require("node-sass-glob-importer");

mix
  .js("js/main.js", "js")
  .sass("sass/main.scss", "css", {
    sassOptions: {
      importer: globImporter(),
    },
  })
  .setPublicPath("dist");
