window.addEventListener("load", function() {
    var zoomElem;

    function showContent(link) {
        var cont = document.getElementById('containerForAjax');

        var http = createRequestObject();
        if( http ) {
            http.open('get', link);
            http.addEventListener('readystatechange', function() {
                if(http.readyState == 4) {
                    cont.innerHTML = http.responseText;
                    findZoomAndRunPopup();
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

    var category1 = document.getElementById('category1');
    var category2 = document.getElementById('category2');
    var showAll = document.getElementById('showAll');
    var popup = document.getElementsByClassName('popup')[0];

    showAll.classList.add('activeTab');

    showContent('content/htmlAJAX/Folio/showAll.html');

    function findZoomAndRunPopup() {
        zoomElem = document.getElementsByClassName('fa-search-plus');
        popupImage(zoomElem);
    }
    function popupImage(arrOfZoomElements) {
        for (var i = 0; i < arrOfZoomElements.length; i++) {
            arrOfZoomElements[i].addEventListener("click", function() {
                var srcToOpen = this.previousElementSibling.getAttribute("src");
                var parentPopup = document.getElementsByClassName('parent-popup')[0];
                parentPopup.classList.add('open');

                popup.innerHTML = "<img src=" + srcToOpen + " width='100%' height='100%'>";
                var closePopup = document.getElementsByClassName('closePopup')[0];
                closePopup.addEventListener("click", function() {
                    parentPopup.classList.remove('open');
                });
            });
        }
    }

    function delActiveTab(element) {
        for (var i = 0; i < element.children.length; i++) {
            element.children[i].classList.remove('activeTab');
        }
    }

    var folioNavUl = document.getElementsByClassName('folioNavUl')[0];
    category1.addEventListener("click", function() {
        var linkHTML = 'content/htmlAJAX/Folio/category1.html';
        delActiveTab(folioNavUl);
        this.classList.add('activeTab');

        return showContent(linkHTML);
    });
    category2.addEventListener("click", function() {
        var linkHTML = 'content/htmlAJAX/Folio/category2.html';
        delActiveTab(folioNavUl);
        this.classList.add('activeTab');

        return showContent(linkHTML);
    });
    showAll.addEventListener("click", function() {
        var linkHTML = 'content/htmlAJAX/Folio/showAll.html';
        delActiveTab(folioNavUl);
        this.classList.add('activeTab');

        return showContent(linkHTML);
    });
});