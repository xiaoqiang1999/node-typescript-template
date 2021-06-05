module.exports = {
	parser: '@typescript-eslint/parser', //定义ESLint的解析器
	plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-prettier'], //定义了该eslint文件所依赖的插件 插件决定lint规则
	extends: ['plugin:prettier/recommended'], //定义文件继承的子规范 代码规范
	env: {
		//指定代码的运行环境
		node: true,
	},
};
