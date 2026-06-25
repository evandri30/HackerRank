/*
    1. Buat variabel untuk menghitung index
    2. loop index berdasarkan jumlah array
    3. array pertama akan meloop setiap array
    4. array kedua untuk ambil indexnya
    5. gunakan abs untuk hitungan mutlak
*/



const arr = [[11,2,4], [4,5,6], [10,8,-12]]

const diagonalDifference = (arr) => {
    firstIndex = arr[0][0] + arr[1][1] + arr[2][2]
    secondIndex = arr[0][2] + arr[1][1] + arr[2][0]

    return Math.abs(firstIndex - secondIndex)
}

const matrix = (arr) => {
    let firstIndex = 0
    let secondIndex = 0

    for(let i = 0; i < arr.length; i++) {
        firstIndex += arr[i][i]
        secondIndex += arr[i][arr.length - (i + 1)]
    }

    return Math.abs(firstIndex - secondIndex)
}


console.log(diagonalDifference(arr))
console.log(matrix(arr))

