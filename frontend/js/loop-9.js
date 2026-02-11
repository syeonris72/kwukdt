for (let num1 = 1; num1 <= 9; num1++){
    document.write(`<h2>${num1}단</h2>`)
    for (let num2 = 1; num2 < 10; num2++){
        document.write(`${num1}X${num2}=${num1*num2}<br>`)
    }
}