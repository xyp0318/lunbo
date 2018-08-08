define(function() {
    var num = 0;
    var btn = function(imgArr, liArr, num, left, right) {
        left.onclick = function() {
            num--;
            if (num < 0) num = imgArr.length - 1;
            changeImg(num)
            changeNum(num)

        }
        right.onclick = function() {
            num++;
            if (num > imgArr.length - 1) num = 0;
            changeImg(num)
            changeNum(num)
        }

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
        btn: btn,
        num: num
    }
})