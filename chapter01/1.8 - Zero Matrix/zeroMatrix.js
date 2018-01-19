<script>
function zero(matrix) {
	let columns = [];
	let rows = [];
	let zeroMatrix = [];
	
	for (let i=0; i< matrix.length; i++) {
		for (let j=0; j< matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				rows.push(i);
				columns.push(j);
			}
		}
	}
	
	for (let i=0; i< matrix.length; i++) {
		zeroMatrix[i] = [];
		for (let j=0; j< matrix[i].length; j++) {
			if (rows.includes(i) || columns.includes(j)) {
				zeroMatrix[i][j] = 0;
			}
			else {
				zeroMatrix[i][j] = matrix[i][j];
			}
		}
	}
	
	return zeroMatrix;
}

function areEqual(arr1, arr2) {
 	if (arr1.length !== arr2.length) {
 		return false;
 	}
 	
 	for (let i=0; i<arr1.length; i++) {
 		if (arr1[i].length !== arr2[i].length) {
 			return false;
 		}
 		for (let j=0; j<arr1.length; j++) {
 			if (arr1[i][j] !== arr2[i][j]) {
 				return false;
 			}
 		}
 	}
 	
 	return true;
}

function printMatrix(matrix) {
	console.log('---')
	for (let i=0; i<matrix.length; i++) {
		console.log(matrix[i].join(''));
	}
	console.log('---')
}

console.log(areEqual(
					zero([[1,0,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]), 
					[[0,0,0,0],[2,0,2,2],[3,0,3,3],[4,0,4,4]])
			);
console.log(areEqual(
					zero([[8,0,1,0],[1,2,2,6],[9,7,3,3],[9,1,4,9]]), 
					[[0,0,0,0],[1,0,2,0],[9,0,3,0],[9,0,4,0]])
			);

</script>
