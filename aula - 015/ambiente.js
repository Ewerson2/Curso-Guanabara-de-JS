let num = [2, 5 ,9 ,4, 7]
console.log(num)
/*num.sort()
num.push(1)
num[5] = 6
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) */

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}