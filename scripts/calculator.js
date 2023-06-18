// module
const calculator=(()=>{
    const add=(a,b)=>{
        return a+b;
    }
    const subtract=(a,b)=>{
        return a-b;
    }
    const multiply=(a,b)=>{
        return a*b;
    }
    const divide=(a,b)=>{
        if(b==0){
            throw new Error("Division by zero not")
        }
        return a/b;
    }
    return {add,subtract,multiply,divide};
})(); 



module.exports=calculator;


