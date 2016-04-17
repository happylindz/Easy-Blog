/**
 * Created by Mac on 15/12/13.
 */


window.onload = function () {
    var height = window.screen.availHeight;
    var container = document.getElementById("container");
    container.style.height = height - 1000 + 'px';
    console.log(container.style.height);

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