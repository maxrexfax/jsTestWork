//8\. Напишите функцию nodeChildCount которая получает на вход 
//объект типа [Node](https://developer.mozilla.org/ru/docs/Web/API/Node) 
//и возвращает число всех вложенных нодов, 
//аргумент deep указывать глубину подсчета если не указан то бесконечно.

//Пример:

/*
const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')
p.appendChild(span)
div.appendChild(p)

nodeChildCount(div) // 2
nodeChildCount(div, 1) // 1
nodeChildCount(div, 2) // 2
*/
window.onload = function() {
    const div = document.createElement('div')
    const p = document.createElement('p');
    const span = document.createElement('span');
    p.appendChild(span);
    div.appendChild(p);
    p.appendChild(span);
    document.getElementById('testing').appendChild(div);
    let numberOfChildren = nodeChildCount(div, 1);
    console.log("numberOfChildren:" + numberOfChildren);
}

var countOfChildren = 0;

function nodeChildCount(elementToCheck, depthOfCheck = 0) {
    let step = 1;
    let counterOfSteps = depthOfCheck - 1;


    var arrayOfCurrentLevelChildren = [];
    countOfChildren += elementToCheck.childElementCount;
    arrayOfCurrentLevelChildren = elementToCheck.children;
    while (counterOfSteps > 0) {
        if (depthOfCheck != 0) {
            counterOfSteps -= step;
        }
        arrayOfCurrentLevelChildren = getCountOfAllChilds(arrayOfCurrentLevelChildren);
    }
    return countOfChildren;
}

function getCountOfAllChilds(elementsList) {
    let tmpArrayOfChildElements = []; //array with childrens of elementsList
    for (let i = 0; i < elementsList.length; i++) {
        countOfChildren += parseInt(elementsList[i].childElementCount, 10);
        for (let j = 0; j < elementsList[i].childElementCount; j++) {
            tmpArrayOfChildElements.push(elementsList[i].childElementCount[j]);
        }

    }
    return tmpArrayOfChildElements;
}