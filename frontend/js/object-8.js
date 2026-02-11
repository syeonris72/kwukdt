document.write(`<h3>문자 치환</h3>`)
let theText1 = "prom_on.png"
document.write(`<img src="../img/${theText1}" alt="">`)
theText1 = theText1.replace("on.png", "stop.png")
document.write(`<img src="../img/${theText1}" alt="">`)

document.write(`<h3>문자 추출</h3>`)
let theText2 = "img/img10.jpg"
theText2 = theText2.split("/")[1]
document.write(theText2 + "<br>")
theText2 = theText2.substring(3)
document.write(theText2 + "<br>")
theText2 = parseInt(theText2)
document.write(theText2)

document.write(`<h3>마지막 문자 추출</h3>`)
let theText3 = "hello javascript"
let lastIndex = theText3.length-1
theText3 = theText3.charAt(lastIndex)
document.write(theText3)