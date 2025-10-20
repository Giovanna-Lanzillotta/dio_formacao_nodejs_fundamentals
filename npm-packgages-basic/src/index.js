import chalk from 'chalk';
import logSymbols from 'log-symbols';


//console.log(chalk.blue('Hello world!'));

console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.green.bgCyan.bold('Ola eu sou'));
console.log(chalk.red.bgMagentaBright.bold('Jarvis'));
console.log(chalk.yellowBright.bgBlackBright.underline('TESTANDO...'));
console.log(chalk.blue.bgBlueBright.strikethrough('Novo teste'));
console.log(chalk.red.bgYellow.dim('testess'));
console.log(chalk.red.bgYellow.inverse('testess inverse'));

console.log(chalk.magenta(
	'I am a magenta line ' +
	chalk.yellow.underline.bold('with a yellow substring') +
	' that becomes green again! '
));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.yellow.bold('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

console.log(chalk.red.bold('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));


console.log(logSymbols.success, 'Finished successfully!');
console.log(logSymbols.error, 'Mensagem de ERRO');
console.log(logSymbols.info, 'Mensagem  Importante');
console.log(logSymbols.warning, 'Alertaa');

console.log(logSymbols.success, chalk.green.italic("Servidor iniciado!"));
console.log(logSymbols.error, chalk.red.italic("Servidor com erro!"));