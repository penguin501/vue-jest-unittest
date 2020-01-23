module.exports = {
    "moduleFileExtensions": [
      "js",
      "json",
      // *.vue ファイルを処理するように Jest に指示する
      "vue"
    ],
    "transform": {
      // transformの定義を追加すると、デフォルトでjestがやってくれていた
      // babelのトランスパイルが上書きされてしまうとのことなので
      // 以下も書いておく
      '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
      // vue-jest で *.vue ファイルを処理する
      ".*\\.(vue)$": "vue-jest"
    }
  }