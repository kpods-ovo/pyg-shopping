window.addEventListener('load', function () {
    var top_text = document.querySelector('.slide').children[0];
    top_text.addEventListener('click', function () {
        animateY(window, 0);
    })
    function animateY(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var distance = (target - window.pageYOffset) / 2;
            if (distance > 0) {
                distance = Math.ceil(distance);
            } else {
                distance = Math.floor(distance);
            }
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            // obj.style.left = obj.offsetLeft + distance + 'px';
            window.scroll(0, window.pageYOffset + distance);
        }, 40)
    }
})