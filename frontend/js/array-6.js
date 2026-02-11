const base = [10, 20, 30, 40, 50]
let area = base.map(function(value, index, array){
    return value * 8
})
console.log(area)

const data = ["js", 20, 30, "html", "css", 40]
let num = data.filter(function(value, index){
    return typeof value === "number"
})
console.log(num)

const citys = ["서울", "대구", "대전", "부산"]
for (let value of citys) {
    console.log(value)
}

const numList = [1, 2, 3]
numList.forEach(function(value, index, array){
    console.log(value)
    console.log(index)
    console.log(array)
})