//We know that 'let' variable creates a block scope.
//Hence, for each iteration in the 'for' loop, a new block scope is created due to the presence of 'let' and the value of 'i' is unique for each iteration.
//Now, when the cb function of setTimeout() web API is invoked, the JS engine looks for the value of 'i' in its execution context. Since the value of 'i' is not there, the JS engine will look for the value of 'i' in its lexical scope chain.
//The immediate lexical scope of the cb is the block scope created by the 'let' variable in that particular iteration, and the JS engine finds the value of 'i' and hence logs the value of 'i' on the console.
//Similarly, the other cb functions of setTimeout() web API get executed in this fashion.
for (let j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 0);
}

/*
We know that 'let' variable creates a block scope.
If you look at the code, the 'let' variable is created before the 'for' loop. This means that there is no new block scope created for every iteration. But this block scope is common for the entire 'for' loop.
Now, when the cb function of setTimeout() web API is invoked, the JS engine looks for the value of 'i' in its execution context. Since the value of 'i' is not there, the JS engine will look for the value of 'i' in its lexical scope chain.
The immediate lexical scope of the cb is the block scope created by the 'let' variable outside the 'for' loop, and the JS engine finds the value of 'i' (which is 5 because the 'for' loop has ended) and hence logs the value of 'i' on the console.
Similarly, the other cb functions of setTimeout() web API get executed in this fashion.
*/
let j=0;
for (j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 0);
}

/*
We know that 'var' variable is function or globally scoped. In this case, since we haven't used a function, it is globally scoped.
Because of the 'var' variable, there is no new scope created in each iteration.
Now, when the cb function of setTimeout() web API is invoked, the JS engine looks for the value of 'i' in its execution context. Since the value of 'i' is not there, the JS engine will look for the value of 'i' in its lexical scope chain.
The immediate lexical scope of the cb is the global scope created by the 'var' variable, and the JS engine finds the value of 'i' (which is 5 because the 'for' loop has ended) and hence logs the value of 'i' on the console.
Similarly, the other cb functions of setTimeout() web API get executed in this fashion.
*/
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

var i=0;
for (i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);
}

