module.exports = {
    extends: "airbnb-base",
    plugins: [
        "html"
    ],
    rules: {
        "indent": ["error", 4, { "SwitchCase": 1}],
        "comma-dangle": ["error", "never"],
        "no-param-reassign": [0, {"props": false}],
        "no-console": 0
    }
};
