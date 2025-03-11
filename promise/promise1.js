function getRandomInt(max){
    return  Math.floor(Math.random() * max);
}

function createPromiseWithTimeOut(){
    console.log("Promise started")
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            let n = getRandomInt(10);
            if( n % 2  === 0 ){
                resolve(n);
            } else {
                reject(n);
            }
        }, 10000)
        console.log("Promise returned");
    })
}

function createPromiseWithLoop(){
    return new Promise(function (resolve, reject){
        for(let i = 1; i <= 10000000; i++){
            let n = getRandomInt(10);
            if( n % 2  === 0 ){
                resolve(n);
            } else {
                reject(n);
            }
        }
    })
}

// let result = createPromiseWithLoop();
// console.log('Promise with loop:' , result)
console.log("Promise called");
let result1 = createPromiseWithTimeOut();
console.log("Waiting for promose and current state of promise is:", result1)
result1.then((result)=>{
    console.log("Promise is Resolve state", result)
},(error)=>{
    console.log('Promise is Rejected state', error)
});
//console.log('Promise with Timeout:' , result1)