let str = "Hello";
let count = {};
for(let i = 0; i < str.length; i++){
    if(count[str[i]]){
        count[str[i]]=count[str[i]]+1 
    }else{
        count[str[i]] = 1 
    }
}

for(let key in count ){
    console.log(`${key} - ${count[key]}`);
}
