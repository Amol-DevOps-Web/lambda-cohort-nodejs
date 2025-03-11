function timeConsumingByLoop() {
    console.log("loop start...")
    for(let i = 1; i <= 100000000; i++){
        //loop code here
    }
    console.log("loop end...")
}

function timeConsumingByRuntimeFeature0() {
    console.log("start timer 0...")
    setTimeout(function exec() {
        console.log("Completed the task 0");
        for(let i = 1; i <= 100000000; i++){
            //loop code here
        }
    }, 5000);
}

function timeConsumingByRuntimeFeature1() {
    console.log("start timer 1...")
    setTimeout(function exec() {
        console.log("Completed the task 1");
    }, 0);
}

function timeConsumingByRuntimeFeature2() {
    console.log("start timer 2...")
    setTimeout(function exec() {
        console.log("Completed the task 2");
    }, 200);
}

console.log("Hi...");

timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();

console.log("By");