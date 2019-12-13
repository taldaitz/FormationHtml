var nbArticle = 0;

$(document).ready(function () {
    $('#showArticles').click(function () {

        nbArticle++;
        $.get("article" + nbArticle + ".html", function (data) { // --> envoyé : thread
            var element = $('#articleTemplate').clone();

            element.attr('id', 'article' + nbArticle);
            element.appendTo('#articleContainer');
            element.prepend(data);

            $('.boutonSuppression').click(function () {
                $(this).parent().fadeOut();
            });

        });
    });
});