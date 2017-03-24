var advantage_list = document.querySelectorAll(".advantage");
var reason_text = document.querySelector(".reason__col");
var THROTTLE_DELAY = 100;

var isBottomReached = function() {
    var advantagePosition = advantage_list[0].getBoundingClientRect();
    return advantagePosition.top - window.innerHeight + 100 <= 0;
};


var isBottomFirstLineReached = function() {
    var advantagePosition = advantage_list[3].getBoundingClientRect();
    return advantagePosition.top - window.innerHeight + 100 <= 0;
};


var isBottomReasonReached = function() {
    var reasonPosition = reason_text.getBoundingClientRect();
    return reasonPosition.top - window.innerHeight + 400 <= 0;
};

var setScrollEnabled = function() {
    var lastCall = Date.now();



    window.addEventListener('scroll', function(evt) {

        if (Date.now() - lastCall >= THROTTLE_DELAY) {


            if (isBottomReached()) {

                advantage_list[0].classList.add("animated");
                advantage_list[0].classList.add("bounceInLeft");


                advantage_list[2].classList.add("animated");
                advantage_list[2].classList.add("bounceInRight");
            }

            if (isBottomFirstLineReached()) {

                advantage_list[3].classList.add("animated");
                advantage_list[3].classList.add("bounceInLeft");

                advantage_list[5].classList.add("animated");
                advantage_list[5].classList.add("bounceInRight");
            }

            if (isBottomReasonReached()) {

                reason_text.classList.add("animated");
                reason_text.classList.add("bounceInRight");

            }
            lastCall = Date.now();


        }
    });

};


setScrollEnabled();
