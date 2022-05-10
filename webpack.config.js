module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {filename: "main.js"},
    module: {
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          use: "ts-loader"
        }
      ]
    },
    // import 文で .ts や .tsx ファイルを解決。（拡張子を書書かなくてよくなる）
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
};