// Fonction pour trier les nombres
function sortNumbers(tInit, tInf, tSup) {
    for (let i = 0; i < tInit.length; i++) {
    if (tInit[i] < 10) {
    tInf.push(tInit[i]);
    } else {
    tSup.push(tInit[i]);
    }
    }
   }
   
   // Tableaux pour stocker les nombres
   let tInit = [5, 15, 2, 12, 8, 20,6,9,18,13,1,10,3,4,7,14,16,17,11,19];
   let tInf = [];
   let tSup = [];
   
   // Bouton pour lancer le tri
   document.getElementById("btn-trier").addEventListener("click", function() {
    sortNumbers(tInit, tInf, tSup);
    // Afficher les résultats
    let listeInf = document.getElementById("t-inf");
    let listeSup = document.getElementById("t-sup");
    listeInf.innerHTML = "";
    listeSup.innerHTML = "";
    for (let i = 0; i < tInf.length; i++) {
    let element = document.createElement("li");
    element.textContent = tInf[i];
    listeInf.appendChild(element);
    }
    for (let i = 0; i < tSup.length; i++) {
    let element = document.createElement("li");
    element.textContent = tSup[i];
    listeSup.appendChild(element);
    }
   });
   