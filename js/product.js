window.addEventListener('load', function () {
    // 放大镜效果 start
    var small = document.querySelector('.box_outer');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.pic_b');
    var bigtu = document.querySelector('.bigtu');

    small.addEventListener('mouseenter', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    small.addEventListener('mouseleave', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    small.addEventListener('mousemove', function (e) {
        var x = e.pageX - 159;
        var y = e.pageY - 234;
        if (x < mask.offsetWidth / 2) {
            x = mask.offsetWidth / 2;
        } else if (x > (small.offsetWidth - mask.offsetWidth + mask.offsetWidth / 2)) {
            x = (small.offsetWidth - mask.offsetWidth + mask.offsetWidth / 2);
        }
        if (y < mask.offsetHeight / 2) {
            y = mask.offsetHeight / 2;
        } else if (y > (small.offsetHeight - mask.offsetHeight + mask.offsetHeight / 2)) {
            y = (small.offsetHeight - mask.offsetHeight + mask.offsetHeight / 2);
        }
        mask.style.left = x - mask.offsetWidth / 2 + 'px';
        mask.style.top = y - mask.offsetHeight / 2 + 'px';
        var bigmax = bigtu.offsetWidth - big.offsetWidth;
        var smallmax = small.offsetWidth - mask.offsetWidth;
        xx = (x - mask.offsetWidth / 2) * bigmax / smallmax;
        yy = (y - mask.offsetHeight / 2) * bigmax / smallmax;
        bigtu.style.left = -xx + 'px';
        bigtu.style.top = -yy + 'px';
    })
    // 放大镜效果 end

    // 购买件数增减功能 start
    var num = document.querySelector('.as_num');
    var add = document.querySelector('.add');
    var subtraction = document.querySelector('.subtraction');
    add.addEventListener('click', function () {
        num.value++;
    })
    subtraction.addEventListener('click', function () {
        if (num.value > 0) {
            num.value--;
        }
    })
    // 购买件数增减功能 end

    // tab栏切换功能 start
    var lis = document.querySelector('.tab_ul').children;
    var goods_content = document.querySelector('.goods_content');
    var text = ['分辨率：1920*1080(FHD)<br>后置摄像头：1200万像素<br>前置摄像头：500万像素<br>核&nbsp;&nbsp;&nbsp;&nbsp;数：其他<br>频 率：以官网信息为准<br>品牌： Apple 关注<br>商品名称：APPLEiPhone 6s Plus<br>商品编号：1861098<br>商品毛重：0.51kg<br>商品产地：中国大陆<br>热点：指纹识别，Apple Pay，金属机身，拍照神器<br>系统：苹果（IOS）<br>像素：1000-1600万<br>机身内存：64GB',
                '主体<br>额定容量<br>5.1V 1A<br>品牌<br>其他<br>颜色<br>白色<br>型号<br>L2<br>电池容量（mAh<br>10000mAh',
                '品优购平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！<br>注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！',
                '此处省略50000条评价',
                '手机社区']
    for(let i = 0; i < lis.length; i++){
        lis[i].addEventListener('click',function(){
            let index = i;
            for(let i =0; i < lis.length; i++){
                lis[i].className = '';
            }
            this.className = 'tab_choose';
            goods_content.innerHTML = text[index]
        })
    }
    // tab栏切换功能 end
})