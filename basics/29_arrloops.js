//arr specific loops

//for of

const arr = [1,2,3,4,5]
/* for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World!"

for(const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
 */

//maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('UK',"United Kingdom")
map.set('FR',"France")

//console.log(map)

for(const [key, value] of map) {
    console.log(key,':-',value);
}