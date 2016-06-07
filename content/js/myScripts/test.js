/**
 * Created by sanya on 23.04.2016.
 */

var content = document.getElementsByClassName('qwrqwrqw')[0];

var xhr = new XMLHttpRequest();

xhr.open('get', 'partials/doska.html');
xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState == 4) {
        content.innerHTML = xhr.responseText;

    }
});
xhr.send(null);