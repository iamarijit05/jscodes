//array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktimaan", "naagraaj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// array methods

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9) // used to add 9 at 0th pos (bekaar method)
console.log(myArr)

myArr.shift()
console.log(myArr)   


console.log(myArr.includes(9))
console.log(myArr.indexOf(3))


const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr);  

//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);