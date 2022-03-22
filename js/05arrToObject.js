//5\. Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию). Пример:

/*
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

arrayToObject(arr)
// Outputs: {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
*/

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

function arrayToObject(arrayElement) {
	var elementToFill = {};
	for (let i = 0; i < arrayElement.length; i++) {
		if(Array.isArray(arrayElement[i][1])) {console.log("element is array:" + arrayElement[i][1]);
			elementToFill[arrayElement[i][0]] = {};
			fillPropertyOfObject(elementToFill[arrayElement[i][0]], arrayElement[i][1]);
		}
		else {
			elementToFill[arrayElement[i][0]] = arrayElement[i][1];
		}
	}
    return elementToFill;
}

function fillPropertyOfObject(objectToFill, arrayOfData) {
	for (let i = 0; i < arrayOfData.length; i++) {
		if (Array.isArray(arrayOfData[i][1])) {
			fillPropertyOfObject(objectToFill[arrayOfData[i][0]], arrayOfData[i][1]);
		} else {
			objectToFill[arrayOfData[i][0]] = arrayOfData[i][1];
		}
	}
}

let objectFromArray = arrayToObject(arr);

console.log(arr);
console.log(objectFromArray);