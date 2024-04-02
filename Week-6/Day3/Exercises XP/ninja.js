class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }
  
  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }
  
  const pet = new Flamingo();
  /** I think 
   "I'm pink. 🌸
   I'm a bird. 🦢"
   */
  console.log(pet);