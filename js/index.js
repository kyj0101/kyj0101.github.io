

function mainViewShow(){
    var video = document.getElementsByClassName("video");
    
    var fn = document.getElementById("first-name")
    var ln = document.getElementById("last-name");

    var box1 = document.getElementById("name-box1");
    var box2 = document.getElementById("name-box2");

    var con = document.getElementsByClassName("container1");
    var mainBox = document.getElementsByClassName("main-box");
    
    fn.style.transform = "translateX(2.0em)";
    fn.style.animation = "1s out-f .2s cubic-bezier(.67,.07,.41,.88) forwards";
    
    ln.style.transform = "translateX(2.3em)";
    ln.style.animation = "1s out-l .2s cubic-bezier(.67,.07,.41,.88) forwards";

    con[0].style.animation =  ".5s fade-in 2s both";  
    
    video[0].style.animation =  ".3s fade-in 2s both";  
    
    mainBox[0].style.animation = ".8s scale-in 1.7s cubic-bezier(0.25, 0.05, 0.14, 0.94) both";
    
    box1.style.animation = " 1s box .1s cubic-bezier(.19,.50,.2,1) forwards";
    box2.style.opacity = "1";
    box2.style.transform = "translateX(0em)";
    box2.style.animation = "1s fade-out .1s cubic-bezier(.19,.50,.2,1) forwards";
        
    setTimeout(function () {
        var nameBox = document.getElementsByClassName("name");
        nameBox[0].style.display = "none";
        con[0].style.backgroundColor =  "#FEDCD2";
    },2000);
    
}

function articleTitle(){
    var about = document.getElementById("about");
    var me = document.getElementById("me");
    var article = document.getElementsByClassName("article");
    
    about.style.animation = "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
    me.style.animation = "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
    article[0].style.animation = "text-focus-in 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
}


document.addEventListener('scroll',function(){
    var csv = document.documentElement.scrollTop;
    console.log(csv);
    
    if(csv >= 2000)
    articleTitle();
    
    
    if(csv >= 4500)
    divSkills();
});

function divSkills(){
    var text = document.getElementById("skills");
    text.style.animation = "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
}

function siteShow(type){
    console.log(type);
    if(type === 'painting'){
        open("https://www.philipbarlow.com/","philipbarlow");
        return;
    }else if(type === 'music'){
        open("https://www.youtube.com/embed/ibGU3kyiXrg","music");
    }else if(type === 'cat'){
        open("https://www.youtube.com/embed/z3U0udLH974","greece");
    }else if(type === 'greece'){
        open("https://www.youtube.com/embed/54xXb7R33rQ","greece");
    }else if(type === 'coffee'){
        open("https://www.pexels.com/ko-kr/video/4786576/","coffee");
    }
    
}

function iframeClose(){
    var  boxs = document.querySelector('.owl-carousel');
    var frame = document.querySelector(".div-frame");
    
    boxs.style.filter = "blur(0px)";
    frame.style.animation =  ".8s fade-out 1.1s both";  
    frame.style.display = "none";
}













