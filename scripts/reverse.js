function reverse(str){
    let n=str.length;
    if(str==""){
        return "";
    }
    return str.charAt(n-1)+reverse(str.slice(0,n-1));
}
module.exports=reverse;