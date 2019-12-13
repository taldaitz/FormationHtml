var nomOk;
var prenomOk;
var emailOk;
var mdpOk;

function signalChange(fieldId) {


    var element = document.getElementById(fieldId);
    alert(element.selectedIndex);
    var valeur = element.options[element.selectedIndex].innerHTML;

    if(fieldId == 'civ1' || fieldId == 'civ2' || fieldId == 'civ3')
        fieldId = 'civilite';

    document.getElementById("lab" + fieldId).innerHTML = valeur;
}