const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: 'assets/[name].[hash][ext][query]',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        }, 
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
        }), 
    ],
    optimization: {
        runtimeChunk: 'single',
        nodeEnv: 'development',
    },
    module: {
        rules: [ 
            {
                test: /\.scss$|\.css$/,
                use: [
                    "style-loader",  
                    "css-loader",   
                    "sass-loader", 
                ]
            }, 
        ] 
    }
};
