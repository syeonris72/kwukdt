let email = prompt("이메일 주소를 입력해주세요.")
if ((email.indexOf("@") !== -1) && (email.indexOf(".") !== -1)){
    document.write(`당신의 이메일 주소는 ${email}입니다.`);
}
else{
    alert(`다시 입력해주세요!`);
}
/* 다른 방식
let email = prompt("이메일 주소를 입력해주세요.")
if ((email.indexOf("@") 
=== -1) || (email.indexOf(".") 
=== -1)){
    alert(`다시 입력해주세요!`);
}
else{
    document.write(`당신의 이메일 주소는 ${email}입니다.`);
}
*/