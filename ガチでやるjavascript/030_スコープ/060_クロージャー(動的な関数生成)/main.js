function addNumberFactory(num) {
    function addNumber(value){
        return num * value;
    }
    return addNumber;
}
const add5 = addNumberFactory(5);
const add10 = addNumberFactory(10);
const result1 = add10(10);
const result2 = add5(20);
console.log(result1);
console.log(result2);