/**
 * Created by sanya on 03.02.2016.
 */
var formModule = (function() {
    var result = {};

    function isValidOK(fields) {
        //e.preventDefault();
        //var isError;
        //for (var i = 0; i < fields.length; ++i) {
        //    if(fields[i].hasAttribute('invalid') || fields[i].value == "") {
        //        isError = true;
        //        break;
        //    }
        //    else isError = false;
        //}
        //if(isError) alert('Something bad with your form...');
        //else alert('Everything is OK!');
    }

    function clearForm() {
        localStorage.clear();
    }

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

    function start(fields, buttons) {
        for (var i = 0; i < fields.length; i++) {
            fields[i].addEventListener("change", setLS);
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function(e) {
                var isNotPrevent;
                for (var i = 0; i < fields.length; i++) {
                    if (fields[i].getAttribute('value') != "") {
                        isNotPrevent = true;
                    }
                }
                if(this.name == 'submit' || !isNotPrevent) {
                    e.preventDefault();
                    var isError;
                    for (var i = 0; i < fields.length; ++i) {
                        if(fields[i].hasAttribute('invalid') || fields[i].value == "") {
                            isError = true;
                            break;
                        }
                        else isError = false;
                    }
                    if(isError) alert('Something bad with your form...');
                    else alert('Everything is OK!');
                }
                else if (this.name == 'reset') {
                    clearForm();
                }
                //console.log(this.name);
            });
        }
    }
    result.init = function(fields, buttons) {
        start(fields, buttons);
        if(localStorage.length > 0) setValue(fields);
    };

    return result;
})();
