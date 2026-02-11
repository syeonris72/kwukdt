let coupon = parseInt(prompt("쿠폰 개수를 입력하세요!"))
coupon = Math.floor(coupon/10)
switch (coupon) {
    case 2:
        document.write("여행 가방 증정")
        break
    case 1:
        document.write("다이어리 증정")
        break
    default:
        document.write("커피 쿠폰 증정")
}