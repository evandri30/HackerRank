/*
    1. buat variabel penampung masing masing value
    2. loop array input
    3. gunakan kondisi dan increment variabel
    4. bagi hasil increment dengan jumlah array
*/



const arr = [-4, 3, -9, 0, 4, 1]

const plusMinus = (arr) => {
    positiveNumber = 0
    negativeNumber = 0
    zeroNumber = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveNumber++
        } else if(arr[i] < 0) {
            negativeNumber++
        } else {
            zeroNumber++
        }
    } 

    console.log("positive number : ",positiveNumber/arr.length)
    console.log("negative number : ",negativeNumber/arr.length)
    console.log("zero number : ",zeroNumber/arr.length)
}

plusMinus(arr)