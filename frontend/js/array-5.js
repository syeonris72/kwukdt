let myLotto = []
let aryLotto = []

for (let i = 1; i < 46; i++){
    aryLotto.push(i)
}
while (myLotto.length < 6){
    let randomIdx = Math.floor(Math.random() * aryLotto.length)
    myLotto.push(aryLotto[randomIdx])
    let pickedNum = aryLotto.splice(randomIdx, 1)
}
console.log(`로또 번호: ${myLotto}`)

/* Lodash 라이브러리 활용
let aryLotto = _.range(1, 46)
let myLotto = _.sampleSize(aryLotto, 6)
console.log(`로또 번호: ${myLotto.join(', ')}`)
*/