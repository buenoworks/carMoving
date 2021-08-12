$(document).ready(function(){
    let info = $('.information');
    let road = $('.road');
    let car = $('.car');
    let mountain = $('.mountain');

    //keypress 13 is about enter!

    $(document).on('keypress', function(e){
        if(e.which == 13) {
            info.toggleClass('hidden');
            road.toggleClass('roading');
            car.toggleClass('racing');
            mountain.toggleClass('mountain-moving');
        }
    });
});