class person2   { //Parent Class

    constructor(name,age){

        this.name=name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);   
    }


}

class cricketers extends person2 { // sub class
    
    constructor(name,age,type,country){
        super(name,age);
        this.name=name;
        this.age=age;
        this.type = type;
        this.country=country;
    }
// Polymorphism = parent class er kisu ke modify kora 
   eat(){
       super.eat();
       console.log(`${this.name} eating Rice`);
   }

    
}

let Ratul = new cricketers("Ratul",22,"Batsman","Bangladesh");
console.log(Ratul);
Ratul.eat(); 

// Getter and Setter 
class getter {
    constructor(name){
        this.name=name;
        
    }

// get name
    get getName(){
       return this.name;
    }
// Set name
    set setName(name){
      this.name=name;
    }
}

let R = new getter("Tamim","Batsman");
R.getName = "Mahrafee";
R.setSection = "Bolling";

console.log(R);
console.log(R.name);