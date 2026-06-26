/*
    1. Kita inisiasi nilai awal
    2. kita jumlahkan total semua sum
    3. lakukan pengecekan dan ambil max dan min dari array
    4. kembalikan array [ sum - max, sum - min]
*/

const arr = [1, 2, 3, 4, 5]

const minimaxsum = (arr) => {
    let sum = 0
    let max = arr[0]
    let min = arr[0]

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (arr[i] < min) min = arr[i]
        if (arr[i] > max) max = arr[i]
    }

    return [sum - max, sum - min]
}

console.log(minimaxsum(arr))