//9\. Создайте прототип, который удаляет дубликаты из строки. Пример:

/*
let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
x.removeDuplicate() 
// Int32 Double
*/

let x = new Object();
x.__proto__.removeDuplicate = removeDuplicate;
x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

function removeDuplicate() {
    let stringToCheck = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
    let tmpArray = stringToCheck.split(" ");
    var uniqueArray = tmpArray.filter(onlyUnique);
    let resultString = uniqueArray.join(' ');
    console.log("resultString:" + resultString);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
x.removeDuplicate();