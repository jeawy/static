/* 底部菜单点击显示隐藏二级菜单 */
jQuery('#forum').click(function(){
    jQuery('.hide-menu').toggle();
})

/* 底部菜单点击显示隐藏二级菜单 */
jQuery('#account').click(function(){
  jQuery('.hide-account-menu').toggle();
})

/* 回到顶部 */
window.onload = function(){
    var oTop = document.getElementById("to_top");
    var screenh = jQuery(window).height()/4;
    window.onscroll = function(){
      var scrolltop =document.documentElement.scrollTop;
      if(screenh<scrolltop){
        jQuery(oTop).show();
      }else{
        jQuery(oTop).hide();
      };
    };
    oTop.onclick = function(){
      document.documentElement.scrollTop = document.body.scrollTop =0;
    };

    /* 去掉帖子列表最后一个分割线 */
    jQuery('.post-summary:last,.thread-td:last').addClass("bd_none");
  };