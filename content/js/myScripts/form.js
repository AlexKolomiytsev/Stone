/**
 * Created by sanya on 03.02.2016.
 */
window.addEventListener("load", function() {
    var WorkingWithLS = (function()  {
        var result = {};

        var name = document.getElementsByName('name')[0];
        var mail = document.getElementsByName('email')[0];
        var tel = document.getElementsByName('userTel')[0];
        var txtarea = document.getElementsByName('message')[0];

        var btnReset = document.getElementsByClassName('btnReset');
        var btnSubmit = document.getElementsByClassName('btnSubmit');

        var inputs = [name, mail, tel, txtarea];

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

        function setValue() {
            name.value = localStorage.getItem('name');
            mail.value = localStorage.getItem('email');
            tel.value = localStorage.getItem('userTel');
            txtarea.value = localStorage.getItem('message');
        }

        function isValidOK(e) {
            e.preventDefault();
            var isError;
            for (var i = 0; i < inputs.length; ++i) {
                if(inputs[i].hasAttribute('invalid') || inputs[i].value == "") {
                    isError = true;
                    break;
                }
                else isError = false;
            }
            if(isError) alert('Something bad with your form...');
            else alert('Everything is OK!');
        }
        function clearForm() {
            localStorage.clear();
        }

        function start() {
            for (var i = 0; i < inputs.length; ++i) {
                inputs[i].addEventListener("change", setLS);
            }
            for (var i = 0; i < btnSubmit.length; ++i) {
                btnSubmit[i].addEventListener("click", isValidOK);
            }
            for (var i = 0; i < btnReset.length; ++i) {
                btnReset[i].addEventListener("click", clearForm);
            }
        }

        result.init = function() {
            start();
            if(localStorage.length > 0) setValue();
        };

        return result;
    })();

    WorkingWithLS.init();
    //localStorage.clear();

});