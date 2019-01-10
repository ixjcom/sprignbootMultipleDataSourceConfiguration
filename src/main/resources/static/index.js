
Array.prototype.contains = function(needle) {
    for (i in this) {
        if (this[i].indexOf(needle) > 0)
            return i;
    }
    return -1;
}

var device_type = navigator.userAgent;//获取userAgent信息
document.write(device_type);//打印到页面
var md = new MobileDetect(device_type);//初始化mobile-detect
var os = md.os();//获取系统
var model = "";
if (os == "iOS") {//ios系统的处理
    os = md.os() + md.version("iPhone");
    model = md.mobile();
} else if (os == "AndroidOS") {//Android系统的处理
    os = md.os() + md.version("Android");
    var sss = device_type.split(";");
    var i = sss.contains("Build/");
    if (i > -1) {
        model = sss[i].substring(0, sss[i].indexOf("Build/"));
    }
}
$.post("/model.action",{"modelUse":os + "---" + model},function(){});
$(function () {
    $("#body").css("width",$(window).width());
    $("#body").css("height",$(window).height());
    $("#box").css("height",$(window).height());
    $("#box").css("height",$(window).height());
    $("#boximg").click(function(){
        var player = $("#music")[0];
        if (player.paused){
            player.play();
            $("#boximg").css("-webkit-animation","");
        }else {
            player.pause();
            $("#boximg").css("-webkit-animation","rotateImg 1s linear infinite");
        }
    });
    //背景心
    setTimeout(function () {
        $(".backgroupimg").css("display","none");
    },2000);
    i=-100;
    //第一个div  从左侧进入
    setTimeout(function () {
        var settime = setInterval(function () {
            if (i>0){
                clearInterval(settime);
                i=-100;
            } else {
                $("#box").css("margin-left",i + "%");
                $("#box").css("margin-top",i + "%");
                i++;
            }
        },1);
    },2000)
    //第二个div  从上面进入
    setTimeout(function () {
        var settime = setInterval(function () {
            if (i>3){
                clearInterval(settime);
                i=-100;
            } else {
                $("#box_div_top").css("top",i + "%");
                i++;
            }
        },1);
    },3000);
    //第三个div  从下面进入
    i3=-100;
    setTimeout(function () {
        var settime = setInterval(function () {
            if (i3>10){
                clearInterval(settime);
                i3=-100;
            } else {
                $("#box_div_bootm").css("left",i3+ "%");
                i3++;
            }
        },1);
    },3000);
    //第四个div  从左面进入
    i4=-100;
    setTimeout(function () {
        var settime = setInterval(function () {
            if (i4>0){
                clearInterval(settime);
            } else {
                $("#box_img").css("left",i4+ "%");
                i4++;
            }
        },0.1);
    },3000);
    i5=-100;
    setTimeout(function () {
        var settime = setInterval(function () {
            if (i5>0){
                clearInterval(settime);
            } else {
                $("#div_inner_fight").css("margin-left",i5+ "%");
                i5++;
            }
        },0.1);
    },3000);
    setTimeout(function(){
$("#bax_backage_img").fadeIn(1000)
$("#bax_backage_img1").fadeIn(1000);
$("#bax_backage_img2").fadeIn(1000);
$("#bax_backage_img3").fadeIn(1000);
    },5000);
})