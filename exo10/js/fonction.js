var nomOk;
var prenomOk;
var emailOk;
var mdpOk;

function signalChange(champ) {

    console.info("le champ " + champ + " a été modifié par l'utilisateur");
    
    if(champ == 'nom') nomOk = true;
    if(champ == 'prenom') prenomOk = true;
    if(champ == 'email') emailOk = true;

    //ternaire
    mdpOk = champ == 'password' ? true : mdpOk;

    if(nomOk && prenomOk && emailOk && mdpOk) {
        console.warn("Les champs onbligatoires sont renseignés. On peut valider le formulaire.");
    }

    var e = document.getElementById("prenom");
    e.nodeValue = "riri";

}