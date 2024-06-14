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


function memberProductTable() {
    if($(window).width()<992) {
        $(".product-4th_table_main").each(function(){
            $(this).find(".table-title").each(function(){
                let thisHight = $(this).find(".table-title_inner").height();
            })

            let length = $(this).find(".product-4th_tr").find(".table-title").length;
            titleHeight = $(this).find(".table-title").eq(0).height();
            contentHeight = $(this).find(".table-content").eq(0).height();

            for (let i=0; i<length; i++) {
                let titleHeight, contentHeight, maxHeight;
                titleHeight = $(this).find(".product-4th_tr .table-title").eq(i).find(".product-4th_table_inner").height();
                contentHeight = $(this).find(".product-4th_tr .table-content").eq(i).find(".product-4th_table_inner").height();
                if(titleHeight > contentHeight ) {
                    maxHeight = titleHeight + 16;
                }else {
                    maxHeight = contentHeight + 16;
            }

            $(this).find(".table-title").eq(i).css("height",maxHeight + "px");
            $(this).find(".table-content").eq(i).css("height",maxHeight + "px");
        }
    })
}else {
    $(".product-4th_table_inner, .product-4th_tr").each(function(){
        $(this).css("height","auto");
        $(this).find(".table-content").css("height","auto");
        $(this).find(".table-title").css("height","auto");
    })
}
}

memberProductTable();
$(window).on("resize scroll",function(){
    memberProductTable();
})

$(".product-4th_tr_link").click(function() {
    let link = $(this).data("link");
    window.location.assign(link);
})



$(".header_search").click(function(){
    $(".search-wrap").removeClass("search-top").fadeIn(300);
})

$(".search-bg").click(function(){
    $(".search-wrap").fadeOut(300);
})

$(".privacy").find(".btn-more").click(function() {
    $(".privacy").fadeOut(300);
})
