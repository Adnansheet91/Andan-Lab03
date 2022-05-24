frequencyCounter = async(data)=>{
    const arr= data.split(" ");
    const result={}
    for(let i =0 ;i <arr.length;i++){
        len= arr[i].length
        if(result.hasOwnProperty(len)){
            result[len]=parseInt(result[len])+1
        }else{
            result[len]=1;
        }
    }
    for (let i=1;i<10;i++){
        if(!result.hasOwnProperty(i)){
            result[i]=0
        }
    }
    return result
}



module.exports = frequencyCounter