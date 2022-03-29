(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('body-img');
                element.classList.remove('hidden');
            }
        }
    }


    init();
    checkPosition();
})();