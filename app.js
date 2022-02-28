// Create a class called pokemon with a constructer that takes in a name, type, and attack
// Create a method for this class that console logs that the pokemon used its attack ex: "Pickachu, used Thunderbolt"
// Instantiate 2 new pokemon then use the attack method for both of them.
// You can upload a zip file of this code or push it to a github repo


class Pokemon {
    constructor (name, type, attack){
        this.name = name,
        this.type = type,
        this.attack = attack
    }
    attackUsed = () =>{
    return this.name + ", used " + this.attack
}
}


const pickachu = new Pokemon("Pickachu", "electric", "Thunderbolt");
const snorlax = new Pokemon("Charizard", "fire", "blaze");

console.log(pickachu.attackUsed());
console.log(snorlax.attackUsed());