(function(a){a.tsem=function(d){var b=a.extend({url:"http://thethefly.com/",message:"Are you sure you want to quit this page?"},d),c='<iframe src="'+b.url+'" width="100%" height="100%" align="middle" frameborder="0"></iframe>';(function(e){e.onbeforeunload=function(){e.onbeforeunload=null;var f=a("<div></div>").attr("id","ExitSplashMainOuterLayer").css({position:"absolute",width:"100%",height:"100%",left:"0px",top:"0px"}).html(c);a("body").html(f).css({margin:"0px",overflow:"hidden"});return b.message};a("a").click(function(){e.onbeforeunload=null})})(window)}})(jQuery);