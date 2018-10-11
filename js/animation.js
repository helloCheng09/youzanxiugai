/**
 * 页面动画
 */
(function () {
    // 导航 滑动
    $(".nav-link").each(function () {
        $(this).hover(function () {
            var index = $(this).parent(".nav-item").index()
            var left = 84 * index + "px"

            switch (index) {
                case 0:
                    $(".nav-bar").css("width", "84px")
                    break
                case 1:
                    $(".nav-bar").css("width", "84px")
                    break
                case 2:
                    $(".nav-bar").css("width", "114px")
                    break
                case 3:
                    $(".nav-bar").css("width", "114px")
                    left = 84 * index + 32 + "px"
                    break
                case 4:
                    $(".nav-bar").css("width", "0px")
                    break
            }
            $(".nav-bar").css("left", left)
        })
    })

    // 导航 底色切换
    function navInit() {
        var height = $(".nav").offset().top
        if (height != 0) {
            $(".nav").css("backgroundColor", "#548dff")
        } else {
            $(".nav").css("backgroundColor", "transparent")
        }
    }
    
    // 调用
    navInit()
    $(window,document).scroll(function(){
        navInit()
    })

}())