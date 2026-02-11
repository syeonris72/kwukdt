let email = prompt("이메일을 입력하세요.")
if (email.includes("@") && email.includes(".")) {
    console.log(`확인된 이메일: ${email}`)
}
else{
    alert("이메일 형식이 올바르지 않습니다.")
}

let userId = prompt("아이디를 입력하세요.")
if (!userId || userId.startsWith(" ")) {
    alert("아이디 형식이 올바르지 않습니다.")
}
else{
    console.log(`확인된 아이디: ${userId}`)
}