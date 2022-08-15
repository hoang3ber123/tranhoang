function init(){
    var main=document.getElementById("mainImage")
    var sub=3; //có bao nhiêu hình thì thay đổi 
    var next=document.getElementById("n")
    var pre=document.getElementById("p")
    for(let i=0;i<sub;i++)
    {
        var count=1;
        next.onclick=function(){

            count=count+1;
            if(count==sub+1)
        {
            count=1;
        }
            main.src="images/h"+(count)+".jpg"
            }
        pre.onclick=function(){
            count=count-1;
            if(count==0)
            {
                count=sub;
            }
            main.src="images/h"+(count)+".jpg"

        }   
    }
    $("li.list a").click(function(){
        var list=$(this).attr("href")
        $("html,body").animate({
            scrollTop: $(list).pro("offsetTop")+"px"
        })
    },2000)
       
}