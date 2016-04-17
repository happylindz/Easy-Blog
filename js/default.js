/**
 * Created by Mac on 15/12/13.
 */


window.onload = function () {

    var tagA = document.getElementsByTagName("a");
    for(var i = 0,len = tagA.length;i < len;i++){

        tagA[i].addEventListener('touchstart', function (e) {
            var animTime = 0;
            setTimeout(function() {
                window.href = e.target.href;
            }, animTime);
        })

    }
};