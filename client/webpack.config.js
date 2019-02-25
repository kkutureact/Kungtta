const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],

    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
    },

    devServer: {
        inline: true,
        port: 3000,
        contentBase: __dirname + '/public/',
        open: true
    },

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'images/[hash]-[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: true,
            filename: './index.html'
        })
    ]
};