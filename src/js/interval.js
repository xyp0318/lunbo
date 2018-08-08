define(["./lunbo"], function(lunbo) {
    lunbo.lunbo
    var interval = function(imgArr, liArr, num) {
        setInterval(function() {
            num++;
            if (num > imgArr.length - 1) num = 0;
            changeImg(num)
            changeNum(num)
        }, 2000)

        function changeImg(index) {
            imgArr.forEach(function(v, i) {
                imgArr[i].classList.remove("active")
                imgArr[index].classList.add("active")
            })
        }

        function changeNum(index) {
            liArr.forEach(function(v, i) {
                liArr[i].classList.remove("active")
                liArr[index].classList.add("active")
            })
        }
    }
    return {
        interval: interval
    }
})