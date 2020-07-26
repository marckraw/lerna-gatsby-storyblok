// index.js

module.exports = {
    onPreBuild: (things) => {
      console.log('Hello world from onPreBuild event!')
      console.log("twoja starar pierze w rzece")
      console.log("wtf ? ")
      console.log(things);
    },
  }