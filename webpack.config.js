const path = require("node:path");

module.exports = {
  context: path.resolve(__dirname, "src"), // Устанавливаем контекст для входных файлов
  entry: "./index.js", // Точка входа для вашего приложения
  output: {
    // Настройки для выходного файла
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "module",
          },
        },
      },
    ],
  },
};
