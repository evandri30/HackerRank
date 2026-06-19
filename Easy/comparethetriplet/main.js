const alice = [5, 6, 7]
const bob = [3, 6, 10]

const compareScore = (a,b) => {
    let aliceScore = 0
    let bobScore = 0

    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            aliceScore = aliceScore + 1
            console.log(aliceScore)
        } else if(b[i] > a[i]) {
            bobScore = bobScore + 1
            console.log(bobScore)
        }
    }

    return [aliceScore, bobScore]
}

console.log(compareScore(alice, bob))