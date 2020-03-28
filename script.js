function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    } 

var images = {
    
// Images for slideshows projects
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
    
    slideshow_ecoachproduct: [
        "content/cases/coach/s1.jpg",
        "content/cases/coach/s2.jpg",
        "content/cases/coach/s3.jpg",
        "content/cases/coach/s4.jpg",
        "content/cases/coach/s5.jpg",
        "content/cases/coach/s6.jpg",
        "content/cases/coach/s7.jpg",
        "content/cases/coach/s8.jpg",
        "content/cases/coach/s9.jpg"
    ],
    slideshow_ecoachproduct_current_imgNumber: 0,
    
    slideshow_ecoachproces: [
        "content/cases/coach/c1.jpg",
        "content/cases/coach/c2.jpg",
        "content/cases/coach/c3.jpg",
        "content/cases/coach/c4.jpg",
        "content/cases/coach/c5.jpg",
        "content/cases/coach/c6.jpg",
        "content/cases/coach/c7.jpg",
        "content/cases/coach/c8.jpg",
        "content/cases/coach/c9.jpg",
        "content/cases/coach/c10.jpg",
        "content/cases/coach/c11.jpg",
        "content/cases/coach/c12.jpg",
        "content/cases/coach/c13.jpg",
        "content/cases/coach/c14.jpg",
        "content/cases/coach/c15.jpg",
        "content/cases/coach/c16.jpg",
        "content/cases/coach/c17.jpg",
        "content/cases/coach/c18.jpg",
        "content/cases/coach/c19.jpg"
    ],
    slideshow_ecoachproces_current_imgNumber: 0,
    
    slideshow_radproduct: [
        "content/cases/rad/p1.jpg",
        "content/cases/rad/p2.jpg"
    ],
    slideshow_radproduct_current_imgNumber: 0,
    
    slideshow_radproces: [
        "content/cases/rad/s1.jpg",
        "content/cases/rad/s2.jpg",
        "content/cases/rad/s3.jpg",
        "content/cases/rad/s4.jpg",
        "content/cases/rad/s5.jpg",
        "content/cases/rad/s6.jpg",
        "content/cases/rad/s7.jpg",
        "content/cases/rad/s8.jpg"
    ],
    slideshow_radproces_current_imgNumber: 0,
    
    slideshow_vdsproduct: [
        "content/cases/vds/y1.jpg",
        "content/cases/vds/y2.jpg",
        "content/cases/vds/y3.jpg",
        "content/cases/vds/y4.jpg",
        "content/cases/vds/y5.jpg"
    ],
    slideshow_vdsproduct_current_imgNumber: 0,
    
    slideshow_vdsproces: [
        "content/cases/vds/q1.jpg",
        "content/cases/vds/q2.jpg",
        "content/cases/vds/q3.jpg",
        "content/cases/vds/q4.jpg",
        "content/cases/vds/q5.jpg",
        "content/cases/vds/q6.jpg",
        "content/cases/vds/q7.jpg",
        "content/cases/vds/q8.jpg",
        "content/cases/vds/q9.jpg",
        "content/cases/vds/q10.jpg",
        "content/cases/vds/q11.jpg",
        "content/cases/vds/q12.jpg"
    ],
    slideshow_vdsproces_current_imgNumber: 0,
    
    // Images for slideshows skills
    
    slideshow_userresearch: [
        "content/skills/userresearch/a1.jpg", 
        "content/skills/userresearch/a2.jpg", 
        "content/skills/userresearch/a3.jpg", 
        "content/skills/userresearch/a4.jpg", 
        "content/skills/userresearch/a5.jpg", 
        "content/skills/userresearch/a6.jpg", 
        "content/skills/userresearch/a7.jpg", 
        "content/skills/userresearch/a8.jpg", 
        "content/skills/userresearch/a9.jpg", 
        "content/skills/userresearch/a10.jpg" 
    ],
    slideshow_userresearch_current_imgNumber: 0,
    
    slideshow_infodesign: [
        "content/skills/informationdesign/b1.jpg", 
        "content/skills/informationdesign/b2.jpg", 
        "content/skills/informationdesign/b3.jpg" 
    ],
    slideshow_infodesign_current_imgNumber: 0,
    
    slideshow_interfacedesign: [
        "content/skills/interfacedesign/c1.jpg", 
        "content/skills/interfacedesign/c2.jpg", 
        "content/skills/interfacedesign/c3.jpg", 
        "content/skills/interfacedesign/c4.jpg", 
        "content/skills/interfacedesign/c5.jpg", 
        "content/skills/interfacedesign/c6.jpg", 
        "content/skills/interfacedesign/c7.jpg", 
        "content/skills/interfacedesign/c8.jpg"
    ],
    slideshow_interfacedesign_current_imgNumber: 0,

    slideshow_interactiondesign: [
        "content/skills/interactiondesign/d1.jpg", 
        "content/skills/interactiondesign/d2.jpg", 
        "content/skills/interactiondesign/d3.jpg", 
        "content/skills/interactiondesign/d4.jpg", 
        "content/skills/interactiondesign/d5.jpg", 
        "content/skills/interactiondesign/d6.jpg", 
        "content/skills/interactiondesign/d7.jpg"
    ],
    slideshow_interactiondesign_current_imgNumber: 0,
    
    slideshow_prototyping: [
        "content/skills/prototyping/f1.jpg", 
        "content/skills/prototyping/f2.jpg", 
        "content/skills/prototyping/f3.jpg", 
        "content/skills/prototyping/f4.jpg"
    ],
    slideshow_prototyping_current_imgNumber: 0,
    
    slideshow_usertesting: [
        "content/skills/usertesting/g1.jpg", 
        "content/skills/usertesting/g2.jpg", 
        "content/skills/usertesting/g3.jpg", 
        "content/skills/usertesting/g4.jpg", 
        "content/skills/usertesting/g5.jpg", 
        "content/skills/usertesting/g6.jpg"
    ],
    slideshow_usertesting_current_imgNumber: 0,
    
    slideshow_visualdesign: [
        "content/skills/visualdesign/v1.jpg", 
        "content/skills/visualdesign/v2.jpg", 
        "content/skills/visualdesign/v3.jpg", 
        "content/skills/visualdesign/v4.jpg", 
        "content/skills/visualdesign/v5.jpg", 
        "content/skills/visualdesign/v6.jpg", 
        "content/skills/visualdesign/v7.jpg", 
        "content/skills/visualdesign/v8.jpg", 
        "content/skills/visualdesign/v9.jpg", 
        "content/skills/visualdesign/v10.jpg", 
        "content/skills/visualdesign/v11.jpg", 
        "content/skills/visualdesign/v12.jpg", 
        "content/skills/visualdesign/v13.jpg", 
        "content/skills/visualdesign/v14.jpg", 
        "content/skills/visualdesign/v15.jpg", 
        "content/skills/visualdesign/v16.jpg", 
        "content/skills/visualdesign/v17.jpg"
    ],
    slideshow_visualdesign_current_imgNumber: 0,
    
    slideshow_frontend: [
        "content/skills/frontend/h1.jpg", 
        "content/skills/frontend/h2.jpg", 
        "content/skills/frontend/h3.jpg", 
        "content/skills/frontend/h4.jpg", 
        "content/skills/frontend/h5.jpg", 
        "content/skills/frontend/h6.jpg", 
        "content/skills/frontend/h7.jpg", 
        "content/skills/frontend/h8.jpg", 
        "content/skills/frontend/h9.jpg", 
        "content/skills/frontend/h10.jpg", 
        "content/skills/frontend/h11.jpg", 
        "content/skills/frontend/h12.jpg", 
        "content/skills/frontend/h13.jpg", 
        "content/skills/frontend/h14.jpg", 
        "content/skills/frontend/h15.jpg"
    ],
    slideshow_frontend_current_imgNumber: 0,
    
    slideshow_animation: [
        "content/skills/3ddesign/t1.jpg", 
        "content/skills/3ddesign/t2.jpg", 
        "content/skills/3ddesign/t3.jpg", 
        "content/skills/3ddesign/t4.jpg", 
        "content/skills/3ddesign/t5.jpg", 
        "content/skills/3ddesign/t6.jpg", 
        "content/skills/3ddesign/t7.jpg", 
        "content/skills/3ddesign/t8.jpg", 
        "content/skills/3ddesign/t9.jpg", 
        "content/skills/3ddesign/t10.jpg", 
        "content/skills/3ddesign/t11.jpg", 
        "content/skills/3ddesign/t12.jpg", 
        "content/skills/3ddesign/t13.jpg", 
        "content/skills/3ddesign/t14.jpg", 
        "content/skills/3ddesign/t15.jpg"
    ],
    slideshow_animation_current_imgNumber: 0,
    
};

