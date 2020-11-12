
// Un prompt s'affiche avec la question suivante
let stage = prompt("Combien d'étage souhaites-tu?");


// Utilisateur rentre un nombre (par ex 4)

for (let i = 1 ; i <= stage ; i++) {
    console.log(' '.repeat(stage-i)+'#'.repeat(i))
  }

