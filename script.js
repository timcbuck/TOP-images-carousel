// Track images in images array and current image with the currentImageIndex
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
];
let currentImageIndex = 0;

// Change the image src
function autoChangeImage() {
    changeImageIndex('next');
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex]);

}

// Move to the next image (when right-arrow clicked)
function nextImage() {
    changeImageIndex('next');
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex]);
}

// Move to the previous image (when left-arrow clicked)
function previousImage() {
    changeImageIndex('previous');
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex])
}

function changeImageIndex(direction) {
    if (direction == 'next') {
        currentImageIndex++;
        if (currentImageIndex == 5) {
            currentImageIndex = 0;
        }
    } 
    if (direction == 'previous') {
        currentImageIndex--;
        if (currentImageIndex == -1) {
            currentImageIndex = 4;
        }
    }

}

// Initially loads image1.jpg
const pictureFrame = document.getElementById('picture-frame');
pictureFrame.setAttribute('src', '/images/image1.jpg'); 

// Calls function to change image src every 8 seconds
setInterval(autoChangeImage, 8000);

// Add function to change image when arrows are clicked
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
leftArrow.addEventListener('click', previousImage);
rightArrow.addEventListener('click', nextImage);