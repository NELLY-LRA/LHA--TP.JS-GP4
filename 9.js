function initXY(startX, startY) {
    const posX = [];
    const posY = [];
    const numberOfObjects = 20;

    for (let i = 0; i < numberOfObjects; i++) {
        posX.push(startX + i * 40); // Espacement de 40 pixels pour l'abscisse
        posY.push(startY + i * 30); // Espacement de 30 pixels pour l'ordonnée
    }

    return { posX, posY };
}

// Exemple d'appel
const result = initXY(100, 50);
console.log("Positions X :", result.posX);
console.log("Positions Y :", result.posY);