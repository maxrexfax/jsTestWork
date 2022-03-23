//10\. Есть функция primitiveMultiply, которая умножает числа, 
//но случайным образом может выбрасывать исключения типа: 
//NotificationException, ErrorException. 
//Задача написать функцию обертку которая 
//будет повторять вычисление при исключении 
//NotificationException, но прекращать работу 
//при исключениях ErrorException

//Пример:

/*
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
*/

function NotificationException() {}

function ErrorException() {}

function primitiveMultiply(a, b) {
    counter++;
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException("Notif ex message");
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (err) {
        if (err instanceof NotificationException) {
            console.log("NotificationException!");
            return reliableMultiply(a, b);
        }
    }
}

for (let i = 0; i < 10; i++) {
    console.log("Result:" + reliableMultiply(8, 8));
}