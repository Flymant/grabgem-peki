var applicant = {
    "appointment_showForm_lastname": null,
    "appointment_showForm_firstname": null,
    "appointment_showForm_fields_0__content": null,
    "appointment_showForm_fields_3__content": null,
    "appointment_showForm_fields_5__content": null,
    "appointment_showForm_fields_7__content": null
};

var settings = {
    "appointment_showForm_email": null,
    "input_refreshinterval": null,
    "input_url": null
};

function saveInfo(){
    for(m in applicant){
        var dom = document.getElementById(m);
        applicant[m] = dom.value;
    }
    
    chrome.storage.local.set(applicant, function(){
        var tip_saved = document.getElementById("tip_saved");
        tip_saved.innerHTML = "<label style='color: red'> Applicant information saved !</label>";
    });
    
}


function saveInfo2(){
    for(m in settings){
        var dom = document.getElementById(m);
        settings[m] = dom.value;
    }
    
    chrome.storage.local.set(settings, function(){
        var tip_saved = document.getElementById("tip_saved2");
        tip_saved.innerHTML = "<label style='color: red'> Settings saved !</label>";
    });
    
}


function load_storage(item){
    
    var keys = [];
    for(m in item){
        keys.push(m);
    }

    chrome.storage.local.get(keys, function(obj){
        for(m in obj){
            var item = document.getElementById(m);
            item.value = obj[m];
        }
    });
}


function bindEvent(){
    var btn_save = document.getElementById("btn_save");
    btn_save.addEventListener("click", saveInfo);
    
    
    var btn_save = document.getElementById("btn_save2");
    btn_save.addEventListener("click", saveInfo2);
}


function init(){    
    load_storage(applicant);
    load_storage(settings);
    bindEvent();
}

window.addEventListener("load", init)
