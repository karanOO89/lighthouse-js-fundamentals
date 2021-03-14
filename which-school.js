/*let age=0;

function whichSchool(age){
if (age<13){
console.log("Elementary School");
}
else if (age>=13 || age<=18 ){
console.log("Secondary School");
}

else{
console.log("Lighthouse Labs");
}

}

whichSchool(5);*/
let school;
let age=0;
const whichSchool=function (age) {
if (age<13){
school="Elementary School";

}
else if (age>=13 && age<=18 ){
school="Secondary School";
}
else{
school="Lighthouse Labs";
}
console.log("I am "+age+". Which school should I go to?\n"+school);
}
whichSchool(18);


