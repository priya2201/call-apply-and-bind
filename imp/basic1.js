let name = {
    firstname: 'pia',
    lastname: 'murpani',
    age: 21,
    city:'mumbai' ,
       getFullname: function () {
        console.log(this.firstname + " " + this.lastname)
    }
}
name.getFullname();


//let arr=[1,2,3,4];
let name2 = {
    firstname: 'vinit',
    lastname: 'nair',
    age: 21,
    city:'delhi',}

name.getFullname.call(name2);


let age = function () {
    console.log(this.age + " years old")
}
age.call(name);
age.call(name2);

let getFullinfo = function (hometown) {
    console.log(this.firstname + " " + this.lastname + " " + "from " + hometown);


}
getFullinfo.call(name, "gujarat");
getFullinfo.call(name2, "gujarat");

//apply
getFullinfo.apply(name, ["gujarat"]);


//bind
//returns a copy of the object
let PrintMyName = getFullinfo.bind(name, "mumbai");
console.log(PrintMyName);
PrintMyName();

let city=function(){
    console.log(this.city+" is where they stay " +  this.firstname)
}

city.call(name);
city.call(name2);


let givingdetails=function(education){
    console.log(this.firstname+ " " + this.lastname + " is having age " + this.age + " and staying in " + this.city + education) 
}

givingdetails.call(name2," mumbai university")
givingdetails.apply(name,[" hawkard university"])

let givingactualDetails=givingdetails.bind(name," Hsnc University ");
console.log(givingactualDetails);
givingactualDetails();






