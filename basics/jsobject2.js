//const tinderUser = new Object() //it is a singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Arijit"
tinderUser.isLoggedin = false

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Arijit",
            lastname: "Das"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.firstname)

//console.log(tinderUser);  

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"} 
const obj4 = {5:"a", 6: "b"}

// const obj3 = {obj1, obj2}
//console.log(obj3)

//const obj3 = Object.assign({}, obj1,obj2,obj4)  //here we're specifying target as {}, and source as obj1,2,4
//console.log(obj3);

//spread operator

const obj3 = {...obj1, ...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    }
]

//users[1].email
//console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


