module.exports = {
  devServer: {
    //设置代理
    host: "0.0.0.0",
    port: 8080, // 端口
    proxy: {
      "/api": {
        ws: false, //是否使用websockets
        target: "http://116.62.234.172:3000/", //域名
        // 网易云音乐api：http://116.62.234.172:3000/
        // mockjs：http://localhost:4000
        changeOrigin: true, //是否开启代理
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
