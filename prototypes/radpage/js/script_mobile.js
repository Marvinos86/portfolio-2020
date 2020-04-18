// SCRIPT FOR MOBILE

 // Adjust elements for mobile
//function elementsForMobile() {        
//        $("#welkom").attr('class', 'welkom_mobile');
//        $("#welkom_text").attr('class', 'welkom_text_mobile');
//        $("#button1").attr('class', 'button1_mobile');
//        $("#button1_text").attr('class', 'button1_text_mobile');
//        
//        $("#game").attr('class', 'game_mobile');
//        $("#pijl").attr('class', 'pijl_mobile');
//        $("#turn").attr('class', 'turn_mobile');
//        $('#play_desktop').hide(); 
//        
//        $("#price").attr('class', 'price_mobile');
//        $("#deksel_kist").attr('class', 'deksel_kist_mobile');
//        $("#front_kist").attr('class', 'front_kist_mobile');
//        $("#price_card").attr('class', 'price_card_mobile');
//        $("#back_kist").attr('class', 'back_kist_mobile');
//        $("#desc").attr('class', 'desc_mobile');
//        
//        $("#img_deksel_kist").css({
//            width: "276px", 
//            height: "160px"
//        });
//        $("#img_front_kist").css({
//            width: "270px", 
//            height: "230px"
//        });
//        $("#img_back_kist").css({
//            width: "270px", 
//            height: "230px"
//        });
//        $("#price_image").css({
//            width: "200px", 
//            height: "100px"
//        });  
//        $("#img1").css({
//            width : "500px",
//            height : "500px"
//        });
//        $("#img2").css({
//            width : "90px",
//            height : "50px"
//        });
//        $("#img3").css({
//            width : "320px",
//            height : "250px"
//        });
//
//        console.log("Elements are adjusted for mobile."); 
//    }


// Hide start screen
//function goToGameMobile() {
//        $('#welkom').hide();
//        $('#welkom_text').hide();
//        $('#button1').hide();
//        $('#button1_text').hide();
//        showGameMobile();     
//}


//// Show up game
//var delayGameMobile;          
//function showGameMobile() {
//delayGameMobile = setTimeout(showUpGameMobile, 1000);      
//}
//function showUpGameMobile() {
//var elem = document.getElementById("game");   
//var pos = -200;
//var speed = setInterval(frame, 10);     // speed
//    function frame() {
//    if (pos == -70) {
//      clearInterval(speed);
//        unHideTurn();     
//    } else {
//      pos++; 
//       elem.style.left = pos + 'vw'; 
//    }
//    }
//}

//// Remove game after swipe
//var endGameMobile;                               
//function removeGameMobile() {
//    endGameMobile = setTimeout(stopGameMobile, 5000);  
//    console.log("remove game!");
//}       
//function stopGameMobile()  { 
//    var element = document.getElementById("game"); 
//    var pos = -70; 
//    var speed = setInterval(frame, 10); // speed
//    function frame() { 
//        if (pos == -200) { 
//            clearInterval(speed); 
//        } else {
//            pos--; 
//            element.style.left = pos + 'vw'; 
//        }
//      }
//}   

// Show price for mobile
var price2;     
function priceHandHeld() {
    price2 = setTimeout(animatePriceHandHeld, 6000);      
}     
function animatePriceHandHeld()  { 
    var element = document.getElementById("price"); 
    var pos = -200; 
    var speed = setInterval(frame, 0); // speed
function frame() { 
       if (pos == 0 ) { 
        clearInterval(speed); 
        flyingDekselMobile();
        flyingCardMobile();
    } else {
        pos++; 
        element.style.top = pos + 'vh'; 
    }
  }
}   
    
// Remove cover of chest 
var flyAway_mobile;
function flyingDekselMobile() {
    flyAway_mobile = setTimeout(removeDekselMobile, 1000);
}
function removeDekselMobile() { 
        $('#deksel_kist').animate({
            top : '-=100vh'
        });
}

// Show card with price
var gotPriceMobile;
function flyingCardMobile() {
    gotPrice = setTimeout(showCardMobile, 1500);
}
function showCardMobile() { 
        $('#price_card').animate({
            top : '-=25vh'
        });
}   

















