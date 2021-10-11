var path = require('path');

module.exports = {
    entry: {
        app: './src/main.jsx',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '..', 'public', 'dist'),
        filename: './[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                'presets': ['@babel/preset-react'],
                'plugins': ['@babel/plugin-proposal-class-properties']
            }
        },
        {
            test: /\.(gif|png|jpe?g|svg|xml)$/i,
            loader: "file-loader",
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/',
                publicPath: '/assets/',
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            pages: path.resolve(__dirname, 'src', 'pages'),
            api: path.resolve(__dirname, 'src', 'api'),
            store: path.resolve(__dirname, 'src', 'store'),
            src: path.resolve(__dirname, 'src'),
        }
    },
    devServer: {
        // contentBase: path.join(__dirname, '..', 'public', 'dist'),
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
        port: 3000
    }
}