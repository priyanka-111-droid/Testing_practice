function capitalize(str){
    if(str==""){
        return 'This is an empty string'
    }
    else if(! str instanceof String){
        throw new Error("Please enter string")
    }
    else{
        let first_letter = str.slice(0,1).toUpperCase();
        return first_letter+str.slice(1);
    }
}
module.exports=capitalize;