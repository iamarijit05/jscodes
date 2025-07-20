let a = 300

if(true) {
    let a = 10
    const b = 20
    //console.log(`Inner ${a}`);
    
}
//console.log(a);

function one() {
    const username = "arijit"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}

//one()

if(true) {
    const username = "arijit"
    if(username === "arijit") {
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//++++++++++ interesting ++++++++++++


function addone(num) {
    return num + 1
}

addone(5)
console.log(addone(5));
//method 2
const addTwo = function(num) {
    return num + 2
}
 
addTwo(5)