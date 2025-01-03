function Afficher() {
    document.getElementById("afficherTableau").innerHTML="";             
    document.getElementById("afficherTableau").innerHTML=RemplirTableau();
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RemplirTableau(){
var dim_tab=document.getElementById("dim_tab").value;
var borne_inf=document.getElementById("borne_inf").value;
var borne_sup=document.getElementById("borne_sup").value;
var res="";
if(isNaN(dim_tab) == true ||  isNaN(borne_inf)==true || isNaN(borne_sup)==true
    || dim_tab == '' ||  borne_inf=='' || borne_sup==''|| borne_inf>=borne_sup)
{
    res="Une faute...";
}
else{
    var T=new Array();
    var Tab2=new Array();
    var nbr=0;
    //Remplissage
    for(var i=0;i<parseInt(dim_tab);i++){
        nbr=randomInteger(parseInt(borne_inf),  parseInt(borne_sup));
        T[i]=nbr;
        Tab2[i]=nbr;
        
    }      
    
    //Affichage
     res="<table class='table table-bordered table-striped'><tr>";
        var largeur=0;
    for(var i=0;i<T.length;i++)
    {
        if ( largeur<9)
        {
            res+= "<td>"+T[i]+"<sub>  <span class='texteAlternatif'></span></td>";
            largeur+=1;
        }
        else{
            res+= "<td>"+T[i]+"<sub>  <span class='texteAlternatif'></span></td></tr><tr>";
            largeur=0;
        }            
    }
    res+= "</tr></table>"; 
    //////////  
    return res;
}        
}
//result;
