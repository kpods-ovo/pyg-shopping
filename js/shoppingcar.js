window.addEventListener('load', function () {
    var head_all = document.querySelector('.head_bar').querySelector('input');
    var head_all_down = document.querySelector('.settle').querySelector('input');
    var head_1 = document.querySelector('.head_text_1').querySelector('input');
    var head_2 = document.querySelector('.head_text_2').querySelector('input');
    var goods_1 = document.querySelector('.self_goods').querySelectorAll('.cb');
    var goods_2 = document.getElementById('check_2').querySelectorAll('.cb');
    head_all.onclick = function () {
        head_all_down.checked = this.checked;
        head_1.checked = this.checked;
        head_2.checked = this.checked;
        for (var i = 0; i < goods_1.length; i++) {
            goods_1[i].checked = this.checked;
        }
        for (var i = 0; i < goods_2.length; i++) {
            goods_2[i].checked = this.checked;
        }
    }
    head_all_down.onclick = function () {
        head_all.checked = this.checked;
        head_1.checked = this.checked;
        head_2.checked = this.checked;
        for (var i = 0; i < goods_1.length; i++) {
            goods_1[i].checked = this.checked;
        }
        for (var i = 0; i < goods_2.length; i++) {
            goods_2[i].checked = this.checked;
        }
    }
    head_1.onclick = function () {
        if (head_1.checked && head_2.checked) {
            head_all.checked = true;
            head_all_down.checked = true;
        } else {
            head_all.checked = false;
            head_all_down.checked = false;
        }
        for (var i = 0; i < goods_1.length; i++) {
            goods_1[i].checked = this.checked;
        }
    }
    for (var i = 0; i < goods_1.length; i++) {
        goods_1[i].onclick = function () {
            var flag = true;
            for (var i = 0; i < goods_1.length; i++) {
                if (!goods_1[i].checked) {
                    flag = false;
                }
            }
            head_1.checked = flag;
            if (head_1.checked && head_2.checked) {
                head_all.checked = true;
                head_all_down.checked = true;
            }
            else {
                head_all.checked = false;
                head_all_down.checked = false;
            }
        }
    }
    head_2.onclick = function () {
        if (head_1.checked && head_2.checked) {
            head_all.checked = true;
        } else {
            head_all.checked = false;
        }
        for (var i = 0; i < goods_2.length; i++) {
            goods_2[i].checked = this.checked;
        }
    }
    for (var i = 0; i < goods_2.length; i++) {
        goods_2[i].onclick = function () {
            var flag = true;
            for (var i = 0; i < goods_2.length; i++) {
                if (!goods_2[i].checked) {
                    flag = false;
                }
            }
            head_2.checked = flag;
            if (head_1.checked && head_2.checked) {
                head_all.checked = true;
                head_all_down.checked = true;
            }
            else {
                head_all.checked = false;
                head_all_down.checked = false;
            }
        }

        var goods_num = document.querySelector('.self_goods').querySelectorAll('.as')
        var goods_num2 = document.getElementById('check_2').querySelectorAll('.as');
        var add = document.querySelectorAll('.add');
        var sub = document.querySelectorAll('.sub');
        var shopping = document.querySelectorAll('.shopping');
        var money_first = [];
        var money_after = [];
        var sum_money = document.querySelector('.box_1').getElementsByTagName('strong')[0];
        for (var i = 0; i < shopping.length; i++) {
            money_first[i] = shopping[i].children[4];
            money_after[i] = shopping[i].children[6];
        }
        getSum(sum_money);
        for (var i = 0; i < goods_num.length; i++) {
            let index = i;
            add[i].addEventListener('click', function () {
                goods_num[index].value++;
                var money = money_first[index].innerHTML * goods_num[index].value;
                money_after[index].innerHTML = money.toFixed(2);
                getSum(sum_money);
            })
            sub[i].addEventListener('click', function () {
                if (goods_num[index].value > 0) {
                    goods_num[index].value--;
                    var money = money_first[index].innerHTML * goods_num[index].value;
                    money_after[index].innerHTML = money.toFixed(2);
                    getSum(sum_money);
                }
            })
        }
        for (var i = goods_num.length; i < parseInt(goods_num.length + goods_num2.length); i++) {
            let index = i - goods_num.length;
            let num = i;
            add[i].addEventListener('click', function () {
                goods_num2[index].value++;
                var money = money_first[num].innerHTML * goods_num2[index].value;
                money_after[num].innerHTML = money.toFixed(2);
                getSum(sum_money);
            })
            sub[i].addEventListener('click', function () {
                if (goods_num2[index].value > 0) {
                    goods_num2[index].value--;
                    var money = money_first[num].innerHTML * goods_num2[index].value;
                    money_after[num].innerHTML = money.toFixed(2);
                    getSum(sum_money);
                }
            })
        }
        // 计算价钱总和的函数
        function getSum(sum_money) {
            sum_money.innerHTML = '￥' + 0.00;
            var sum = 0;
            for (var i = 0; i < money_after.length; i++) {
                sum += parseInt(money_after[i].innerHTML);
            }
            sum_money.innerHTML = '￥' + sum.toFixed(2);
        }
    }
})