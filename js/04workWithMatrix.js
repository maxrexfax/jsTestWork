//4\. Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение, после чего все нечетные значения в матрице будет умножать на это число.
let matrix = [
	[5, 3, 6], 
	[7, 11, 2],
	[15, 9, 4]
   ];

   function workWithMatrix(matrixIn) {
	console.log("matrix before START");   
	console.log(matrixIn);   
	   let minimalValue = matrixIn[0][0];
	   for (let i = 0; i < matrixIn.length; i++) {
			for (let j = 0; j < ( matrixIn[i].length); j++){
				if (minimalValue > matrixIn[i][j]) {
					minimalValue = matrixIn[i][j]; 
				}
			}
	   }

	   console.log("Minimal value in matrix is:" + minimalValue);
	   for (let i = 0; i < matrixIn.length; i++) {
			for (let j = 0; j < ( matrixIn[i].length); j++){
				if ((matrixIn[i][j] % 2) != 0) {
					matrixIn[i][j] *= minimalValue; 
				}
			}
   		}
		console.log("matrix after changes");   
		console.log(matrixIn);   
   }

   workWithMatrix(matrix);