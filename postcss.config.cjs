module.exports = {
  plugins: {
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 2,
      features: {
        "custom-properties": false,
        "custom-media-queries": {
          importFrom: "renderer/media.css"
        },
        "nesting-rules": true
      }
    }
  }
};
