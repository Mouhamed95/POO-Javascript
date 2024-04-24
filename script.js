'use strict';



// const Person = function (firstName, birthYear) {
//   //instance Properties
//   this.firstName = firstName
//   this.birthYear = birthYear
// }


// const mouhamed = new Person("Mouhamed", 1995)
// console.log(mouhamed)

// Person.hey = function () {
//   console.log('je suis dev')
// }
// Person.hey()

// // const tapha = new Person('Moustapha', 2004)
// // console.log(tapha)

// // //pour verifie un instance on fait
// // console.log(mouhamed instanceof Person)


// // //1. New {} is create
// // //2. function is called,  this = {}
// // //3. {} linked Prototype
// // //4. function automaticaly return {}


// // //Parlons des prototypes
// // console.log(Person.prototype)

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear)
// // }

// // mouhamed.calcAge()

// // //verification des prototypes
// // console.log(mouhamed.__proto__)


// // console.log(mouhamed.__proto__ === Person.prototype)

// // //il y'a d'autre methode pour la verification de prototype
// // console.log(Person.prototype.isPrototypeOf(mouhamed))

// // console.log(mouhamed.__proto__.__proto__)

// // console.dir(Person.prototype.constructor)



// // Coding Challenge #1

// /* 
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// GOOD LUCK 😀
// */

// // Défi de codage n°1

// /*
// 1. Utilisez une fonction constructeur pour implémenter une voiture. Une voiture a une marque 
// et une propriété de vitesse. La propriété speed est la vitesse actuelle de la voiture en km/h ;
// 2. Implémentez une méthode « d'accélération » qui augmentera la vitesse de la voiture
//  de 10 et enregistrez la nouvelle vitesse sur la console ;
// 3. Implémentez une méthode de « freinage » qui diminuera la vitesse de la voiture
//  de 5 et enregistrez la nouvelle vitesse sur la console ;
// 4. Créez 2 objets de voiture et essayez d'appeler « accélérer »
//  et « freiner » plusieurs fois sur chacun d'eux.

// DONNÉES VOITURE 1 : 'BMW' roule à 120 km/h
// DONNEES VOITURE 2 : « Mercedes » roule à 95 km/h

// BONNE CHANCE 😀
// */


// // const Car = function (marque, speed) {
// //   this.marque = marque
// //   this.speed = speed
// // }


// // const bmw = new Car("BMW", 120)

// // const mercedes = new Car('Mercedes', 95)


// // //impleùentation des deux methodes  acceleration et freinage

// // Car.prototype.acceleration = function () {
// //   this.speed += 10
// //   console.log(`${this.marque} roule a ${this.speed}`)
// // }

// // Car.prototype.freinage = function () {
// //   this.speed -= 5
// //   console.log(`${this.marque} roule a ${this.speed}`)

// // }

// // bmw.acceleration()

// // bmw.acceleration()
// // bmw.freinage()


// //class Expression
// const PersonC = class {

// }




// //class Declaration

class PersonCl {
  constructor(fullName, birthDay) {
    this.fullName = fullName
    this.birthDay = birthDay
  }


  //methode instance de nom
  //methode ajoute a la propriete prototype
  calcAge() {
    console.log(2047 - this.birthDay)
  }

  //static methode
  static hey() {
    console.log("je suis dev ✔")
  }
}



const tapha = new PersonCl('Moustapha', 1995)
tapha.calcAge()

PersonCl.hey()

// //comprendre le getter et le setter pour tout objet normal en javascript 

// const louga = {
//   nom: "Dame",
//   mouvements: [12, 13, 14, 15],


//   get lastet() {
//     return this.mouvements.slice(-1).pop()
//   },

//   set lastet(mov) {
//     this.mouvements.push(mov)
//   }

// }
// //getter
// console.log(louga.lastet)

// //setter

// louga.lastet = 50

// console.log(louga.mouvements)




// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// Défi de codage n°2

/*
1. Recréez le défi 1, mais cette fois en utilisant une classe ES6 ;
2. Ajoutez un getter appelé « speedUS » qui renvoie la vitesse actuelle en
 mi/h (divisée par 1,6) ;
3. Ajoutez un paramètre appelé « speedUS » qui définit la vitesse actuelle 
en mi/h (mais la convertit en km/h avant de stocker la valeur, en multipliant l'entrée par 1,6) ;
4. Créez une nouvelle voiture et expérimentez les méthodes
 d'accélération et de freinage, ainsi qu'avec le getter et le setter.

DONNÉES VOITURE 1 : « Ford » roule à 120 km/h

BONNE CHANCE 😀
*/




//Héritage entre les class et le fonction construction

const Person = function (firstName, birthYear) {
  //instance Properties
  this.firstName = firstName
  this.birthYear = birthYear
}

const moussa = new Person("Moussa", 1995)
console.log(moussa)

