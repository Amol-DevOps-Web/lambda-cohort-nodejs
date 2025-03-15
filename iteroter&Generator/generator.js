/**
 * Generator function define with function* keyword
 * Generator function behave different than the regular function. it is stop execution of function whent it  found the first yield,
 * and restart execution from next yield statement. for iterating used the next keyword
 * if we used the retrun keyword in function then stop execution of function like normal function 
 */

function* generatorFunction(value) {
    console.log("Generator function execution started");
    console.log("1st yield");
    yield 10;
    console.log("Yield one is completed and move to next statmenet");
    console.log("2nd yield");
    yield 20;
    console.log("3rd yield");
    yield 30;
    console.log("4th yield");
    const i = 10 + (yield 40);
    console.log("5th yield", i);
    return 50;
    console.log("6th yield");
    yield 60;
}

const iterator = generatorFunction(10);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next(80));
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());