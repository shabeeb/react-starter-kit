module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
	  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	  "quotes": ["error", "single"],
	  "jsx-quotes": [2, "prefer-double"]
	}
};