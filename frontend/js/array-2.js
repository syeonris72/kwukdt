let theFood = ["짜장면", "냉면", "갈비탕", "돈까스", "삼겹살"]
let FoodNum = Math.floor(Math.random() * 5)
document.write(`오늘 먹을 점심은 ${theFood[FoodNum]}입니다.`)

const days = ["일", "월", "화", "수", "목", "금", "토"]
let today = new Date
document.write(`오늘은 ${days[today.getDay()]}요일`)