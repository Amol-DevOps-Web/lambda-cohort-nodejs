function timeConsumingByLoop() {
    console.log("loop start...")
    for(let i = 1; i <= 100000000; i++){
        //loop code here
    }
    console.log("loop end...")
}

function timeConsumingByRuntimeFeature() {
    console.log("start timer...")
    setTimeout(function exec() {
        console.log("Completed the task");
    }, 5000);
}

console.log("Hi...");

timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();

console.log("By");