$(document).ready(function () {
    $("a").click(function () {
        var gato = this.hash
        $("html, body").animate({
                scrollTop: $(gato).offset().top -70
            },
            1000
        )

    })


})

// --------HOVER--------
$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});