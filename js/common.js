AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})


$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("scrolldown");
        $(".search-wrap.search-top").addClass("scrolldown");
    }else {
        $(".header").removeClass("scrolldown");
        $(".search-wrap.search-top").removeClass("scrolldown");
    }
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
    $(".header_nav_firstLink").each(function() {
        let link = $(this).data("link");
        if($(window).width() < 992) {
            $(this).attr("href","javascript:void(0)");
        }else {
            $(this).attr("href",link);
        }
    })
}
headerNavFirstLink();





$(".header_search").click(function(){
    $(".search-wrap").removeClass("search-top").fadeIn(300);
})

$(".search-bg").click(function(){
    $(".search-wrap").fadeOut(300);
})
