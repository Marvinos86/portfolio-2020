/////////////////// Rotate down for desktop only //////////////////////
        
        function rotateDown() {       // Rotate clockwise at swipe down
            $("#imgWheel").rotate({
                duration: 4000,
                angle: 0,
                animateTo: 1565,
                easing: $.easing.easeInOutElastic
            })  
        rotateArrowDown();
        WheelOfFortune.movePriceIn(); 
        // WheelOfFortune.hideWelcome();
       }
        
        function reboundDown() {
            $("#imgWheel").rotate({
                angle: 1565,
                animateTo: 1555,
                easing: $.easing.easeInOutElastic
            })
            console.log("Rebound down called");     
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