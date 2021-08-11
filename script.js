$(document).ready(function(){
    let info = $('.information');
    let road = $('.road');
    let car = $('.car');
    let mountain = $('.mountain');

    //keypress
    $(document).on('keypress', function(e){
        // 13 is about enter!
        if(e.which == 13) {
            info.toggleClass('hidden');
            road.toggleClass('roading');
            car.toggleClass('racing');
            mountain.toggleClass('mountainMoving');
        }
    });
});