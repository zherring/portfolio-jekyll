var menuArray = [];

$('li').each(function(){
    menuArray.push(Math.round($(this).outerWidth(true)));
    });

//var liIndex = 0;

var menuPlacement = function(e) {
    var liIndex = $('li.active').index();
    var placement = 0;
    for (var i = 0; i <= liIndex; i++) {
        if (i < liIndex) {
            placement += menuArray[i];
            window.console.log("fired!");

        } else if (i === liIndex) {
            placement += Math.round(menuArray[i]/2);
            break;
        } else { break; }
    }
    window.console.log(placement, "placement", e);
    $('nav ul').css('margin-left', -placement);
};

menuPlacement();

var activePane = function(e) {
    $('#content-container > div').removeClass('active');
    $('#content-container > div:nth-child('+e+1+')').addClass('active');
};



$('nav li').click(function(){
    $('nav li').removeClass('active');
    $(this).addClass('active');
    var varClick = $(this).index();
    menuPlacement(varClick);
    activePane(varClick);
});
//window.console.log(placement);
// if (var index = 0; index < liIndex; index++) {
//     window.console.log("fired");
// }
//
// if (var i = 0; i <= liIndex; i++) {
//      placement += menuArray[i];
//     // window.console.log(menuArray[i]);
//     //   window.console.log("firing!");
// }
//
//
// window.console.log(placement);
// for (i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
// }
