$(document).ready(function() {
    setTimeout(function(){
        var $f = $("#first-name");
        var $l = $("#last-name");

        $(".loader-container").fadeOut();

        $f.css("transform","translateX(0em)");
        $f.css("transform","translateY(3em)");
        $f.css("animation","1.5s move-f .2s cubic-bezier(.19,.70,.3,1) forwards");

        $l.css("transform","translateX(0em)");
        $l.css("transform","translateY(3em)");
        $l.css("animation","1.5s move-l .2s cubic-bezier(.19,.70,.3,1) forwards");

        $("#name-box1").css("animation","1s boxOut .8s cubic-bezier(.19,.77,.3,1) forwards");
        $("#name-box2").css("animation","1.1s boxOut .8s cubic-bezier(.19,.77,.3,1) forwards");

    },3000);


    var owl = $('.owl-carousel');

    if(screen.width < 1200){
        owl.owlCarousel({
            margin: 500,
            center:true,
            nav: false,
            loop: true,
            pullDrag: true,
            startPosition : "#painting-img",
            responsive:{
                0:{
                    items:1,
                    margin: 150,
                },
                1200:{
                    items:1,
                    margin: 850,
                },
                1800:{
                    items:3,
                    margin: 850,
                }
                }

          })
    }else{
        owl.owlCarousel({
          margin: 850,
          center:true,
          nav: false,
          loop: true,
          pullDrag: true,
          startPosition : "#painting-img",
          animateOut: 'fadeOut',
          responsive:{
            0:{
                items:1,
                margin: 150,
            },
            1200:{
                items:3,
                margin:500,
            },
            1800:{
                items:3,
                margin: 850,
            }
            }
        })

    }

    var $years = $('.line li');
    var langArr = ['Node.js','Python','C#','Rust','Ruby']
    console.log($years);
    $years.each(function(index, elem){
        $years.eq(index).click(function(){
            var $roadMapP = $('.road-map-p');
            $roadMapP.text(langArr[index]);
        })
    });

    $(".menu").css("display","none");
    $(".menu").toggleClass("memn-hide");

    $("#menu-btn hr:first-child").toggleClass("menuBtnH-f");
    $("#menu-btn hr:last-child").toggleClass("menuBtnH-l");

    $("#menu-btn").click(function () {
        $(".menu").css("display","inline-block");
        $(".menu").addClass("memn-show");
        $(".menu").toggleClass("memn-hide");

        $("#menu-btn hr:first-child").toggleClass("menuBtnX-f");
        $("#menu-btn hr:last-child").toggleClass("menuBtnX-l");

        $("#menu-btn hr:first-child").toggleClass("menuBtnH-f");
        $("#menu-btn hr:last-child").toggleClass("menuBtnH-l");

    });

    $("#menu-signin").click(function () {
        $(".signin").css("display","block");
        $(".signin").css("animation","fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
    });

    $("#menu-login").click(function(){
        $(".login").css("display","block");
        $(".login").css("animation","fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both");
    });

    $("#menu-index").click(function(){
        $("#menu-btn").trigger('click');
        $('html, body').animate({scrollTop : 1600}, 300);
    });

    $("#menu-contact").click(function(){
        $("#menu-btn").trigger('click');
        if(screen.width < 1200){
            $('html, body').animate({scrollTop : 7000}, 300);
        }else{
            $('html, body').animate({scrollTop : 8400}, 300);
        }
    });
    


    $(".close").click(function() {
        var $this = $(this).parent();
        $this.css("animation","fade-out-fwd 0.4s ease-in-out both");
    });

    
    var cardFlag = false;

    $(".card").click(function(e){;
        if(cardFlag){
            $(".card").addClass("flip-f");
            $(".card").removeClass("flip-b");
            $(".back").css("display","none");
            $(".front").css("display","inline-block");
            $(".front").css("transform","rotateY(-180deg)");
            cardFlag = false;
        }else{
            console.log("?");
            $(".card").addClass("flip-b");
            $(".card").removeClass("flip-f");
            $(".back").css("display","inline-block");
            $(".front").css("display","none");
            cardFlag = true;
        }
        
        e.stopPropagation();
    })

    $("#signin-btn").click(function(){
        var enCheck = RegExp(/[^a-zA-Z]$/);

        var $id = $("#signin-id");
        var $psw = $("#signin-password");
        
        if(enCheck.test($id) == false){
            alert("영문자 또는 숫자만 입력하세요.")
            $id.val('').focus();
        }else if($id.val() == ' '){
            alert("공백을 입력할 수 없습니다.")
            $id.val('').focus();
        }else if($psw.val() == ' '){
            alert("공백을 입력할 수 없습니다.")
            $psw.val('').focus();
        }else{
            localStorage[$id.val()] = $psw.val();
            alert("가입을 성공했습니다.")
            $(".close").click();
        }
    })

    $("#login-btn").click(function(){
            var $id = $("#login-id");
            var $psw = $("#login-password")
            
            var psw = localStorage[$id.val()];
            
            if(psw == $psw.val()){
                alert("로그인을 성공했습니다.");
                $(".close").click();
            }else{
                alert("로그인을 실패했습니다.");
            }
    });

    $(moveSkill).click(function(){
        $('html, body').animate({scrollTop : 4600}, 300);
    });

    $(moveRoadMap).click(function(){
        $('html, body').animate({scrollTop : 5600}, 300);
    });

    $(moveFTh).click(function(){
        $('html, body').animate({scrollTop : 6900}, 300);
    })
})