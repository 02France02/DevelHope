let primitive = 5;

if(typeof primitive == 'string'){
    console.log("this is a String");
}

else if(typeof primitive == 'number'){
    console.log("This is a Number");
}

else if(typeof primitive == 'boolean'){  //se si vuole eguagliare il typeof con string, boolean o number, si mette tra virgolette. 
    console.log("This is a Boolean");
}

else{
    console.log("This is not studiated yet");
}
