
export const formatValues=(value:number | string):string|number=>{
    const num = typeof value === 'string' ? parseFloat(value) : value;

    if (!value) {
    return 0;
  }
  if(isNaN(num)){
    return value;
  }
  
    if(num>=1000000000){
        return (num/1000000000).toFixed(1)+ "B";
    }else if (num>=1000000){
return (num/1000000).toFixed(1)+ "M";
    }
    else if(num>=1000){
    return (num/1000).toFixed(1)+ "K"; 
    }else{
        return num;
        }
}