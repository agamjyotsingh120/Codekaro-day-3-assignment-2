const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];


let showname= document.querySelector("#display");
let hide=document.getElementById("btn-any");
let random_index=Math.floor(Math.random()*(names.length));

//funtion Used to Generate a Random Nmae at Beginning.
function randomName(){
    random_index=Math.floor(Math.random()*(names.length));
    let rname= names[random_index];
    showname.innerText=rname;
    hide.style.display="none";
    return rname;
}

let nextName=document.getElementById('btn-nxt');

//function used For 'Next' Button.
function nxtName(){
    random_index += 1;
    if(random_index<((names.length))){
        showname.innerText=names[random_index];
        return random_index;
    }
    else if(random_index>(names.length -1)){
        random_index=-1;
    }
}

//function used For 'Previous' Button.
function prevName(){
    random_index -= 1;
    if(random_index>=0){
        showname.innerText=names[random_index];
        return random_index;
    }
    else if(random_index<0){
        random_index=(names.length);
    }
}