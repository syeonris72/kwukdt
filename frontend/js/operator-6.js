let gender = prompt("성별을 입력하세요.", "여성")
let age = prompt("나이를 입력하세요.", "20")
let isTwentiesWoman = (30 > age && age >= 20) && (gender === "여성")
console.log("20대 여성 여부: ", isTwentiesWoman)