let myArea = parseInt(prompt("지역 번호를 입력하세요!"))
switch (myArea) {
    case 02:
        document.write("서울")
        break
    case 031:
        document.write("경기도")
        break
    case 051:
        document.write("부산")
        break
    default:
        document.write("등록되지 않은 지역입니다.")
}