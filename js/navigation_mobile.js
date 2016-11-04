$(document).ready(function() {
    var isClicked = false;
    $('#cross').click(function() {
        if (isClicked === false) {
            $(this).find('span').eq(0).css({
                "display": "none"
            });
            $(this).find('span').eq(1).css({
                "-webkit-transform": " translateY(-50%) rotate(135deg)",
                "transition": "all 0.5s",
                "top": "50%"
            });
            $(this).find('span').eq(2).css({
                "-webkit-transform": "translateY(-50%) rotate(-135deg)",
                "transition": "all 0.5s",
                "top": "50%"
            });
            $(this).css({
                "position": "fixed"
            })
            $(".navigation-mobile").css("display", "table");
            isClicked = true;
        } else {
            $(this).find('span').eq(0).css({
                "display": "block"
            });
            $(this).find('span').eq(2).css({
                "-webkit-transform": "translateY(-75%) rotate(0deg)",
                "transition": "all 0.5s",
                "top": "75%"
            });
            $(this).find('span').eq(1).css({
                "top": "50%",
                "-webkit-transform": "translateY(-50%) rotate(0deg)",
                "transition": "all 0.5s",
            });
            $(this).css({
                "position": "absolute"
            })
            $(".navigation-mobile").css("display", "none");
            isClicked = false;
        }
    })
});
