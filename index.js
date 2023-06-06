class Governor {
  static state = "Arizona";
  static termLimit = 4;
  static getTermRemaining(year) {
    const currentYear = new Date().getFullYear();
    const remainingYears = this.termLimit - (year - currentYear);
    return remainingYears > 0 ? remainingYears : 0;
  }
}

console.log(Governor.state); 
console.log(Governor.termLimit); 
console.log(Governor.getTermRemaining(2023)); 
console.log(Governor.getTermRemaining(2027)); 

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old.`);
  }

  greet(person) {
    console.log(`Hello, ${person.name}! Nice to meet you.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

class PostalWorker extends Person {
  deliverMail() {
    console.log(`${this.name} is delivering mail.`);
  }
}

class Chef extends Person {
  cook() {
    console.log(`${this.name} is cooking a delicious meal.`);
  }
}

const postalWorker1 = new PostalWorker("Matt", 40, "Male");
const postalWorker2 = new PostalWorker("Zoe", 20, "Female");

const chef1 = new Chef("Mike", 30, "Male");
const chef2 = new Chef("Beth", 43, "Female");

postalWorker1.introduce(); 
postalWorker2.greet(chef1); 
chef2.sleep(); 
postalWorker1.deliverMail(); 
chef2.cook(); 