// Functions for controling slideshows
var slideshowControls = {
    next: function(projectName) {

        if(!typeof projectName === "String"){
            console.error('projectName parameter is not a string');
        }

        var img = document.getElementById(projectName); 
        var currentImageNumber = images['slideshow_'+projectName+'_current_imgNumber'];
        var totalImagesNumber = images['slideshow_'+projectName].length + -1;

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
        var totalImagesNumber = images['slideshow_'+projectName].length + -1;

        if(currentImageNumber > 0) {
            currentImageNumber--;
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;
            img.src= images['slideshow_'+projectName][currentImageNumber];
        }
        else  { 
            currentImageNumber = totalImagesNumber;
            images['slideshow_'+projectName+'_current_imgNumber'] = currentImageNumber;
            img.src= images['slideshow_'+projectName][currentImageNumber];
        };    
    }
};

// Toggle product or proces
function ToggleProductProces(event){
    
    // Get product or proces property of button
    var projectButton = event.currentTarget.dataset.project;

    // Get id of the parnet container
    var projectContainer = event.currentTarget.parentElement.id;

    // Get references for product & proces child containers
    var productSlideshow = $('#'+projectContainer+' #product-'+projectContainer);
    var procesSlideshow = $('#'+projectContainer+' #proces-'+projectContainer);

    // Toggle slideshow (for a single 'toggle' button)
    // if (productSlideshow.is(":visible")) { 
    //     productSlideshow.hide();
    //     procesSlideshow.show();
    // }
    // else {
    //     productSlideshow.show();
    //     procesSlideshow.hide();
    // }   

    // Toggle slideshow #2 (for two buttons)
    if(projectButton === "product"){
        productSlideshow.show();
        procesSlideshow.hide();
    } else {
        productSlideshow.hide();
        procesSlideshow.show();
    }

}

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

// E-coach App: hide/show product/proces
function ShowProductEcoach() {
 $("#proces-ecoach").css("display", "none");
 $("#product-ecoach").css("display", "block");
}
function ShowProcesEcoach() {
 $("#product-ecoach").css("display", "none");
 $("#proces-ecoach").css("display", "block");
}

// Rad van Fortuin 
function ShowProductRad() {
 $("#proces-rad").css("display", "none");
 $("#product-rad").css("display", "block");
}
function ShowProcesRad() {
 $("#product-rad").css("display", "none");
 $("#proces-rad").css("display", "block");
}

// VDS
function ShowProductVds() {
 $("#proces-vds").css("display", "none");
 $("#product-vds").css("display", "block");
}
function ShowProcesVds() {
 $("#product-vds").css("display", "none");
 $("#proces-vds").css("display", "block");
}



window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
  console.log("Mobile detected")

};













