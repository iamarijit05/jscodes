/*const name = "arijit "
const repoCount = 50
//console.log(name + repoCount + " Value")

console.log(`Hello my Name is ${name} and my repo count is: ${repoCount}`)
*/
const gameName = new String('ariji-tGame')
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) 
console.log(gameName.indexOf('j'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)


const newStringOne = " hitesh "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://arijit.com/arijit%20das"

console.log(url.replace('%20', '-')) //to replace

console.log(url.includes('sundar'))

console.log(gameName.split('-'))
