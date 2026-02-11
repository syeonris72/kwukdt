document.write(`랜덤 로또 번호: `)
for (let i = 0; i < 6; i++){
    let lottoNum = Math.floor(Math.random() * 45 + 1)
    document.write(`${lottoNum} `)
}