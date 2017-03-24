var advantage_list = document.querySelectorAll(".advantage");
var THROTTLE_DELAY = 100;

var isBottomReached = function() {
    var advantagePosition = advantage_list[0].getBoundingClientRect();
    return advantagePosition.top - window.innerHeight + 100 <= 0;
};


var isBottomFirstLineReached = function() {
    var advantagePosition = advantage_list[3].getBoundingClientRect();
    return advantagePosition.top - window.innerHeight + 100 <= 0;
};


var setScrollEnabled = function() {
  var lastCall = Date.now();
  console.log("1");


    window.addEventListener('scroll', function(evt) {
        console.log("2");
      if (Date.now() - lastCall >= THROTTLE_DELAY)   {
        console.log("now");

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
            lastCall = Date.now();
              }
          });

};


setScrollEnabled();
