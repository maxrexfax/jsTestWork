//3\. Напишите функцию обертку, которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения. Количество аргументов исполняемой функции **не ограничено**!
//    Пример:

const f1 = ([x]) => x;
const f2 = ([a, b]) => a + b;
const f3 = ([a, b, c]) => a + b + c;
//const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

function printMessage(messageText) {
    console.log(messageText);
}

function bulkRun(arrayOfFunctionsAndArguments) {
	return new Promise(function(resolve, reject){
	let arrayOfResults = [];
		for (let i = 0; i < arrayOfFunctionsAndArguments.length; i ++) {
			arrayOfResults[i] = arrayOfFunctionsAndArguments[i][0](arrayOfFunctionsAndArguments[i][1]);
		}
		resolve(arrayOfResults);
		reject('Data error');
	})
}

bulkRun(
	[
		[f1, [555]],
		[f2, [55, 67]],
		[f3, [45, 57, 89]],
	]	
	).then(
	response => printMessage(`Success: ${response}`),
	error => printMessage(`Rejected: ${error}`)
);