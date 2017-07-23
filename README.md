# react-starter-kit
react starter kit with webpack,eslint

to remove eslint validation remove below lines of code from webpack.config.js
    {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },


