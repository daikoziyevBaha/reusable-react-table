const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = (env = {}, args) => {
    const { mode } = args;
    const isProd = mode === 'production';
    const isDev = mode === 'development';
    
    const getStyleLoaders = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: 'Test project',
                buildTime: new Date().toISOString(),
                template: 'public/index.html'
            }),
        ]
        if (isProd) {
            plugins.push(
                new MiniCssExtractPlugin({
                filename: "main-[hash:8].css"
            }))
        }
        return plugins;
    };

    return {
        entry: './src/index.tsx',
        mode: isProd ? 'production' : 'development',
        output: {
            filename: "[main]-[hash:8].js",
            path: path.resolve(__dirname, 'build')
        },
        devtool: 'inline-source-map',
        module: {
            rules: [
                // Babel loader
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: { presets: ['@babel/env','@babel/preset-react'] }
                        }
                    ],
                    
                },
                {
                    test: /\.(ts|tsx)?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                // Images loader
                {
                    test: /\.(jpg|png|jpeg|gif)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "images",
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                // Fonts loader
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "fonts",
                                name: '[name].[ext]'
                            }
                        }
                    ]
                },
                // CSS loader
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },
                // SASS|SCSS loader, if loader hasn't options, use like a string not object.
                {
                    test: /\.s[ca]ss$/,
                    use: [ ...getStyleLoaders(),'sass-loader']
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader'],
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
        },
        plugins: getPlugins(),
        devServer: {
            port: 3000,
            open: true
        }
    }
}