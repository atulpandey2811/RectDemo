var config = {
    entry: './main.js',
    mode:"development",
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: false,
       port: 8030
    },
    module: {
       rules: [
          {
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['@babel/env', '@babel/react']
             }
          }
       ]
    }
 }
 module.exports = config;