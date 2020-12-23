
function Person(name,age) {

let person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;
    
    return person;
}

Person.prototype = {
    eat(){
        console.log(`Person is Eating`);
    },
    slep(){
        console.log(`Person is sleping`);
    },
}

let tamim = Person("Tamim",45);
tamim.eat();
console.log(tamim);

// class implement

class persons {
    constructor(name,age){
this.name = name;
this.age = age;
    }

    eat(){
        console.log(`Persons Eat`);
    }

    Sleep(){
        console.log(`Persons Sleep`);
    }
}


let Ratul = new persons("Ratul",22);
Ratul.eat();
console.log(Ratul);

