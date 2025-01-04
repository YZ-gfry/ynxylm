$(document).ready(function() {
    headmenu(); //头部导航链接样式
});

//头部导航链接样式
function headmenu() {
    //顶部菜单
// 使用jQuery选择器，选择所有直接作为.menu类元素子元素的li元素中配置了drop的class类。
    $(".menu>li:drop").hover(
        // 当鼠标指针移动到匹配的li元素上时，这个函数会被触发。
        function() {
            // 使用jQuery的addClass方法为当前元素（即鼠标悬停的li元素）添加"index"类。指示它是当前活动或选中的菜单项。
            $(this).addClass("index");

            // 使用jQuery的find方法在当前元素内部查找所有具有.droplist类的元素。
            // 然后，使用slideDown方法为这些元素应用一个滑动向下的动画效果，
            // 使它们变得可见。动画的持续时间设置为250毫秒。
            $(this).find(".droplist").slideDown(250);
        },

        // 第二个函数是鼠标离开（mouseleave）事件的处理函数。
        // 当鼠标指针从匹配的li元素上移开时，这个函数会被触发，移除"index"类。
        function() {
            // 这将恢复该元素到其未选中或未活动状态的样式。
            $(this).removeClass("index");
            // 再次使用find方法在当前元素内部查找所有具有.droplist类的元素。
            // 然后，使用fadeOut方法为这些元素应用一个淡出的动画效果，
            // 使它们逐渐变得不可见。动画的持续时间也设置为250毫秒。
            $(this).find(".droplist").fadeOut(250);
        }
    );

    //顶部菜单弹出后,鼠标移动样式替换
    $(".droplist>li").hover(function() {
            //鼠标移动
            $(this).addClass("hover");
        },
        function() {
            //鼠标离开
            $(this).removeClass();
        });

}