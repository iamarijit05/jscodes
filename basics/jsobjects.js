//singleton (constructor se banega to singleton banega)

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Arijit",
    "full name": "Arijit Das",
    [mySym]: "mykey1", // symbol is done in sq brackets only,(important for interview perspective only), must jnow how to define...
    age: 22,
    location: "Purulia",
    email: "arijit@gmail.com",
    isLoggedIn: false,
    lastloggedinDays: ["Monday","Sat"]
}
/*
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full name"])
console.log(Jsuser[mySym])
console.log(Jsuser["location"]);
*/
Jsuser.email = "arijit@chatgpt.com"
//Object.freeze(Jsuser)
//console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello JS User");
}

Jsuser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());