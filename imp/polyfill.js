let name={
    firstname:'pia',
    lastname:'duseja'
}
let printName=function(hometown,state,country,favplace){
    console.log(this.firstname + " " + this.lastname + " ," + hometown + " ," + state + " ," + country + "," + favplace);
}
let printMyName =printName.bind(name,'mumbai','maharashtra','India');

printMyName('dubai');

Function.prototype.mybind =function(...args){
    let obj=this;
    params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }

   
}



let printMyname2=printName.mybind(name,'delhi','up','India');
printMyname2('switzerland');


Function.prototype.mybind1=function(){
    let obj=this;
    return function(){
        obj.apply(args[0]);
    }
}

let printMyName3=printName.bind(name)
printMyName3();

