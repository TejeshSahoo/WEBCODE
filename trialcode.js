const calculator=(function(){
    const add=(a,b)=>a+b;
    const sub=(a,b)=>a-b;
    const mul=(a,b)=>a*b;
    const div=(a,b)=>a/b;
    return {add,sub,mul,div};
})
console.log(calculator.add(5,4));
console.log(calculator.mul(4,3)+calculator.div(4,2))