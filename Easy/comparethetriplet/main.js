/*
    1. Butuh input dua array (alice & bob)
    2. Siapin score awal buat keduanya (mulai dari 0)
    3. Cek apakah panjang array sama
    4. Loop, bandingin nilai alice[i] sama bob[i]
    5. Siapa yang lebih gede, dia dapet poin
    6. Return kedua score dalam bentuk array
*/

const alice = [5, 6, 7]
const bob = [3, 6, 10]

const compareScore = (alice,bob) => {
    let aliceScore = 0
    let bobScore = 0

    if (alice.length !== bob.length) {
        return `Array length not same`
    }

    for(let i = 0; i < alice.length; i++) {
        if(alice[i] > bob[i]) {
            aliceScore = aliceScore + 1
        } else if(bob[i] > alice[i]) {
            bobScore = bobScore + 1
        }
    }

    return [aliceScore, bobScore]
}

console.log(compareScore(alice, bob))