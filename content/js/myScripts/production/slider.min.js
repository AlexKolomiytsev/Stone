window.addEventListener("load", function() {
    //:::::::::: slider on main page at header :::::::::
    var headerSlider = {
        images: ['slide11.jpg','slide22.jpg','slide33.jpg','slide44.jpg'],
        phrases: ['Unsurpassed quality', 'Live in harmony', 'We create beauty', 'Everything is real'],

        number: 0, //the number of image on slide
        slideHeaderPhrase: document.getElementsByClassName('slideHeader')[0].getElementsByTagName('h1')[0],

        setupImage: function(image) {
            document.getElementsByClassName('header')[0].style.backgroundImage = "url(content/images/"+image+")";
        },

        init: function(){
          headerSlider.setupImage(headerSlider.images[headerSlider.number]);
        },

        next: function() {
            headerSlider.number++;
            if (headerSlider.number >= headerSlider.images.length) headerSlider.number = 0;

            var textNode = document.createTextNode(headerSlider.phrases[headerSlider.number]);
            headerSlider.slideHeaderPhrase.replaceChild(textNode, headerSlider.slideHeaderPhrase.firstChild);

            headerSlider.setupImage(headerSlider.images[headerSlider.number]);

            headerSlider.slideHeaderPhrase.classList.add('AnimatePhraseOnSlideNext');
            setTimeout(function() {
                headerSlider.slideHeaderPhrase.classList.remove('AnimatePhraseOnSlideNext');
            }, 1000);
            //headerSlider.slideHeaderPhrase.classList.remove('AnimatePhraseOnSlide');

        },

        previous: function() {
            headerSlider.number--;
            if(headerSlider.number < 0) headerSlider.number = headerSlider.images.length - 1;

            var textNode = document.createTextNode(headerSlider.phrases[headerSlider.number]);
            headerSlider.slideHeaderPhrase.replaceChild(textNode, headerSlider.slideHeaderPhrase.firstChild);

            headerSlider.setupImage(headerSlider.images[headerSlider.number]);

            headerSlider.slideHeaderPhrase.classList.add('AnimatePhraseOnSlidePrevious');
            setTimeout(function() {
                headerSlider.slideHeaderPhrase.classList.remove('AnimatePhraseOnSlidePrevious');
            }, 1000);
        }
    };
    var leftArrow = document.getElementById('slideArrowLeft');
    var rightArrow = document.getElementById('slideArrowRight');

    headerSlider.init();

    function startInterval() {
        interval = setInterval(function() {
            headerSlider.next();
        }, 10000);
    }
    startInterval();
    function stopInterval() {
        clearInterval(interval);
    }

    //function startInterval() {
    //    var interval = setInterval(function() {
    //        headerSlider.next();
    //    }, 1000);
    //    return function() {
    //        clearInterval(interval);
    //        console.log("mouse on arrow");
    //    };
    //};
    //startInterval();


    leftArrow.addEventListener('mouseover', stopInterval);
    rightArrow.addEventListener('mouseover', stopInterval);
    leftArrow.addEventListener('mouseout', startInterval);
    rightArrow.addEventListener('mouseout', startInterval);


    leftArrow.addEventListener("click", headerSlider.previous);
    rightArrow.addEventListener("click", headerSlider.next);

});
