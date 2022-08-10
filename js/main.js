$(document).ready(function(){
    // NAV
    $("#GNB > ul > li").hover(function(){
        $(this).find('.sub').stop().slideDown(200);
    },function(){
        $(this).find('.sub').stop().slideUp(200);
    });

    // slide
    $(".slide-con").hide();
    $(".slide-con:first-child").show();
    function slidemove(){
        $(".slide-con:first-child").fadeOut().next().fadeIn().end().appendTo(".slide-box2")
    }
    setInterval(slidemove, 3000);

    // tab
    $(".ng-con").hide();
    $(".ng-con:first-child").show();
    $(".notgall-title a").click(function(){
        var num=$(this).index();

        console.log(num);
        
        $(".notgall-title a").removeClass('active');
        $(this).addClass('active');
        $(".ng-con").hide();
        $(".ng-con").eq(num).show();
    });

    //pop
    $("#pop").hide();
    $(".notice ul li:first").click(function(){
        $("#pop").show();
    });
    $("#pop button").click(function(){
        $("#pop").hide();
    });

});