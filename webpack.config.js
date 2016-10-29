/**
 * Created by jsugg on 10/24/16.
 */
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    target: 'electron',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }

};
