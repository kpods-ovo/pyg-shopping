window.addEventListener('load', function () {
    var phone_child = document.querySelector('.phone').children;
    checkFun1(/^1(3|4|5|7|8)\d{9}$/,phone_child,'手机格式不正确，请重新输入','手机格式正确');
    var password_one_children = document.querySelector('.password_one').children;
    checkFun1(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/,password_one_children,'密码不少于6位数，请重新输入','密码格式正确')
    function checkFun1(reg,target,tips1,tips2){
        target[1].addEventListener('blur', function () {
            target[2].className = '';
            target[3].className = '';
            target[3].innerHTML = '';
            var content = target[1].value;
            if (!(reg.test(content))) {
                target[2].className = 'fas fa-times-circle false_text';
                target[3].className = 'false_text';
                target[3].innerHTML = tips1;
            } else {
                target[2].className = 'fas fa-check-circle right_text';
                target[3].className = 'right_text';
                target[3].innerHTML = tips2;
            }
        })
    }
    var password_two_children = document.querySelector('.password_two').children;
    checkFun2(password_two_children,'密码不一致，请重新输入','密码输入一致');
    function checkFun2(target,tips1,tips2){
        target[1].addEventListener('blur', function () {
            target[2].className = '';
            target[3].className = '';
            target[3].innerHTML = '';
            var content = target[1].value;
            if (target[1].value !== password_one_children[1].value) {
                target[2].className = 'fas fa-times-circle false_text';
                target[3].className = 'false_text';
                target[3].innerHTML = tips1;
            } else {
                target[2].className = 'fas fa-check-circle right_text';
                target[3].className = 'right_text';
                target[3].innerHTML = tips2;
            }
        })
    }
})