module.exports = {
    target: 'node',

    entry: './src/index.ts',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: 'json-loader',
                exclude: /node_modules/
            }
        ]
    },

    devtool: 'source-map',

    resolve: {
        extensions: [ '.ts', '.js', '.json' ]
    },

    output: {
        filename: 'main.bundle.js',
        path: __dirname + '/dist'
    }
}