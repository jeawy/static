jQuery(document).ready(function () {

    /* 下拉框宽度 */
    jQuery('ul.spinner').width(jQuery('button.spinner_btn').innerWidth());

    /* 输入字数监听 */
    jQuery("#posted-title").on('keyup input', function (event) {
        var val = jQuery(this).val();
        var len = val.length;
        var count = jQuery(this).siblings('span');
        if (len == 0) { count.text("0/50"); return; }
        if (len > 50) {
            len = 50;
            jQuery(this).val(val.substring(0, 50));
        }
        count.text(len + "/50");
    });

    /* 二维码hover动画 */
    jQuery('.w-q').mouseenter(function () {
        jQuery('.code_weixin').slideToggle();
    });
    jQuery('.w-q').mouseleave(function () {
        jQuery('.code_weixin').slideToggle();
    });



    jQuery(".q-q").mouseenter(function () {
        jQuery('.code_qq').slideToggle();
    });
    jQuery(".q-q").mouseleave(function () {
        jQuery('.code_qq').slideToggle();
    });

    /* 官方二维码 */
    jQuery('.contact_weixin').click(function () {
        jQuery('.qr_code_wrap').slideToggle();
    });
    jQuery('#close').click(function () {
        jQuery('.qr_code_wrap').slideUp();
    });
});
