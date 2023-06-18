function upperCaseChar(shiftedChar){
    let ch='';
    if(shiftedChar<=90)
        ch= String.fromCharCode(shiftedChar);
    else 
        ch = String.fromCharCode(shiftedChar-26);
    return ch;
}
function lowerCaseChar(shiftedChar){
    let ch='';
    if(shiftedChar<=122)
        ch= String.fromCharCode(shiftedChar);
    else 
        ch = String.fromCharCode(shiftedChar-26);
    return ch;
}
function checkPunctuation(ch){
    //return true if punctuation or whitespace present
    let pattern = /[^\w]+/g;
    return(pattern.test(ch));
}

function caesar(str,shift){
    let newStr="";
    for(let i=0;i<str.length;i++){
        let ch = str.charAt(i);
        if(!checkPunctuation(ch)){
            let shiftedChar = (ch.charCodeAt(0)+shift);
            if(ch == ch.toUpperCase()){
                ch=upperCaseChar(shiftedChar);
            }
            else{
              ch=lowerCaseChar(shiftedChar);
            }
        }
        newStr+=ch;
    }
    return newStr;
}

module.exports=caesar;