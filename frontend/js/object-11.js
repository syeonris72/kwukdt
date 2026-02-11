let userId = prompt(`아이디를 입력하세요.`)
if (userId.length === 0 || userId.charAt(0) === " "){
    alert(`다시 입력해주세요!`)
}
else{
    document.write(`당신의 아이디는 ${userId}입니다.`)
}