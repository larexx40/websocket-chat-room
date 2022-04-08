id=()=>{
    code = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    code1 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    code2 = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

    return code + code1 + '-' + code2
}

console.log(id());