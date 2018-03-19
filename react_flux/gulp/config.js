var dest = "./build";

module.exports = {
  font: {
    src: './node_modules/bootstrap/dist/fonts/**',
    dest: dest + '/fonts'
  },

  style: {
    src: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './css/**'
    ],
    dest: dest + '/css'
  },

  img: {
    src: './img/**',
    dest: dest + '/img'
  },

  template: {
    src: './index.html',
    dest: dest
  },

  other: {
    src: './favicon.ico',
    dest: dest
  },

  deploy: {
    files: dest + '/**/*'
  },

  production: {
    jsSrc: dest + '/js/*.js',
    cssSrc: dest + '/css/*.css',
    jsDest: dest + '/js',
    cssDest: dest + '/css'
  }
};
