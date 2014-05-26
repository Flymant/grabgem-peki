// email password is yhujikol

var capt1 = document.getElementById("appointment_showMonth_captchaText");
if (capt1 == null) {
    capt1 = document.getElementById("appointment_refreshCaptchamonth_captchaText");
}

if (capt1 != null) {
    capt1.focus();
    capt1.addEventListener("change", function (evt) {
        if(evt.target.value != ""){
            var btn_submit = document.getElementById("appointment_showMonth_appointment_showMonth");
            if(btn_submit == null){
                btn_submit = document.getElementById("appointment_refreshCaptcha_appointment_showMonth")
            }
            btn_submit.click();
        }
    });
    window.close();
}

else{

    var arrows = document.getElementsByClassName("arrow");
    if (arrows != null && arrows.length != 0) {
        for (var m = arrows.length - 1; m > -1; m--) {
            if (arrows[m].innerText.indexOf("Termin") == -1) {
                continue;
            }
            if(window.localStorage.getItem("appoint_page_opend") != "yes"){
                window.open(arrows[m].href, "_blank");
                window.close();
                break;
            }
        }
        window.close();
    }

    var btn_submit1 = document.getElementById("appointment_showForm_appointment_addAppointment");
    if(btn_submit1 == null && (arrows == null || arrows.length == 0)){
        chrome.storage.local.get("input_refreshinterval", function(obj){
            setTimeout(function(){window.location.href = window.location.href;}, parseInt(obj.input_refreshinterval));
        });
        
    }
    if(btn_submit1 != null && window.localStorage.getItem("appoint_page_opend") != "yes") {
        
        if(window.localStorage.getItem("appoint_page_opend") == "yes"){
            window.close();
            return;
        }
        else{
            window.localStorage.setItem("appoint_page_opend", "yes");
            
            chrome.storage.local.get("appointment_showForm_lastname", function(applicant){
                var input_nachname = document.getElementById("appointment_showForm_lastname");
                var input_nachname2 = document.getElementById("appointment_showForm_fields_1__content");
                if(input_nachname != null)
                    input_nachname.value = applicant.appointment_showForm_lastname;
                if(input_nachname2 != null)
                    input_nachname2.value = applicant.appointment_showForm_lastname;
            });
            
            chrome.storage.local.get("appointment_showForm_firstname", function(applicant){
                var input_vorname = document.getElementById("appointment_showForm_firstname");
                var input_vorname2 = document.getElementById("appointment_showForm_fields_2__content");
                if(input_vorname != null)
                    input_vorname.value = applicant.appointment_showForm_firstname;
                if(input_vorname2 != null)
                    input_vorname2.value = applicant.appointment_showForm_firstname;
            });
            
            
            chrome.storage.local.get("appointment_showForm_email", function(applicant){
                var input_email = document.getElementById("appointment_showForm_email");
                var input_email2 = document.getElementById("appointment_showForm_emailrepeat");
                if(input_email != null)
                    input_email.value = applicant.appointment_showForm_email;
                if(input_email2 != null)
                    input_email2.value = applicant.appointment_showForm_email;
            });
            
            
            chrome.storage.local.get("appointment_showForm_fields_0__content", function(applicant){
                var input_pass = document.getElementById("appointment_showForm_fields_0__content");
                if(input_pass != null)
                    input_pass.value = applicant.appointment_showForm_fields_0__content;
            });
            
            
            var ckb_agree = document.getElementById("appointment_showForm_fields_3__content");
            if(ckb_agree != null)
                ckb_agree.click();
            
            var capt2 = document.getElementById("appointment_showForm_captchaText");
            if(capt2 == null){
                capt2.focus();
                capt2 = document.getElementById("appointment_refreshCaptcha_captchaText");
            }
            if(capt2 != null){
                capt2.addEventListener("change", function (evt) {
                    if(evt.target.value != ""){
                        var btn_submit2 = document.getElementById("appointment_showForm_appointment_addAppointment");
                        if(btn_submit2 == null)
                            btn_submit2 = document.getElementById("appointment_refreshCaptcha_appointment_addAppointment");
                        btn_submit2.click();
                        window.localStorage.removeItem("appoint_page_opend");
                    }
                });
            }
        }
    }
}
