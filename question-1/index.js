/*
Question 1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
*/

const mixedArray = ['PIZZA',10,true,25,false,'Wings']


function lowerCaseWords(theArray){
    let p1 = new Promise((resolve, reject) => {
        if(1 == 1){
            newArray = theArray.filter(item => typeof item == "string");
            newArray = newArray.map(newArray => newArray.toLowerCase());
            resolve(newArray)
        }else{
            reject("--- ERRORS ---")
        }        
    })

    return p1
}

lowerCaseWords(mixedArray).then(
       success => console.log(success),
        error => console.log(error)    
)