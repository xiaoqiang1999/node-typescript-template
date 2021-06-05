/**
 * npm run build 打包代码
 */

const shell = require('shelljs');

shell.rm('-rf', './build');

shell.exec('tsc --project ./tsconfig.prod.json');
shell.exec('babel ./build --out-dir ./build');

shell.cp('-r', './src/static', './build/');

console.log('build Success');

// const babel = require('@babel/core');
// babel.transformFileSync('./build/index.js', {
// 	configFile: './.babelrc',
// });

// const { execSync } = require('child_process');
// const { resolve } = require('path');
// const tscCommand = resolve('./node_modules/.bin/tsc');
// const babelCommand = resolve('./node_modules/.bin/babel');
// execSync(`${tscCommand} --project ./tsconfig.prod.json`);
// execSync(`${babelCommand} ./build --out-dir ./build`);

// console.log(JSON.parse(process.env.npm_config_HOST));
