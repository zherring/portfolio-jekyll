var menuArray = [];

$('li').each(function(){
    menuArray.push(Math.round($(this).outerWidth(true)));
    });



var liIndex = $('li.active').index();
var placement = 0;

window.console.log(liIndex, placement);


var menuPlacement = function() {
    for (var i = 0; i <= liIndex; i++) {
        if (i < liIndex) {
            placement += menuArray[i];
            window.console.log("fired!");

        } else if (i === liIndex) {
            placement += Math.round(menuArray[i]/2);
            break;
        } else { break; }
    }
    window.console.log(placement, "inside");
    $('nav ul').css('left', function(){
        return ('calc(50% - ' + placement + ')');
    });
};

menuPlacement();

window.console.log(placement);
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
