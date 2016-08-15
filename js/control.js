var load_ed_imgs = function(o, e) {
    if (1 == has_loaded[o - 1])
        return void e();
    var s = 0
      , n = $("#" + o + " img").filter(function(o) {
        var e = $(this).attr("data-echo");
        return "undefined" != typeof e && e !== !1
    });
    $("#loading-screen").removeClass("dont-show"),
    $.each(n, function(o, a) {
        var t = $(a).attr("data-echo");
        void 0 != t && t != a.src && (a.src = t,
        $(a).load(function() {
            s++,
            s == n.length - 1 && e()
        }))
    })
}
  , has_loaded = [!1, !1, !1, !1, !1]
  , hf = function() {
    if (document.location.hash.length > 1) {
        var o = document.location.hash.replace("#", "").split("/")
          , e = $(".edition#" + o[0]);
        if (0 != e.length) {
            var s = o[1];
            e.addClass("active").removeClass("not-active"),
            $(".entries").addClass("show").removeClass("dont-show"),
            $(".edition").not(e).addClass("not-active").removeClass("active"),
            $("#navigation").addClass("show").removeClass("dont-show"),
            void 0 != s && ($(window).load(function(){})),
            load_ed_imgs(o[0], function() {
                has_loaded[o[0] - 1] = !0,
                $("#loading-screen").addClass("dont-show"),
                $(document).scrollTop($("#" + o[0]).offset().top - 40),
                void 0 != s && (console.log(s),
                $(document).scrollTop($("#" + s).offset().top),
                $(window).load(function() {
                    $(document).scrollTop($("#" + s).offset().top)
                }))
            })
        } else
            hp()
    } else
        $(".edition").removeClass("active").removeClass("not-active"),
        $("#navigation").addClass("dont-show").removeClass("show")
}
  , hp = function() {
    $(".entries").addClass("dont-show").removeClass("show"),
    $(".edition").addClass("active").removeClass("not-active"),
    $("#navigation").addClass("dont-show").removeClass("show")
}
;
$(document).ready(function() {
    hf(),
    $(".cover-photo").click(function(o) {
        document.location.hash = $(this).attr("id")
    })
}),
$(window).on("hashchange", function() {
    hf()
});
