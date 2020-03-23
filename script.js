var images = {
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

    slideshow_gedelproduct: [
        "content/cases/gedel/d1.jpg",
        "content/cases/gedel/d2.jpg",
        "content/cases/gedel/d3.jpg",
        "content/cases/gedel/d4.jpg",
        "content/cases/gedel/d5.jpg"
    ],
    slideshow_gedelproduct_current_imgNumber: 0,
};

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