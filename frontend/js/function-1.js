compute(10, 100)
function compute(a, b) {
    let x = a
    let y = b
    let result = x / y
    console.log(result)
}

const compute2 = function(a, b) {
    let x = a
    let y = b
    let result2 = x * y
    console.log(result2)
}
compute2(0.5, 100);

(function(a){
    let sum = a
    console.log(sum)
})(10);

const instant = (function(){
    console.log("즉시 실행 함수")
})();

function sh(){
    for(i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}
sh('html','css', 'js', 'jquery')

let num1 = 10
function theFnc(num2) {
    let sum = num1 + num2
    let mul = num1 * num2
    return(sum)
}
result = theFnc(40)
console.log(result)

function TheFnc(a, b){
    return a * b
}
console.log(TheFnc(2, 5))

let k = 0
function theTest(){
    k++
    console.log(`안녕하세요 ${k}`)
    if (k < 10) theTest()
}
theTest()