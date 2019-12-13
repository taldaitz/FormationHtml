$(document).ready(function () {

    $('#inputArea').keyup(function () {
        var text = $(this).val();

        $('#outputZone').html(text);
    });

    $('#toggleButton').click(function() {
        $('#outputZone').fadeToggle();

        var label = $(this).html();
        if(label == "Cacher")
            $(this).html('Montrer');
        else
            $(this).html('Cacher');

        $(this).toggleClass('showingButton');
    });

});