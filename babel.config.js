module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //run npm i babel-plugin-transform-remove-console --save-dev and added this "env" to delete the console log for build production
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
