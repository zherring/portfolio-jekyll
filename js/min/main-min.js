var menuArray=[];$("li").each(function(){menuArray.push(Math.round($(this).outerWidth(!0)))});var menuPlacement=function(a){for(var e=$("li.active").index(),n=0,t=0;e>=t;t++){if(!(e>t)){if(t===e){n+=Math.round(menuArray[t]/2);break}break}n+=menuArray[t]}$("nav ul").css("margin-left",-n)};menuPlacement();var activePane=function(a){var e=a+1,n=$("#panel-content > div:nth-child("+e+")"),t=31*a+"em";window.console.log(t),$(".panel").removeClass("active"),$(n).addClass("active"),$("#panel-content").css("transform","translatex(-"+t+")")};$("nav li").click(function(){$("nav li").removeClass("active"),$(this).addClass("active");var a=$(this).index();menuPlacement(a),activePane(a)});