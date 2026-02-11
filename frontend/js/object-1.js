document.write("<h1>현재 날짜/시간 정보</h1>")
let today = new Date()
console.log(today)
let nowYear = today.getFullYear()
document.write(`${nowYear}년 `)
let nowMonth = today.getMonth()
document.write(`${nowMonth+1}월 `)
let nowDate = today.getDate()
document.write(`${nowDate}일 `)
let nowDay = today.getDay()
switch (nowDay) {
    case 0:
        tDay = "일"
        break
    case 1:
        tDay = "월"
        break
    case 2:
        tDay = "화"
        break
    case 3:
        tDay = "수"
        break
    case 4:
        tDay = "목"
        break
    case 5:
        tDay = "금"
        break
    case 6:
        tDay = "토"
        break
    default:
        alert("해당하는 요일이 없습니다.")
}
document.write(`${tDay}요일 / `)
let nowHours = today.getHours()
document.write(`${nowHours}시 `)
let nowMinutes = today.getMinutes()
document.write(`${nowMinutes}분 `)
let nowSeconds = today.getSeconds()
document.write(`${nowSeconds}초`)