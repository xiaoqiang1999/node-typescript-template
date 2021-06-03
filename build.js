/**
 * npm run build 打包代码
 */

const shell = require('shelljs');

shell.rm('-rf', './build');

shell.exec('tsc --project ./tsconfig.prod.json');
shell.exec('babel ./dist --out-dir ./dist');

shell.cp('-r', './src/static', './dist/');

console.log('build Success');

// const babel = require('@babel/core');
// babel.transformFileSync('./dist/index.js', {
// 	configFile: './.babelrc',
// });

// const { execSync } = require('child_process');
// const { resolve } = require('path');
// const tscCommand = resolve('./node_modules/.bin/tsc');
// const babelCommand = resolve('./node_modules/.bin/babel');
// execSync(`${tscCommand} --project ./tsconfig.prod.json`);
// execSync(`${babelCommand} ./dist --out-dir ./dist`);

// console.log(JSON.parse(process.env.npm_config_HOST));
