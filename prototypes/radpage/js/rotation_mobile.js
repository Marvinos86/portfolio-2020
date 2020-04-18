var time_start = " ";
var startX = " ";
var startY = " ";
    
var time_end = " ";
var endX = " ";
var endY = " ";
    
var t = " ";        // Time between startY and endY
var d = " ";       // Distance between startY and endY
var v = " ";        // Speed (velocity) of swipe

var debouncedTimeout, debouncedRotateback;
    

function swipeUpDown() {
    wiel = document.getElementById("wheel");
         
    wiel.addEventListener('touchstart', function (a) {
        a.preventDefault();
        time_start = a.timeStamp;
        startX = a.changedTouches[0].screenX;
        startY = a.changedTouches[0].screenY;
        console.log("TouchStart event gezien"); 
        
    });

    wiel.addEventListener('touchend', function (b) {
        
        time_end = b.timeStamp;
        endX = b.changedTouches[0].screenX;
        endY = b.changedTouches[0].screenY;
        // console.log("TouchEnd event gezien"); This works too!
        b.preventDefault();
     
        function swipeTime() {          // Get time
            t = time_end - time_start;
        }
        function swipeDistance() {  // Get distance
            d = endY - startY;
        }
        function swipeSpeed() {     // Get speed
            v = d / t;
        }
        
        swipeTime();
        swipeDistance();
        swipeSpeed();
        
        var speed = Math.abs(v);
        var speedInMilliseconds = 1000 * speed;
        var duration = 5 * speedInMilliseconds;     // Get fixed duration from speed
        
        function swipeDuration() {
            if (duration > 4000) { duration = 4000; }       // Setting max duration at 4 seconds
            if (duration < 1000) { duration = 1000; }       // Setting min duration at 1 second
        }
        swipeDuration();
        
                
        function getUpOrDown() {        // Check if swipe is going up or down
            if (v < 0) {
                rotateUp();
                console.log("Swipe up executed!");
                rotateArrowUp();           
            }
            if (v > 0) {
                rotateDown();
                console.log("Swipe down executed!");
                rotateArrowDown();
            }
        }
        getUpOrDown();
        
        
/////////////////// Rotate down //////////////////////
        
        function rotateDown() {       // Rotate clockwise at swipe down
            $("#imgWheel").rotate({
                duration: duration,
                angle: 0,
                animateTo: 1563,
                easing: $.easing.easeInOutElastic
            })    
            // WheelOfFortune.moveWheelOut();
            // WheelOfFortune.hideWelcome();
            WheelOfFortune.movePriceIn();   
            
            
       }
        function reboundDown() {
            $("#imgWheel").rotate({
                angle: 1563,
                animateTo: 1555,
                easing: $.easing.easeInOutElastic
            })
            console.log("Rebound down called");     
        }
        
        
/////////////////////// Rotate up ///////////////////////
        
        function rotateUp() {       // Rotate counter clockwise at swipe up   
            $("#imgWheel").rotate({
                duration: duration,
                angle: 1680,
                animateTo: 115,
                easing: $.easing.easeInOutElastic
            })
            // WheelOfFortune.moveWheelOut();
            // WheelOfFortune.hideWelcome();
            WheelOfFortune.movePriceIn();                                           
        }    
        function reboundUp() {
            $("#imgWheel").rotate({
                angle: 115,
                animateTo: 130, 
                easing: $.easing.easeInOutElastic,
            })
            console.log("Rebound up called");      
        }
        
        
/////////////////// Rotate arrow up /////////////////
        
        function rotateArrowUp() {          // Get called at getUpOrDown
            $("#imgArrow").transition({
                rotate: '+=30',
                easing: $.easing.easeInOutElastic,
            });
            console.log("Rotate arrow up executed!")
             
            var duration  = 3000, // In milliseconds
	       timesToFlip  = 50, 
	       timesFlipped = 0,
	       intervalDuration;
	 
	       intervalDuration = Math.round(duration / timesToFlip);
            console.log('start flip interval');1
            
	       var interval = window.setInterval(function() {
		      timesFlipped += 1;
		      if (timesFlipped == timesToFlip) {
			        window.clearInterval(interval);
                    resetArrowIfUp();      // Call reset arrow 
                    reboundUp();            // Call rebound wheel
		      } else {
		      flipArrowUp(); 
              }
	       }, intervalDuration);
	
            function flipArrowUp() { 
            $("#imgArrow").transition({
                    rotate: '-=10'
                    }, 2).transition({
                    rotate: '+=10'
                    }, 2);
            
                var audio = new Audio('audio/tik.mp3'); 
                audio.play();      
            }
            
            function resetArrowIfUp() {  
            $("#imgArrow").transition({ 
                rotate: '-=30',
                duration: 1000,
                easing: $.easing.easeInOutElastic, 
            })
            console.log("Reset executed!");
            }
        }
        
        
 /////////////// Rotate arrow down ////////////////////
        
        function rotateArrowDown() {        // Gets called at getUpOrDown
            $("#imgArrow").transition({ 
            rotate: '-=30',
            easing: $.easing.easeInOutElastic, 
            })
            console.log("Rotate arrow down executed!");
         
            
           var duration  = 3000, // Duration in milliseconds
	       timesToFlip  = 50, 
	       timesFlipped = 0,
	       intervalDuration;
	 
	       intervalDuration = Math.round(duration / timesToFlip);
            console.log('start flip interval'); 1
            
	       var interval = window.setInterval(function() {
		      timesFlipped += 1;
		      if (timesFlipped == timesToFlip) {
			         window.clearInterval(interval);
                    resetArrowIfDown();         // Call reset arrow 
                    reboundDown();              // Call rebound wheel
		      } else {
                    flipArrowDown();    
              }		      
	       }, intervalDuration); // end deffered object?
        
           function flipArrowDown() { 
                $("#imgArrow").transition({
                                  rotate: '+=10'
                                }, 2).transition({
                                  rotate: '-=10'
                                }, 2);
               
                var audio = new Audio('audio/tik.mp3'); 
                audio.play();
            }
            
            
            function resetArrowIfDown() { 
            $("#imgArrow").transition({ 
                rotate: '+=30',
                duration: 1000,
                easing: $.easing.easeInOutElastic, 
            })
            console.log("Reset executed!");
        }
            
        }
       
 });
}
