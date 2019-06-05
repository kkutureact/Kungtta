const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',

    entry: './src/index.ts',

    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    devtool: 'source-map',

    resolve: {
        extensions: [ '.ts', '.js', '.tsx', '.json' ]
    },

    externals: ['pg', 'pg-hstore', nodeExternals()],

    output: {
        filename: 'main.bundle.js',
        path: __dirname + '/dist'
    }
};
