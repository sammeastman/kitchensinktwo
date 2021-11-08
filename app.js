const stateCount = 50;
let firstName = 'Sam'; // It is I!

let veggies = ['Brocolli', 'Mushrooms', 'Green Beans', 'Caulliflour', 'Onions'];

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i])
    
}

function yeet() {
    alert("Pay Attention!")
}

//
let val1 = 5;
let val2 = 4;
let a = val1 + val2;
let result = 5 + 4; // another sum

//console.log(a);



//checkAge();

function checkAge(name, age) {
   if (age < 21) {
       alert("Sorry " + name + ", you aren't old enough to view this page!")
   }
}

//checkAge("Sam", 27)
//checkAge("Carlie", 25)
//checkAge("Hadlee", 6)

function congrats(name, age) {
    if (age > 21) {
        alert("Congratulations " + name + ", we are honored to have you on our site.")
    }
}

congrats("Mister President", 99)

let pet = {
    name: "Pappy",
    breed: "Beautiful"
};

//console.log(pet.name, pet.breed)