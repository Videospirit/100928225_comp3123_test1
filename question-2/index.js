/*
Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to delayedSuccess and resolves a
message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to delayedException and rejects an
error message after a timeout of 500ms.
o Call both promises separately and handle the resolved and reject results and then output
to the console
*/
const mixedArray = ['PIZZA',10,true,25,false,'Wings']


function rejectedPromise(){
    let p1 = new Promise((resolve, reject) => {
        
        if(1==2){
        setTimeout(()=>{
            let success = {'message': 'delayed success!'}
            resolve(success);
        }, 500)    
        }else{
            setTimeout(() => {
                setTimeout(()=>{
                    try {
                        throw new Error('error: delayed exception!');
                    } catch(e){
                        let error = {'error': 'delayed exception!'}
                        reject(error);
                    }
                },500)
            })
        }        
    })

    p1.then(
        success => console.log(success),
        error => console.log(error)
    )
}

function resolvedPromise(){
    let p1 = new Promise((resolve, reject) => {
        
        if(1==1){
        setTimeout(()=>{
            let success = {'message': 'delayed success!'}
            resolve(success);
        }, 500)    
        }else{
            reject("--- ERRORS ---")
        }        
    })

    p1.then(
        success => console.log(success),
        error => console.log(error)
    )
 
}

resolvedPromise()
rejectedPromise()