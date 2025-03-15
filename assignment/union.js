 function union (arr1, arr2)  {
    const result = [];
    function addToResult(item) {
        if (!result.some(existingItem => deepEqual(existingItem, item))) {
            result.push(item);
        }
    }
    arr1.forEach(addToResult);
    arr2.forEach(addToResult);
    return result;
}

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
   // console.log(obj1)
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
}

// console.log(union([1, 2, 3], [2, 3, 4]));
// console.log(union(['a'], ['b']));
// console.log(union([1], ['1', 1]));
// console.log(union([{ a: { b: 10 } }], [{ a: { b: 20 } }]));
console.log(union([{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, 2],[{ b: 10, c: { z: { t: 5, _t: 5 }, f: [4] } }, '2']));
