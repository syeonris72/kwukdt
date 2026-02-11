theFood = ["짜장면", "냉면", "갈비탕", "돈까스", "삼겹살"]
theFood.reverse()
console.log(theFood)

let theSubway = ["2호선", "9호선", "7호선", "5호선", "6호선", "1호선"]
theSubway.sort()
console.log(theSubway)

const newLine1 = "신분당선"
const newLine2 = "우이신설선"

theSubway.shift()
console.log(theSubway)

theSubway.pop()
console.log(theSubway)

theSubway.unshift(newLine1)
theSubway.push(newLine2)
console.log(theSubway)

let Mountain1 = ["백두산", "청계산", "한라산", "광교산", "설악산"]
let Mountain2 = ["지리산", "남산", "북한산", "불암산", "관악산"]
let joinResult = Mountain1.concat(Mountain2)
console.log(joinResult)

const numbers = [10, 2, 30, 5, 1]
numbers.sort((a, b) => a - b)
console.log(numbers)
numbers.sort((a, b) => b - a)
console.log(numbers)

const userName = ["권덕윤", "김세호", "박은비", "장수연", "장하준", "전지혜"]
result = userName.slice(0,3)
console.log(result)

let theProduct = ["냉장고", "컴퓨터", "선풍기", "밥솥", "핸드폰"]
joinProduct = theProduct.join("-")
console.log(joinProduct)