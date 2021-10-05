const delayedSucces = () => {
    setTimeout(()=>{
        let success = {'messag': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(()=>{
        setTimeout(()=>{
            try {
                throw new Error('error: delayed exception!');
            } catch(e){
                console.error(e);
            }
        },500)
    })
}

delayedSuccess()
delayedException()