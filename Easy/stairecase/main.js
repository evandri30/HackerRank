/*
    1. Loop sesuai dengan input
    2. pikirin spasi dan stairenya
    3. buat spasinya n - i
    4. buat stairenya i
    5. gabungan kedua string
*/


const stairecase = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(' '.repeat(n-i) + '#'.repeat(i))
    }
}

stairecase(6)