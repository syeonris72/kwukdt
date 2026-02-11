const A = 10, B = 20, C = 30, D = 40
let num1 = A > B
let num2 = C >= D

console.log(num1 || num2)
console.log(num1 && num2)
console.log(!num1)

num1 = A >= B
num2 = C <= D
console.log(num1 || num2)
console.log(num1 && num2)
console.log(!num1)

num1 = A <= B
num2 = C < D
console.log(num1 || num2)
console.log(num1 && num2)
console.log(!num1)