getUniqueID= ()=>{
    code = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    code1 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    code2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return code + code1 + '-' + code2
}

console.log(getUniqueID());

const matric = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
console.log(matric);

function makeid(length) {
    code2 = Math.floor((1 + Math.random()) * 0x1000).toString().substring(1);
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      console.log(result);
   }
   return result + code2;
}
//get six digit ID with 3 char and 3 num
getUniqueID= ()=>{
    num = Math.floor((1 + Math.random()) * 0x1000).toString().substring(1);
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i <=3; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result + num;
}
//end of unique id

console.log("uniqueID", getUniqueID());

code3 = Math.floor((1 + Math.random()) * 0x1000).toString().substring(1);
console.log(code3);

console.log("MAKE ID");
console.log(makeid(3));