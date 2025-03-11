function sum(a) {
    return a + a;
}

function result(cb, a){
    const result = cb(a);
    console.log(result);
}
result(sum, 5)