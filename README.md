# react-starter-kit
A simple react starter kit with bebal, webpack, hot-reloader and eslint

# Install
        npm install
        npm run dev -- To start dev server


# Scripts
		npm run build		--  Production build
		npm start			--  Run production server 
		npm run dev		  	--  Run development server with hot-reload




To remove eslint validation remove below lines (line 25 to 30) of code from webpack.config.js

     {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },

Checkout my blog for <a href="http://shabeebk.com/blog/start-with-react/"> more info</a>

