const userName = new Array()
userName[0] ="권덕윤"
userName[1] ="김세호"
userName[2] ="박은비"
userName[3] ="장수연"
userName[4] ="장하준"
userName[5] ="전지혜"
console.log(userName)

let idx = Math.floor(Math.random() * 6)
document.write(`인공지능 조장 : ${userName[idx]} <br>`)