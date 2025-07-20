 console.log(null > 0)
 console.log(null ==0)
 console.log(null >= 0)
  console.log(undefined == 0)
 console.log(undefined > 0)
  console.log(undefined < 0)

// These type of conversions always create confusion, so do avoid these type of conversions

//..................................................


// stack(primitive), heap

let myYoutubeName = "arijitdas.com"
let anothername = myYoutubeName
anothername = "adyoutube"

console.log(myYoutubeName)
console.log(anothername)

let userOne = {
  email: "user@gmail.com",
  upi_id: "arijit@ybl"
}

let usertwo = userOne

usertwo.email = "user2@gmail.com"
console.log(userOne.email)
console.log(usertwo.email)