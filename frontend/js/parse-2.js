let korNum = Number(prompt("국어 점수를 입력하세요.", "100"))
let engNum = Number(prompt("영어 점수를 입력하세요.", "100"))
let mathNum = Number(prompt("수학 점수를 입력하세요.", "100"))

let avg = (korNum + engNum + mathNum) / 3
let isPass = (avg >= 70) && (korNum >= 60) && (engNum >= 60) && (mathNum >= 60)

console.log(`합격 결과: ${isPass}`)