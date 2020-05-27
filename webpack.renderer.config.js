const rules = require('./webpack.rules');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

rules.push({
    test: /\.css$/,
    use: [
        'vue-style-loader',
        {
            loader: 'css-loader',
            options: { importLoaders: 1 },
        },
        'postcss-loader',
    ],
});

rules.push({
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
});

module.exports = {
    // Put your normal webpack config below here
    module: {
        rules,
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],
};
