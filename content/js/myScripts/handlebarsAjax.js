function folioAjaxInit() {

    function showFolioContent(link) {
        //var content = document.getElementsByClassName('mainContent')[0];

        var http = createRequestObject();
        if (http) {
            http.open('get', link);
            http.addEventListener('readystatechange', function () {
                if (http.readyState == 4) {
                    initHandlebars(JSON.parse(http.responseText));
                    console.log(JSON.parse(http.responseText));
                    popUp();
                }
            });

            http.send(null);

        } else {
            document.location = link;
        }
    };

    function createRequestObject() {
        try {
            return new XMLHttpRequest()
        }
        catch (e) {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP')
            }
            catch (e) {
                try {
                    return new ActiveXObject('Microsoft.XMLHTTP')
                }
                catch (e) {
                    return null;
                }
            }
        }
    };
    try {


        // :::::::::::: init ::::::::::::::::
        var navBlock = document.getElementsByClassName('folioNav')[0];
        var folioNavElements = navBlock.children[0].children;

        navBlock.classList.add('folioNavZindex');
        folioNavElements[0].classList.add('activeTab');


        showFolioContent('content/json/folio/showAll.json');
        var container = document.getElementById('containerForAjax');

        function initHandlebars(jsonObj) {
            //var template = Handlebars.compile(document.getElementById('template').innerHTML);
            //container.insertAdjacentHTML('beforeend', template(jsonObj));
            //container.innerHTML = template(jsonObj);
            var template = Handlebars.compile($('#template').html());
            $('#containerForAjax').append(template(jsonObj));
        }


        // :::::::::::::::::: navigation(load new json):::::::::::::::::::

        for (var i = 0; i < folioNavElements.length; ++i) {
            folioNavElements[i].addEventListener("click", handlerNav);
        }
        function handlerNav() {
            deactiveFolioNav();
            this.classList.add('activeTab');

            var stem = this.id;
            var base = 'content/json/folio/' + stem + '.json';
            $('#containerForAjax').empty();
            $('#containerForAjax').append('<script id="template" type="text/x-handlebars-template">' +
                '{{#each updates}}' +
                '<figure class="col-lg-4 col-md-4 col-sm-6 col-xs-12 imageColumn">' +
                '<div class="classForZoom">' +
                '<img src="{{url}}" height="250" width="300">' +
                '<i class="fa fa-search-plus"></i>' +
                '</div>' +
                '<h4>{{heading}}</h4>' +
                '<p>{{description}}</p>' +
                '</figure>' +
                '{{/each}}' +
                '</script>');
            showFolioContent(base);
        }

        function deactiveFolioNav() {
            for (var i = 0; i < folioNavElements.length; ++i) {
                folioNavElements[i].classList.remove('activeTab');
            }
        }

        //:::::::::::::::::::::::: pop up ::::::::::::::::::::::::::::::::::::::::
        function popUp() {
            var popup = document.getElementsByClassName('popup')[0];
            var navBlock = document.getElementsByClassName('folioNav')[0];

            function findZoomAndRunPopup() {
                zoomElem = document.getElementsByClassName('fa-search-plus');
                popupImage(zoomElem);
            }

            function popupImage(arrOfZoomElements) {
                for (var i = 0; i < arrOfZoomElements.length; i++) {
                    arrOfZoomElements[i].addEventListener("click", function () {
                        var srcToOpen = this.previousElementSibling.getAttribute("src");
                        var parentPopup = document.getElementsByClassName('parent-popup')[0];
                        navBlock.classList.remove('folioNavZindex');
                        parentPopup.classList.add('open');

                        popup.innerHTML = "<img src=" + srcToOpen + " width='100%' height='100%'>";
                        var closePopup = document.getElementsByClassName('closePopup')[0];
                        closePopup.addEventListener("click", function () {
                            navBlock.classList.add('folioNavZindex');
                            parentPopup.classList.remove('open');
                        });
                    });
                }
            }

            findZoomAndRunPopup();
        };
    }
    catch(ex) {

    }
};