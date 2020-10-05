$(document).ready(function(){
    const responsiveProp={
        0:{
            items:1
        },
        320:{
            items:1
        },
        560:{
            items:2
        },
        560:{
            items:3
        },

    }

    $nav=$('.nav');
    $toggleCollapsed=$('.toggle-collapsed');

    /*click event on toggle*/
    $toggleCollapsed.click(function(){
        $nav.toggleClass('collapsed');
    });
    
    /*owl-carousel*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[
            $('.owl-navigation .owl-nav-prev'),
            $('.owl-navigation .owl-nav-next')
        ],
        responsive: responsiveProp
    });
    
    /*click to move up*/
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });

    /*AOS Instance*/
    AOS.init();
});