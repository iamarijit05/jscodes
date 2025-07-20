const user = {
    username: "arijit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
/*user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()*/

//console.log(this);

/* function chai() {
    let username = "arijit"
    console.log(this.username)
}
chai() */

/* const chai = function() {
    let username = "arijit"
    console.log(this.username )
}
//chai() */

/* const chai = () => {
    let username = "arijit"
    console.log(this.username);
    
}
chai() */

/* const addTwo = (num1,num2) => {
    return num1+num2
} */
//if we use curly braces we have to use return statement, if we don't, then no need of using c braces



//implicit return

//const addTwo = (num1,num2) => num1+num2 //
//const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"arijit"}) //if taking obj we've to use c braces
console.log(addTwo(3,4));

