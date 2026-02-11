document.write(`<h1>랜덤 이미지 출력</h1>`)
let ranImgNum = Math.random() * 7 + 1
let floorImgNum = Math.floor(ranImgNum)
document.write(`<img src="../img/imgi_9${floorImgNum}_2025_winter2_top_drink0${floorImgNum}_251126.png" alt">`)