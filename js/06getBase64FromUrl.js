//6\. Написать метод getBase64FromUrl, который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

/*
getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
 .then(console.log)
 .catch(console.error)

// Output
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d...
*/

function getBase64FromUrl(urlOfImage) {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', urlOfImage, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                let error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        }
        xhr.send();
    });	  
}


let urlToGet = 'http://localhost/unnamed.png1';
let urlToGet1 = 'https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8';

getBase64FromUrl(urlToGet)
    .then(
        response => console.log(`${response}`),
        error => console.log(`Rejected: ${error}`)
    );
