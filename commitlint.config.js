module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'build',
        'ci',
        'chore',
        'docs',
        'refactor',
        'revert',
        'style',
        'release',
        'test'
      ]
    ]
  }
}
//提交格式为 <type>(scope?): <subject>
/*
 * @Description: commit-msg提交信息格式规范
 *
 * commit-msg格式: <type>(scope?): <subject>
 *   - type: 用于表明我们这次提交的改动类型，是新增了功能？还是修改了测试代码？又或者是更新了文档？
 *     - feat: 新特性、新功能
 *     - fix: 修复 bug
 *     - perf: 优化相关，比如提升性能、体验
 *     - build: 主要目的是修改项目构建系统（例如glup，webpack，rollup，vite的配置等）的提交
 *     - ci: 修改项目的持续集成流程（Kenkins、Travis等）的提交
 *     - chore: 其他修改, 比如改变构建流程、或者增加依赖库、工具等
 *     - docs: 文档修改（documents）
 *     - refactor: 代码重构
 *     - revert: 回滚到上一个版本
 *     - style: 不影响程序逻辑的代码修改、主要是代码样式方面的优化、修改
 *     - release: 发布新版本
 *     - test: 测试用例修改
 *   - scope：一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块。
 *   - Subject：一句话描述此次提交的主要内容，做到言简意赅
 */
