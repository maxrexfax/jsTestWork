//2\. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.
// Пример:
//
//     ```
// const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
// iterator.next() // { value: [1,2,3], done: false }
// iterator.next() // { value: [4,5,6], done: false }
// iterator.next() // { value: [7,8], done: false }
// iterator.next() // { value: undefined, done: true }

function* chunkArray(arrayOfValues, step) {
    var index = 0;
    while ((index) < arrayOfValues.length) {
        yield arrayOfValues.slice(index, index + step);
        index += step;
    }
}

const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);

console.log(JSON.stringify(iterator.next()));
console.log(JSON.stringify(iterator.next()));
console.log(JSON.stringify(iterator.next()));
console.log(JSON.stringify(iterator.next()));