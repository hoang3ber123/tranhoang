$(document).ready(function(){
    $(".subMenu").hide()
    $(".mainMenu li").click(function(){
        $(this).children("ul").slideToggle(1000)
    })
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $("div#backtop").fadeIn();
        }
        else{
            $("div#backtop").fadeOut();
        }
    })
    $("div#backtop").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })
    var main=document.getElementById("mainImage")
    var sub=4; //có bao nhiêu hình thì thay đổi 
    var next=document.getElementById("n")
    var pre=document.getElementById("p")
    for(let i=0;i<sub;i++)
    {
        var counts=1;
        next.onclick=function(){

            counts++
            if(counts==sub+1)
        {
            counts=1;
        }
            main.src="images/h"+(counts)+".jpg"
            }
        pre.onclick=function(){
            counts--;
            if(counts==0)
            {
                counts=sub;
            }
            main.src="images/h"+(counts)+".jpg"

        }   
    }
    $(".subMenu>li>a").click(function(){
        let id=$(this).attr("href")
        let pos=$(id).prop("offsetTop")
        $("html,body").animate({scrollTop:pos},1000)
    })
    var count=0
    $("div.upDown").click(function(){
        count++;
        if((count%2)!=0){
            $("div.upDown i").removeClass()
            $("div.upDown i").addClass("fa-solid fa-angles-up")
        }
        if((count%2)==0){
            $("div.upDown i").removeClass()
            $("div.upDown i").addClass("fa-solid fa-angles-down")
        }
        $("footer").slideToggle(1000)
    })
})