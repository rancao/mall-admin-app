module.exports = {
  css: {
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        // additionalData: `@import "~@/variables.sass"`
        javascriptEnabled: true, // 允许链式调用的换行
      },
    },
  },
};
