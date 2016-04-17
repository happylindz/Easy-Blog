

var lightBox = function () {
    self = this;
    //获取body节点
    this.bodyNode = $(document.body);

    //获取屏幕的宽高
    this.winWidth = $(window).width();
    this.winHeight = $(window).height();

    //创建遮罩
    this.mask = $('<div class="mask">');
    this.mask.hide();
    this.bodyNode.append(this.mask);
    this.mask.click(function(){

        $(this).fadeOut(400);
        self.popUp.fadeOut(400);

    });

    //创建弹出层
    this.popUp = $('<div class="popup"><img></div>');
    this.popUp.hide();
    this.bodyNode.append(this.popUp);
    this.popUp.click(function () {
        $(this).fadeOut(400);
        self.mask.fadeOut(400);
    });

    this.img = $(".popup img");

}

lightBox.prototype = {

    clickPic: function () {

        var $img = $('.lightbox');
        $img.click(function () {
            var src = $(this).attr("src");
            self.mask.fadeIn(400);
            self.beforeLoadPic(src);
        });
    },

    loadPic: function (src,callback) {
        var image = new Image();
        if (!!window.ActiveXObject){
            image.onreadystatechange = function () {
                if (this.readyState == "complete") {
                    callback();
                }
            }
        }else{
            image.onload = function () {
                callback();
            }
        }
        image.src = src;
    },

    //加载图片之前
    beforeLoadPic: function (src) {

        self.img.css({
            width:"auto",
            height:"auto"
        }).hide();
        var winWidth = self.winWidth;
        var winHeight = self.winHeight;
        self.popUp.css({

            width:winWidth/2,
            height:winHeight/2,
            marginLeft:-winWidth/4,
            left:'50%',
            top:-winHeight/2

        }).fadeIn(0).animate({
            top:winHeight/4

        },400, function () {

            self.loadPic(src, function () {


                self.img.attr("src",src);

                //获取图片的宽高
                var picWidth = self.img.width();
                var picHeight = self.img.height();

                //对设备进行判断:若设备宽度小于图片宽度,则图片宽度为设备宽度
                if (self.winWidth < picWidth){
                    picWidth = self.winWidth;
                    picHeight *=  picWidth / self.img.width();
                }else if (picWidth > 800){    //
                    picWidth = 800;
                    picHeight *= 800/self.img.width();
                }else if (picHeight > 600){
                    picHeight = 600;
                    picWidth *= 600/self.img.height();
                }
                self.changePic(picWidth,picHeight);


            });
        });
    },
    changePic: function(width,height){


        self.popUp.animate({

            width:width,
            height:height,
            marginLeft:-(width/2),
            top:(self.winHeight-height)/2

        }, function () {

            var $img = self.popUp.find('img');
            $img.css({

                width:width,
                height:height

            }).fadeIn();

        });
    }


}

