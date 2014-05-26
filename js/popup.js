
function bindEvent(){
    var btn_setting = document.getElementById("menuitem_setting");
    btn_setting.addEventListener("click", function(){
        window.open("main.html", "_blank");
    });
}

function init(){
    bindEvent();
}

window.addEventListener("load", init);
