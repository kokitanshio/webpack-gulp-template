module.exports = {
  // 開発モード
  // 本番モードはproduction
  mode: "development",
  entry: "./src/assets/js/app.js",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist/assets/js/`,
  },
  module: {
    rules: [
      // jsのバンドルルールの追加
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      // CSSをJSの中でimportする際に使用するルール
      // npmではstyle-loaderとcss-loaderのインストールが必須
      {
        test: /node_modules\/(.+)\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
    ],
  },
};
