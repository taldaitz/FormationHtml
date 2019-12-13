$(document).ready(function () {
    $('.boutonArticle').click(function () {
        //Asynchrone
        //$('#articleArea').load( this.id +  ".html"); // --> envoyé : thread


        $.get(this.id + ".html", function (data) { // --> envoyé : thread
            $('#articleArea').html(data);

            $('#articleArea img').css('max-width', '200px');
            $('#articleArea img').css('max-height', '200px');
        });
    });
});