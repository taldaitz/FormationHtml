var nomVar = 5;

function nomFonction(parametre) {

    for(var i = 0; i < 10; i++) {
        console.log("ceci est un log");
    }
    console.warn("ceci est un warn");
    console.info("ceci est un info");

    $('label').css('color', 'red');

}




$(document).ready(function () {

    nomFonction('toto');

});


