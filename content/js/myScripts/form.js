/**
 * Created by sanya on 03.02.2016.
 */
var formModule = (function() {
    var result = {};

    //function clearForm() {
    //    localStorage.clear();
    //}

    function setLS() {
        var patternFromAttr = this.getAttribute("data-reg");
        var pattern = new RegExp(patternFromAttr, 'i');
        var inputVal = this.value;

        if(pattern.test(inputVal)) {
            this.style.background = '#9DE0AD';
            this.removeAttribute("invalid");
            localStorage.setItem(this.name, this.value);
        }
        else {
            this.style.background = '#FF5A5A';
            this.setAttribute("invalid","");
        }
    }

    function setValue(fields) {
        for (var i = 0; i < fields.length; i++){
            fields[i].value = localStorage.getItem(fields[i].name);
        }
    }

    function start(fields, buttons, form) {
        for (var i = 0; i < fields.length; i++) {
            fields[i].addEventListener("change", setLS);
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function(e) {
                if (this.getAttribute('name') == 'submit') {
                    if(form.checkValidity()) {
                        e.preventDefault();
                        alert("Your message is send!!");
                    }
                }
                else if (this.getAttribute('name') == 'reset') {
                    localStorage.clear();
                    for (var i = 0; i < fields.length; i++) {
                        fields[i].style.background = 'white';
                    }
                }
                console.log(this.name);
            });
        }
    }
    result.init = function(fields, buttons, form) {
        start(fields, buttons, form);
        if(localStorage.length > 0) setValue(fields);
    };

    return result;
})();
