// SCRIPT FOR DESKTOP

// Adjust elements for desktop
function elementsForDesktop() {     
        $("#img1").css({
                width : "900px",
                height : "900px"
            });
         $("#img2").css({
                width : "120px",
                height : "60px"
            });
        $("#img3").css({
            width : "120px",
            height : "50px"
        });
        $("#mobile-view").attr('class', 'desktop-view');
        document.getElementById("desktop-view").appendChild( 
        document.getElementById("price")); 
    
        console.log("Elements are adjusted for desktop");
    }

// Hiding start screen
function goToGame() {       
        $('#welkom').hide();
        $('#welkom_text').hide();
        $('#button1').hide();
        $('#button1_text').hide();
        showGame(); 
}

// Show up game
var delayGame;          
function showGame() {
delayGame = setTimeout(animateComingGame, 1000);      
}
function animateComingGame() {
var elem = document.getElementById("game");   
var pos = -100;
var speed = setInterval(frame, 30);     // speed 
    function frame() {
    if (pos == -30) {
      clearInterval(speed);
        unHideTurn();     
        unHidePlay(); 
    } else {
      pos++; 
       elem.style.left = pos + 'vw'; 
    }
    }
}    

// Remove game after swipe
var endGame;                                             
function removeGame() {
    endGame = setTimeout(stopGame, 5000);  
    console.log("remove game!");
}       
function stopGame()  { 
    var element = document.getElementById("game"); 
    var pos = -30; 
    var speed = setInterval(frame, 30); // speed
    function frame() { 
        if (pos == -100) { 
            clearInterval(speed); 
        } else {
            pos--; 
            element.style.left = pos + 'vw'; 
        }
      }
}    

// Show price for desktop
var price1;     
function priceDesktop() {
    price1 = setTimeout(animatePriceDesktop, 6000);      
}       
function animatePriceDesktop()  { 
    var element = document.getElementById("price"); 
    var pos = -200; 
    var speed = setInterval(frame, 0); // speed
function frame() {  
      if (pos == 10) { 
        clearInterval(speed); 
        flyingDeksel();
        flyingCard();
    } else {
        pos++ 
        element.style.top = pos + 'vh'; 
    }
  }
}   

// Removing cover of chest
var flyAway;
function flyingDeksel() {
    flyAway = setTimeout(removeDeksel, 1000);
}
function removeDeksel() { 
        $('#deksel_kist').animate({
            top : '-=100vh'
        });
}

// Showing card with price
var gotPrice;
function flyingCard() {
    gotPrice = setTimeout(showCard, 1500);
}
function showCard() { 
        $('#price_card').animate({
            top : '-=35vh'
        });
}





