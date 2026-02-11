let coupon = parseInt(prompt("별다방 쿠폰 개수를 입력하세요.", "15"))
if (coupon >= 20) {
    console.log("여행용 가방 증정")
}
else if (coupon < 20 && coupon >= 10) {
    console.log("다이어리 증정")
}
else {
    console.log("커피 쿠폰 증정")
}