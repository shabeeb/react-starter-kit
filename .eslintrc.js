module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    env: {
        browser: true
    },
    "rules": {
	  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	  "quotes": ["error", "single"],
	  "jsx-quotes": [2, "prefer-double"],
	  "linebreak-style": 0
	}
};
