function animate(obj, target,callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var distance = (target - obj.offsetLeft) / 5;
        if(distance > 0){
            distance = Math.ceil(distance)
        }else{
            distance = Math.floor(distance)
        }
        obj.style.left = obj.offsetLeft + distance + 'px';
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            callback && callback();
        } 
    }, 40)
}