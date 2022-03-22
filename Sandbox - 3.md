**=== Linux ===**

**Файловая структура**

```
/
--/var/
----/www/
------/html/
--------/index.html
--------/404.html
--------/logs
----------/error.txt
----------/access.txt
--------/images
----------/icon.png
----------/cat.jpg
----------/dog.jpg
--------/.htaccess
```

**Задание**

Напишите набор команд с комментарием их работы которые вы примените для решения следующих задач:

1. Перейдите в папку html и выведите список всех папок (без файлов)
2. Объедините все файлы с расширением .txt в один /all.txt
3. Удалите пустые строки из файла error.txt
4. Выведите список файлов с расширением .jpg в папке images
5. Удалите все содержимое в файле access.txt не удаляя сам файл
6. Выведите список файлов в папке images размер которых более 2 мегабайт

**=== GIT ===**

**Рабочее окружение**

Вы закончили работу над задачей для клиента и у вас есть рабочий код, который был создан без использования git. Клиент создал пустой репозиторий [git@example.com](mailto:git@example.com):example/test.git и расшалил для вас доступ.

**Задание**

Опишите ваши дальнейшие действия что бы ваш код появился в ветке master в репозитории [git@example.com](mailto:git@example.com):example/test.git

**=== CSS, HTML ===**

**Задание**

1\. Создайте такой Layout используя **Flexbox**

<https://cloud.devit-team.com/s/z9BbyZbeSR97Bfg>

2\. Создайте анимацию "Квадрат по центру окна, вращается вокруг своей оси и меняет цвет с красного на оранжевый, затем на зеленый"

**=== JS логика ===**

Задание

1\. Напишите функцию deepEqual для проверки двух обьектов на идентичность. Пример:

```
deepEqual({name: 'test'}, {name: 'test'}) // output true
deepEqual({name: 'test'}, {name: 'test1'}) // output false
deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
deepEqual({name: 'test'}, {name: 'test', age: 10}) // false
```

2\. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.

Пример:

```
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
iterator.next() // { value: [1,2,3], done: false }
iterator.next() // { value: [4,5,6], done: false }
iterator.next() // { value: [7,8], done: false }
iterator.next() // { value: undefined, done: true }
```

3\. Напишите функцию обертку, которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения. Количество аргументов исполняемой функции **не ограничено**!

Пример:

```
const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

bulkRun(
  [
    [f1, []],
    [f2, [2]]
    [f3, [3, 4]]
  ]
).then(console.log)
 // Output: [1, 2, [3, 4]]
```

4\. Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение, после чего все нечетные значения в матрице будет умножать на это число.

Исходная матрица:

```
[
 [5, 3, 6], 
 [7, 11, 2],
 [15, 9, 4]
]
```

Результат выполнения функции:

```
[
 [10, 6, 6],
 [14, 22, 2],
 [30, 18, 4]
]
```

5\. Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию). Пример:

```
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
```

6\. Написать метод getBase64FromUrl, который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

```
getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
 .then(console.log)
 .catch(console.error)

// Output
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d...
```

7\. Написать обратный метод (см. задачу 5) objectToArray, который из объекта создаст массив. Пример:

```
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
```

8\. Напишите функцию nodeChildCount которая получает на вход объект типа [Node](https://developer.mozilla.org/ru/docs/Web/API/Node) и возвращает число всех вложенных нодов, аргумент deep указывать глубину подсчета если не указан то бесконечно.

Пример:

```
const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')
p.appendChild(span)
div.appendChild(p)

nodeChildCount(div) // 2
nodeChildCount(div, 1) // 1
nodeChildCount(div, 2) // 2
```

\
9\. Создайте прототип, который удаляет дубликаты из строки. Пример:

```
let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
x.removeDuplicate() 
// Int32 Double
```

10\. Есть функция primitiveMultiply, которая умножает числа, но случайным образом может выбрасывать исключения типа: NotificationException, ErrorException. Задача написать функцию обертку которая будет повторять вычисление при исключении NotificationException, но прекращать работу при исключениях ErrorException

Пример:

```
function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
  // Ваш код
}

console.log(reliableMultiply(8, 8));
```