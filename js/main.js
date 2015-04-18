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

            } else if (i === liIndex) {
                placement += Math.round(menuArray[i]/2);
                break;
            } else { break; }
        }
        $('nav ul').css('margin-left', -placement);
};

menuPlacement();

var activePane = function(e) {
    // correct the index so the child-of matches
    var childOf = e + 1;
    var activePanel = $('#panel-content > div:nth-child('+childOf+')');
    var panelSlide = e * 31 + "em";
    window.console.log(panelSlide);
    $('.panel').removeClass('active');
    $(activePanel).addClass('active');
    $('#panel-content').css('transform', 'translatex(-'+panelSlide+')');
};


$('nav li').click(function(){
    $('nav li').removeClass('active');
    $(this).addClass('active');
    var varClick = $(this).index();
    menuPlacement(varClick);
    activePane(varClick);
});
