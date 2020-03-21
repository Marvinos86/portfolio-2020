var images = {
    slideshow_gayproject: [
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
    slideshow_gayproject_current_imgNumber: 0,

    slideshow_heteroproject: [
        "content/cases/gedel/d1.jpg",
        "content/cases/gedel/d2.jpg",
        "content/cases/gedel/d3.jpg",
        "content/cases/gedel/d4.jpg",
        "content/cases/gedel/d5.jpg"
    ],
    slideshow_heteroproject_current_imgNumber: 0,
};

var slideshowControls = {
    next: function(projectName) {

        if(!typeof projectName === "String"){
            console.error('projectName parameter is not a string');
        }

        var img = document.getElementById(projectName); 
        
        // Zet voor het gemak de huidige imagesnummer en totale image nummer weg in variabelen
        var currentImageNumber = images['slideshow_'+projectName+'_current_imgNumber'];
        var totalImagesNumber = images['slideshow_'+projectName].length;

        if(currentImageNumber < totalImagesNumber) {

            // verhoog de huidige image nummer met 1
            currentImageNumber++;

            // Schrijf de nieuwe huidige image nummer (zie hierboven) weg in de property
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;

            // haal de imagesrcpath op die correspondeert met het nieuwe nummertje
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