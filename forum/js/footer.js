jQuery(document).ready(function () {

/* 下拉框宽度 */
    jQuery('ul.spinner').width(jQuery('button.spinner_btn').innerWidth());

/* 二维码 */
var code=jQuery('.code');
    jQuery('.w-q').click(function () {
        code.slideUp();
        jQuery('.code:eq(0)').slideToggle();
    });
    jQuery('.q-q').click(function () {
        code.slideUp();
        jQuery('.code:eq(2)').slideToggle();
    });
    jQuery('.contact_weixin').click(function () {
        code.slideUp();
        jQuery('.code:eq(1)').slideToggle();
    });

/* 关闭按钮 */
    jQuery('.close').click(function () {
        jQuery(this).parent().parent().slideUp();
    });
/* body最小宽度 */
    var minHeight=window.screen.availHeight-160;
    jQuery('body').css('min-height',minHeight+'px');

/* 去掉帖子列表最后一个分割线 */
    jQuery('.hot_con:last').addClass("bd_none");
    

/* 头像下拉菜单 */
    jQuery('.logged_in').click(function (e) {
        jQuery('#user_login_nav').slideToggle();
        e.stopPropagation();
    })
    jQuery(document).click(function () {
        jQuery('#user_login_nav').slideUp();
    })

    jQuery(":input:focus").css('outline','none!important');
    jQuery('.time:first').css('border-bottom','1px solid #cdcdcd').css('margin-bottom',10+'px').css('padding',0+'px');
    /* 去掉最后一个回复的下划线 */
    if(jQuery('.po.hin').length>=2){
        jQuery('.po.hin:last').addClass("bd_none");
    };
    jQuery(".posts-d:last").addClass("bd_none");
    var sbs=jQuery('.swiper-button-prev,.swiper-button-next');
    jQuery('.swiper-container').mouseenter(function(){
        sbs.show()
    });
    jQuery('.swiper-container').mouseleave(function(){
        sbs.hide()
    });

    /* 无回复去掉框 */
    jQuery('#friend_ul li,#friend_ul div').addClass('clearfix');
    if(jQuery('.postreply').length<=1){
        jQuery('.replay-top').css('display','none');
        jQuery('.replay-top').parents('.pl.bm').css('border-bottom-width',0+'px');
    }
    
   
 });
 jQuery('#fastpostsubmit').click(function(){
    if(jQuery('.postreply').length<=1){
        jQuery('.replay-top').css('display','none');
        jQuery('.replay-top').parents('.pl.bm').css('border-bottom-width',0+'px');
    }else{
        jQuery('.replay-top').css('display','block');
        jQuery('.replay-top').parents('.pl.bm').css('border-bottom-width',1+'px');
    }
 }
)
jQuery('.p_opt.cl').addClass('clearfix');
