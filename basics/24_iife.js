// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named iife
    console.log(`DB CONNECTED`);
    
})();  //if 2 iife in same file we've to use ';', to stop the context

//second () is function call, first () is fn defn 

((name) => {

    console.log(`DB CONNECTED TWO ${name}`);
    
})('arijit')
