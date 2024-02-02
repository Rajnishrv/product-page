// for black
function black() {
    var smallImages = document.querySelectorAll('.small-images img');
     var mainImage = document.getElementById('imagebox');

    smallImages.forEach(function(img) {
        // img.src = img.src.replace('White' || 'Blue' || 'Natural', 'Black');
        img.src = img.src.replace('White', 'Black');
        img.src = img.src.replace('Natural', 'Black');
        img.src = img.src.replace('Blue', 'Black');
    });

    //  mainImage.src = mainImage.src.replace('White' || 'Blue' || 'Natural', 'Black');
    mainImage.src = mainImage.src.replace('White', 'Black');
    mainImage.src = mainImage.src.replace('Natural', 'Black');
    mainImage.src = mainImage.src.replace('Blue', 'Black');
}

// for white
function white() {
    var smallImages = document.querySelectorAll('.small-images img');
     var mainImage = document.getElementById('imagebox');

    smallImages.forEach(function(img) {
        // img.src = img.src.replace('Black'|| 'Blue'|| 'Natural', 'White');
        img.src = img.src.replace('Black', 'White');
        img.src = img.src.replace('Natural', 'White');
        img.src = img.src.replace('Blue', 'White');
    });

    //  mainImage.src = mainImage.src.replace('Black'|| 'Blue'|| 'Natural', 'White');
    mainImage.src = mainImage.src.replace('Black', 'White');
    mainImage.src = mainImage.src.replace('Natural', 'White');
    mainImage.src = mainImage.src.replace('Blue', 'White');
}

// for blue
function blue() {
    var smallImages = document.querySelectorAll('.small-images img');
     var mainImage = document.getElementById('imagebox');

    smallImages.forEach(function(img) {
        // img.src = img.src.replace('Black'|| 'White'|| 'Natural', 'Blue');
        img.src = img.src.replace('Black', 'Blue');
        img.src = img.src.replace('Natural', 'Blue');
        img.src = img.src.replace('White', 'Blue');
    });

    //  mainImage.src = mainImage.src.replace('Black'|| 'White'|| 'Natural', 'Blue');
     mainImage.src = mainImage.src.replace('Black', 'Blue');
     mainImage.src = mainImage.src.replace('Natural', 'Blue');
     mainImage.src = mainImage.src.replace('White', 'Blue');
}

// for natural
function natural() {
    var smallImages = document.querySelectorAll('.small-images img');
     var mainImage = document.getElementById('imagebox');

    smallImages.forEach(function(img) {
        // img.src = img.src.replace('Black'|| 'White'|| 'Blue', 'Natural');
        img.src = img.src.replace('Black', 'Natural');
        img.src = img.src.replace('White', 'Natural');
        img.src = img.src.replace('Blue', 'Natural');
    });

    //  mainImage.src = mainImage.src.replace('Black'|| 'White'|| 'Blue', 'Natural');
    mainImage.src = mainImage.src.replace('Black', 'Natural');
    mainImage.src = mainImage.src.replace('White', 'Natural');
    mainImage.src = mainImage.src.replace('Blue', 'Natural');
}

function imgChange(smallImg){
    var fullImg = document.getElementById("imagebox");
    fullImg.src  = smallImg.src
 };