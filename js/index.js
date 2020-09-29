window.addEventListener('load', function () {
    // 精灵图模块 start
    var lis = document.querySelectorAll('.spirit_pic');
    var bckposition = []
    for (var i = 0; i < lis.length / 4; i++) {
        index1 = 72 * i;
        for (var j = 0; j < 4; j++) {
            index2 = 61 * j;
            var backgroundPosition = '-' + index2 + 'px -' + index1 + 'px';
            bckposition.push(backgroundPosition);
        }
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundPosition = bckposition[i];
    }
    // 精灵图模块 end

    // 轮播图模块 start
    var ul = document.querySelector('.banner_ul');
    var lis = ul.children;
    var circle = document.querySelector('.circle');
    var dots = circle.children;
    var arrow_r = document.querySelector('.arrow_r');
    var arrow_l = document.querySelector('.arrow_l');
    for (var i = 0; i < lis.length; i++) {
        var dot = document.createElement('li');
        circle.appendChild(dot);
    }
    dots[0].className = 'current_dot';
    var lis_clone1 = lis[0].cloneNode(true);
    var lis_clone2 = lis[2].cloneNode(true);
    ul.appendChild(lis_clone1);
    ul.insertBefore(lis_clone2, lis[0]);
    var idx = 0;
    var flag = true;
    var num = 1;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (idx < 2) {
                idx++;
            }
            else {
                idx = 0;
            }
            for (var i = 0; i < dots.length; i++) {
                dots[i].className = '';
            }
            dots[idx].className = 'current_dot';
            if (num < 4) {
                num++;
            } else {
                num = 2;
                ul.style.left = '-721px'
            }
            animate(ul, (-721 - (721 * (num - 1))), function () {
                flag = true;
            })
        }
    })
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (idx > 0) {
                idx--;
            }
            else {
                idx = 2;
            }
            for (var i = 0; i < dots.length; i++) {
                dots[i].className = '';
            }
            dots[idx].className = 'current_dot';
            if (num > 0) {
                num--;
            } else {
                num = 2;
                ul.style.left = '-2163px'
            }
            animate(ul, (-2163 + (721 * (3 - num))), function () {
                flag = true;
            })
        }
    })

    setInterval(function () {
        arrow_r.click();
    }, 2500)
    // 轮播图模块 end

    // 商品跳转侧边栏 start
    var divs = document.querySelector('.goods_jump').children;
    for (var i = 0; i < divs.length; i++) {
        let index = i;
        divs[i].addEventListener('click', function () {
            for (var i = 0; i < divs.length; i++) {
                divs[i].className = '';
            }
            var distance = 1600 + index * 500;
            animateY(window, distance);
            this.className = 'current_bg';
        })
    }
    function animateY(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var distance = (target - window.pageYOffset) / 5;
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
    // 商品跳转侧边栏 end
})