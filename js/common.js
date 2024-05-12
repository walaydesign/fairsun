$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

$(".header_nav_first>.drop").click(function(){
    if($(window).width() < 992) {
        if($(this).hasClass("expand")) {
            $(this).find(".header_nav_second").slideUp(300);
            $(this).removeClass("expand");
        }else {
            $(this).find(".header_nav_second").slideDown(300);
            $(this).addClass("expand"); 
            $(this).siblings("li").find(".header_nav_second").slideUp(300);
            $(this).siblings("li").removeClass("expand");
        }
    }
})

function headerNavFirstLink(){
    let link = $(".header_nav_firstLink").data("link");
    if($(window).width() < 992) {
        $(".header_nav_firstLink").attr("href","javascript:void(0)");
    }else {
        $(".header_nav_firstLink").attr("href",link);
    }
}





$(".header_search").click(function(){
    $(".search-wrap").fadeIn(300);
})

$(".search-bg").click(function(){
    $(".search-wrap").fadeOut(300);
})