// ajout de methode 
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

moussa.calcAge()


//Creation de la function Student





const Student = function (firstName, birthDay, domaine) {

  //pour eviter le code double on peut utiliser le constructeur Person
  Person.call(this, firstName, birthDay)

  // this.firstName = firstName
  // this.birthDay = birthDay
  this.domaine = domaine
}

//le link entre les prototypes
//l'objet prototype etudiant est maintenant un objet qui herite le prototype personne
Student.prototype = Object.create(Person.prototype)


Student.prototype.introduce = function () {
  console.log(`je me nomme ${this.firstName} je suis un ${this.domaine} a IBM`)
}


const dame = new Student('Dame', 1997, "Softwar Ingenieur")


dame.introduce()
dame.calcAge()




// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/



// Défi de codage n°3

/*
1. Utilisez une fonction constructeur pour implémenter une voiture électrique
 (appelée EV) en tant que « classe » de voiture ENFANT. Outre la marque 
 et la vitesse actuelle, le véhicule électrique dispose également de la charge 
 actuelle de la batterie en % (propriété « charge ») ;
2. Implémentez une méthode « chargeBattery » qui prend un argument « chargeTo » 
et définit la charge de la batterie sur « chargeTo » ;
3. Mettez en œuvre une méthode « d'accélération » qui augmentera la vitesse 
de la voiture de 20 et diminuera la charge de 1 %. Enregistrez ensuite
un message comme celui-ci : « Tesla roule à 140 km/h, avec une charge de 22 % » ;
4. Créez un objet de voiture électrique et expérimentez 
en appelant « accélérer », « freiner » et « chargerBattery » (charge à 90 %).
 Remarquez ce qui se passe lorsque vous « accélérez » ! ASTUCE :
  Revoyez la définition du polymorphisme 😉

DONNEES VOITURE 1 : « Tesla » roule à 120 km/h, avec une charge de 23%

BONNE CHANCE 😀
*/


const Car = function (marque, vitesse) {
  this.marque = marque;
  this.vitesse = vitesse;
};

Car.prototype.acceleration = function () {
  this.vitesse += 10
  console.log(`${this.marque} roule a ${this.vitesse}`)
}


Car.prototype.freinage = function () {
  this.vitesse -= 5
  console.log(`${this.marque} roule a ${this.vitesse}`)

}




const EV = function (marque, vitesse, charge) {
  Car.call(this, marque, vitesse)
  this.charge = charge

}


//lier les prototype

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}


//polymorphisme

EV.prototype.acceleration = function () {
  this.vitesse += 20
  this.charge--
  console.log(`${this.marque} roule a ${this.vitesse} kw/h avec un charge de ${this.charge}`)
}


const tesla = new EV('Tesla', 120, 23)

tesla.chargeBattery(90)
console.log(tesla)

tesla.acceleration()




//héritage entre les class 


class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear)
    this.course = course
  }

  calcAge() {
    console.log(2047 - this.birthDay)
  }

  introduc() {
    console.log(`je m'appelle ${this.fullName} et je suis ${this.course}`)
  }
}




const pape = new StudentCl('Pape', 2004, "player")

pape.calcAge()
pape.introduc()





//heritage entre les classes et Object.create()

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto)

StudentProto.init = function (firstName, birthDay, course) {
  PersonProto.init.call(this, firstName, birthDay)
  this.course = course
}

StudentProto.introduce = function () {
  console.log(`je m'appelle ${this.firstName} et je suis ${this.course}`)
}




const baye = Object.create(StudentProto)
baye.init('Baye', 2018, "Gammer")

baye.introduce()
baye.calcAge()




//Un autre exemple de class

//1) Public Field
//2)  Private Field
//3) Public Methode
//4) Private Methode



class Account {
  //1) Public Field ou Champ public
  local = navigator.language;

  //2) Private Field ou Champ Privée  (disponible sur l'instance et non sur la prototype)
  #mouvements = [];
  #pin;
  constructor(owner, currence, pin) {
    this.owner = owner
    this.currence = currence

    //protection de propriete
    this.#pin = pin
    // this._mouvements = []
    // this.local = navigator.language
    console.log(`Merci pour l'ouverture de ce compte ${owner}`)
  }


  //public Methode
  //public Interface

  getMouvements() {
    return this.#mouvements
  }


  deposit(val) {
    this.#mouvements.push(val)
  }

  withdraw(val) {
    this.deposit(-val)
  }

  // _approveLoan(val) {
  //   return true
  // }

  // faire un pret
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan Approved`)
    }
  }

  //4) Private Methode: C'est pour masquer les implementations de l'exterieur

  #approveLoan(val) {
    return true
  }

}


const acount1 = new Account('Khadija', 'FCFA', 1111)
acount1.deposit(230)
acount1.withdraw(150)
acount1.requestLoan(100)
console.log(acount1)
