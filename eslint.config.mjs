import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser' // vue文件解析器

//关闭所有不必要的或可能与Prettier冲突的规则。https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#configuration-new-eslintconfigjs
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: vueEslintParser, // 使用vue解析器，这个可以识别vue文件
      parserOptions: {
        ecmaVersion: 'latest',
        parser: tseslint.parser, // 在vue文件上使用ts解析器
        sourceType: 'module'
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser
      },
      // 全局变量忽略检测
      globals: {
        uni: true
      }
    },
    plugins: {},
    rules: {
      'vue/multi-word-component-names': 'off', // 不再监测组件是否使用多单词驼峰命名
      '@typescript-eslint/no-explicit-any': ['off'], // 不限制any类型的使用
      '@typescript-eslint/no-empty-function': ['off'], // 关闭空函数警告
      '@typescript-eslint/no-this-alias': ['off'], // 不再禁止this被分配
      '@typescript-eslint/no-unused-vars': 'error', // 不再禁止未使用过的变量
      '@typescript-eslint/no-non-null-assertion': 'off', // 不再禁止非空断言
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ]
    }
  }
]
