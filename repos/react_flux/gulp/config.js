var dest = "./build";

module.exports = {
  fonts: {
    src: './node_modules/bootstrap/dist/fonts/**',
    dest: dest + '/fonts'
  },

  styles: {
    src: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './css/**'
    ],
    dest: dest + '/css'
  },

  imgs: {
    src: './img/**',
    dest: dest + '/img'
  },

  templates: {
    src: './index.html',
    dest: dest
  },

  other: {
    src: './favicon.ico',
    dest: dest
  },

  deploy: {
    files: dest + '/**'
  },

  browserify: {
    watch: true
  }
};
