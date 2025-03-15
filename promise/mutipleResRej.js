function makePromise(num) {
    return new Promise((res, rej)=>{
        if(num % 2 === 0) {
            res("Even");
            res(num % 2);
        } else {
            res("Odd");
            res(num % 2);
        }
    })
}

makePromise(10).then((result)=>{
    console.log("Resolve promise ans "+ result);
}, (err) => {
    console.log("Reject promise ans "+ err);
})

/*
In a Promise, only the first call to res() or rej() matters — any subsequent calls are ignored. 
In your function
*/