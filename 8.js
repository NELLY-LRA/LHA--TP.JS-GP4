function PUISSANCE(base, exponent) {
    // Cas où l'exposant est 0 : toute base élevée à la puissance 0 vaut 1
    if (exponent === 0) {
        return 1;
    }

    let result = 1;

    // Gestion des exposants négatifs
    const positiveExponent = Math.abs(exponent);

    // Calcul de la puissance avec une boucle
    for (let i = 0; i < positiveExponent; i++) {
        result *= base;
    }

    // Si l'exposant est négatif, on retourne l'inverse du résultat
    return exponent < 0 ? 1 / result : result;
}
