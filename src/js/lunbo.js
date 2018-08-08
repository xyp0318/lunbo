define(function() {
    var lunbo = function(imgArr, liArr, num, left, right) {
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

        setInterval(function() {
            num++;
            if (num > imgArr.length - 1) num = 0;
            changeImg(num)
            changeNum(num)
        }, 2000)
        liArr.forEach(function(val, k) {
            liArr[k].index = k
            val.onclick = function() {
                num = this.index;
                var that = this;
                imgArr.forEach(function(v, i) {
                    imgArr[i].classList.remove("active")
                    imgArr[that.index].classList.add("active")
                })
                liArr.forEach(function(v, i) {
                    liArr[i].classList.remove("active")
                    liArr[that.index].classList.add("active")
                })
            }
        })

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
        lunbo: lunbo,
        num: num
    }
})