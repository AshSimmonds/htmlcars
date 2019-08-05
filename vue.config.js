module.exports = {
  publicPath: '/htmlcars/',
  outputDir: 'docs',
  assetsDir: 'assets',
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/sass/_variables.scss";
        @import "@/assets/sass/_mixins.scss";`
      }
    }
  }
}
