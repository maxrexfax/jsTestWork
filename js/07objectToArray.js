//7\. Написать обратный метод (см. задачу 5) objectToArray, который из объекта создаст массив. Пример:
/*
objectToArray({
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
})

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]
*/

let objectToTransform00 = {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
};

let objectToTransform01 = {
	name: 'Ivan',
};
console.log(objectToTransform00);

function objectToArray(objectToTransform) {
	let arrayTmp = [];
	for(let property in objectToTransform) {
		if (
			typeof objectToTransform[property] === 'object' && !Array.isArray(objectToTransform[property]) && objectToTransform[property] !== null
		) {			
			arrayTmp[property] = [];
			fillSubArrayRecursive(arrayTmp[property], objectToTransform[property]);
		} else {
			arrayTmp[property] = objectToTransform[property];
		}
	}
	return arrayTmp;
}

function fillSubArrayRecursive(arrayToFill, objectPropertySource){
	for(let property in objectPropertySource) {
		if (
			typeof objectPropertySource[property] === 'object' && !Array.isArray(objectPropertySource[property]) && objectPropertySource[property] !== null
		) {			
			arrayToFill[property] = [];
			fillSubArrayRecursive(arrayToFill[objectPropertySource[property]], objectPropertySource[property]);
		} else {
			arrayToFill[property] = objectPropertySource[property];
		}
	}
}
let arrayToCreate = objectToArray(objectToTransform00);

console.log(arrayToCreate);