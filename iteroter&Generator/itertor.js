const arr = [10,20,54,30,89,78];

//Using itertor we can loop through the array. every array have prototype Symbol.iterot function
//usinf next method we go to next element
//itertoe return the object value and done keys 
//if value is undefine and done is true means array is ended
const iterotor = arr[Symbol.iterator]();

console.log(iterotor.next())
console.log(iterotor.next())
console.log(iterotor.next())
console.log(iterotor.next())
console.log(iterotor.next())
console.log(iterotor.next())
console.log(iterotor.next())
console.log(iterotor.next())