class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentvampire = this;
    while (currentvampire.creator) {
      currentvampire = currentvampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;

  };

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.offspring === null) {
      return false;
    };
    for (let i = 0; i < this.numberOfOffspring; i++) {
      if (vampire.name === this.offspring[i].name) {
        return true;
      }
    }

    return false;
  };


  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    for (const offspring of this.offspring) {
      const vampire = offspring.vampireWithName(name);
      if (vampire) {
        return vampire;
      }
    }

    return null;
  };

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;

    for (const offspring of this.offspring) {
      total += offspring.totalDescendents + 1;
    }

    return total;
  };

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let vampires = [];
    if (this.yearConverted > 1980) {
      vampires.push(this);
    }
    for (const offSpring of this.offspring) {
      vampires = vampires.concat(offSpring.allMillennialVampires);

    }
    return vampires;
  };

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
};

module.exports = Vampire;

