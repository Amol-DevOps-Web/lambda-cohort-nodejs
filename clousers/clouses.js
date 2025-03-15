function outerFunction() {
    let i = 0; 
    function innserProcess() {
        i += 1;
        return  i;
    }
    return innserProcess;
}

const innserProcess = outerFunction();
console.log(innserProcess())
console.log(innserProcess())
console.log(innserProcess())