// Images for project slideshows
var images = {
    slideshow_gedelproduct: [
        "content/cases/gedel/d1.jpg",
        "content/cases/gedel/d2.jpg",
        "content/cases/gedel/d3.jpg",
        "content/cases/gedel/d4.jpg",
        "content/cases/gedel/d5.jpg"
    ],
    slideshow_gedelproduct_current_imgNumber: 0,
    
    slideshow_gedelproces: [
        "content/cases/gedel/c1.jpg",
        "content/cases/gedel/c2.jpg",
        "content/cases/gedel/c3.jpg",
        "content/cases/gedel/c4.jpg",
        "content/cases/gedel/c5.jpg",
        "content/cases/gedel/c6.jpg",
        "content/cases/gedel/c7.jpg",
        "content/cases/gedel/c8.jpg",
        "content/cases/gedel/c9.jpg",
        "content/cases/gedel/c10.jpg"
    ],
    slideshow_gedelproces_current_imgNumber: 0,
    
    slideshow_pantryproduct: [
        "content/cases/pantry/p1.jpg",
        "content/cases/pantry/p2.jpg",
        "content/cases/pantry/p3.jpg",
        "content/cases/pantry/p4.jpg",
        "content/cases/pantry/p5.jpg"
    ],
    slideshow_pantryproduct_current_imgNumber: 0,
    
    slideshow_pantryproces: [
        "content/cases/pantry/d1.jpg",
        "content/cases/pantry/d2.jpg",
        "content/cases/pantry/d3.jpg",
        "content/cases/pantry/d4.jpg",
        "content/cases/pantry/d5.jpg",
        "content/cases/pantry/d6.jpg",
        "content/cases/pantry/d7.jpg",
        "content/cases/pantry/d8.jpg",
        "content/cases/pantry/d9.jpg",
        "content/cases/pantry/d10.jpg"
    ],
    slideshow_pantryproces_current_imgNumber: 0, 
    
    slideshow_demoproduct: [
        "content/cases/demo/p1.jpg",
        "content/cases/demo/p2.jpg",
        "content/cases/demo/p3.jpg",
        "content/cases/demo/p4.jpg"
    ],
    slideshow_demoproduct_current_imgNumber: 0,
    
    slideshow_demoproces: [
        "content/cases/demo/d1.jpg",
        "content/cases/demo/d2.jpg",
        "content/cases/demo/d3.jpg",
        "content/cases/demo/d4.jpg",
        "content/cases/demo/d5.jpg",
        "content/cases/demo/d6.jpg",
        "content/cases/demo/d7.jpg",
        "content/cases/demo/d8.jpg"
    ],
    slideshow_demoproces_current_imgNumber: 0, 
    
    
};

// Functions for controling slideshows
var slideshowControls = {
    next: function(projectName) {

        if(!typeof projectName === "String"){
            console.error('projectName parameter is not a string');
        }

        var img = document.getElementById(projectName); 
        var currentImageNumber = images['slideshow_'+projectName+'_current_imgNumber'];
        var totalImagesNumber = images['slideshow_'+projectName].length;

        if(currentImageNumber < totalImagesNumber) {
            currentImageNumber++;
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;
            img.src= images['slideshow_'+projectName][currentImageNumber]; 
        }
        else  { 
            currentImageNumber = 0;
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;
            img.src= images['slideshow_'+projectName][currentImageNumber]; 
        };
    },
    prev: function(projectName) {

        if(!typeof projectName === "String"){
            console.error('projectName parameter is not a string');
        }

        var img = document.getElementById(projectName);
        var currentImageNumber = images['slideshow_'+projectName+'_current_imgNumber'];
        var totalImagesNumber = images['slideshow_'+projectName].length;

        if(currentImageNumber < totalImagesNumber) {
            currentImageNumber--;
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;
            img.src= images['slideshow_'+projectName][currentImageNumber];
        }
        else  { 
            currentImageNumber = 0;
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;
            img.src= images['slideshow_'+projectName][currentImageNumber];
        };    
    }
};

// Gedelegeerden App: hide/show product/proces
function ShowProductGedel() {
 $("#proces-gedel").css("display", "none");
 $("#product-gedel").css("display", "block");
}
function ShowProcesGedel() {
 $("#product-gedel").css("display", "none");
 $("#proces-gedel").css("display", "block");
}

// Pantry App: hide/show product/proces
function ShowProductPantry() {
 $("#proces-pantry").css("display", "none");
 $("#product-pantry").css("display", "block");
}
function ShowProcesPantry() {
 $("#product-pantry").css("display", "none");
 $("#proces-pantry").css("display", "block");
}

// Demo Pagina: hide/show product/proces
function ShowProductDemo() {
 $("#proces-demo").css("display", "none");
 $("#product-demo").css("display", "block");
}
function ShowProcesDemo() {
 $("#product-demo").css("display", "none");
 $("#proces-demo").css("display", "block");
}











