const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./src/index.jsx"],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif|webp)$/, 
                type: 'asset/resource', 
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }, 
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
            new NodePolyfillPlugin(),
        ],
    infrastructureLogging: { level: 'warn' },
    stats: 'errors-warnings',
};
