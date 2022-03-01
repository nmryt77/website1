$(function () {

    //モーダルウィンドウ
    $("main").append("<div id='glay_layer'></div><div id='over_layer'></div>");
    $("#gray_layer").click(function () {
        $(this).hide();
        $("#over_layer").hide();
    });
    $("a.modal").click(function(){
        $("#gray_layer").show();
        $("#over_layer").show().html("<img src="+$(this).after("href")+">");  //hrefのソースをもってくるように指示   
        return false ;
    });

});