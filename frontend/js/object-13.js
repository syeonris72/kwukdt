let userEmail = prompt("이메일을 입력해주세요.")
let emailRegex = /^[a-zA-Z0-9.%+-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z]{2,}$/
if (emailRegex.test(userEmail)){
    console.log("올바른 이메일 형식입니다.")
}
else{
    alert("이메일 형식이 유효하지 않습니다.")
}

const phoneNum = "010-1234-5678"
console.log(phoneNum.replace(/-/g, ""))