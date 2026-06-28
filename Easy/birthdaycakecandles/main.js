/*
    1. buat variabel awal untuk perbandingan
    2. loop 1 untuk cari nilai max
    3. loop 2 untuk membandingkan array dengan nilai max
*/

const candles = [1,3,4,4]

const birthdayCakeCandles = (candles) => {
    let count = 0 
    let max = candles[0]

    for(let i = 0; i < candles.length; i++) {
        if(candles[i] > max) max = candles[i]
    }

    for(let i = 0; i < candles.length; i++) {
        if(candles[i] == max) {
            count++
        } 
    }

    return count
}

console.log(birthdayCakeCandles(candles))

