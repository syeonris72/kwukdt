let money = [100, 100, 200, 50]
let total = 0
for (let i = 0; i < money.length; i++) {
    total += money[i]
    document.write(`${money[i]}만 원이 입금되었습니다.<br>`)
}
document.write(`현재 잔액: ${total}만 원`)

/* ES6문법
for (let i of money) {
    total += i
    document.write(`${money[i]}만 원이 입금되었습니다.<br>`)
}
*/