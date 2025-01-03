//
function istoolong(str) {
    //verifie si la longueur de la chaine depasse 10
if (str.length > 10){
    return "true";
}
else{
    return "false";
}
}
//  resultat true
console.log(istoolong("vrai"));
//resultat false
console.log(istoolong("faux"));