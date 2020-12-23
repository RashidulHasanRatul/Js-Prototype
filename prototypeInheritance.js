
function Person(name,age) {

    
    this.name=name;
    this.age=age;
   
    
}

Person.prototype = {

    eat:function () {
        console.log(`${this.name} is eating`);
    },

}

let Ratul = new Person("Ratul",22);

console.log(Ratul);


let RH = new Person("Rh",11);

console.log(RH);

// Prototype Inheritance

function person2(name,age) {  // Parent Class
    this.name=name;
    this.age=age;
}

function cricketers(name,age,type,country) { // Sub class 
    person2.call(this); // in class this called super();
    this.name=name;
    this.age=age;
    this.type = type;
    this.country=country;
}
person2.prototype = {
   eat : function (){
       console.log(`${this.name} is eating`);
   }
}

cricketers.prototype = Object.create(person2.prototype);
cricketers.prototype.constructor = cricketers;

let sakib = new cricketers("Sakib",45,"alrounder","Bangladesh");
console.log(sakib);
sakib.eat();

