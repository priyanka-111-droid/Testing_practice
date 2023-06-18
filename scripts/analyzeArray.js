//factory function
const analyzeArray=(arr)=>{
    if(arr.length==0){
        throw new Error('Array is empty')
    }
    const sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);
    const average = sum/arr.length;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const length = arr.length;
    return {
        average,max,min,length
    }
}
module.exports=analyzeArray;