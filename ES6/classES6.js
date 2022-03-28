class Person{
    constructor(name,practice,stack){
        this.name=name;
        this.practice=practice;
        this.stack=stack;
    }
    getName(){
        return this.name;
    }
    getPractice(){
        return this.practice;
    }
    getStack(){
        return this.stack;
    }
}
let empname=new  Person("Sneha Saravanakumar","LAMP","MEAN");
/*let empprac=new  Person("LAMP");
let empstack=new  Person("MEAN");

let ename=empname.getName()+empname.getPractice()+empname.getStack();
let eprac=empprac.getPractice();
let estack=empstack.getStack();
*/
console.log("Employee Name: "+empname.getName());
console.log("Employee Practice: "+empname.getPractice());
console.log("Employee Stack: "+empname.getStack());
console.log("Type of \"Person\":"+typeof Person);
