/**
 * Created by sanya on 04.02.2016.
 */
window.addEventListener("load", function() {
    var content = document.getElementsByClassName('mainContent')[0];

    var opts = {
        size: 105,           // Width and height of the spinner
        factor: 1,       // Factor of thickness, density, etc.
        color: "#F9FF40",      // Color #rgb or #rrggbb
        speed: 2.0,         // Number of turns per second
        clockwise: true     // Direction of rotation
    };
    var ajaxLoader = new AjaxLoader("spinner", opts);

    function showContent(link) {
        ajaxLoader.show();

        var http = createRequestObject();
        if(http) {
            http.open('get', link);
            http.addEventListener('readystatechange', function() {
                if(http.readyState == 4) {
                    content.innerHTML = http.responseText;
                   // content.insertAdjacentHTML('beforeend', http.responseText);

                    folioAjaxInit();
                    //WorkingWithLS.init();
                    formValidation();

                    ajaxLoader.hide();
                }
            });
            http.send(null);
        } else {
            document.location = link;
        }
    };
    
    function createRequestObject() {
        try { return new XMLHttpRequest() }
        catch(e) {
            try { return new ActiveXObject('Msxml2.XMLHTTP') }
            catch(e) {
                try { return new ActiveXObject('Microsoft.XMLHTTP') }
                catch(e) { return null; }
            }
        }
    };


    var navButtons = document.getElementsByClassName('mainnav');


    for (var i = 0; i < navButtons.length; ++i) {
        navButtons[i].addEventListener("click", function(e) {
            e.preventDefault();

            var stem = this.getAttribute('data-stem');
            var base = 'content/navigation/'+stem+'.html';

            deactiveMainnav();

            this.classList.add('activeMainnav');



            //if (stem == 'home') {
            //    for (var i = 1; i <= 8; i++ ) {
            //        (function (q) {
            //            base = 'content/navigation/home/part'+[q]+'.html';
            //            showContent(base);
            //        })(i);
            //    }
            //}
            //else showContent(base);
            showContent(base);
            //history.pushState(null,null, '/'+stem);

            return false;
        });
    };

    function deactiveMainnav() {
        for (var i = 0; i < navButtons.length; ++i) {
            navButtons[i].classList.remove('activeMainnav');
        }
    }

    function formValidation() {
        var fields = document.getElementsByClassName('formFields');
        var buttons = document.getElementsByClassName('formButtons');
        var form = document.getElementsByName('feedback')[0];

        formModule.init(fields, buttons, form);
    }
    showContent('content/navigation/home.html');
    //for (var i = 1; i <= 8; ++i ) {
    //    (function (q) {
    //        var base = 'content/navigation/home/part'+[q]+'.html';
    //        showContent(base);
    //    })(i);
    //}
    navButtons[0].classList.add('activeMainnav');
});