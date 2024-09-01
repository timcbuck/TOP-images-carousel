// Track images in images array and current image with the currentImageIndex
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
];
let currentImageIndex = 0;
let intervalId;

// Change the image src
function autoChangeImage() {
    changeImageIndex('next');
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex]);
    changeIndicator();
}

// Move to the next image (when right-arrow clicked)
function nextImage() {
    changeImageIndex('next');
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex]);
    changeIndicator();
    resetInterval();
}

// Move to the previous image (when left-arrow clicked)
function previousImage() {
    changeImageIndex('previous');
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex]);
    changeIndicator();
    resetInterval();
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

function changeIndicator() {
    // Remove the active indicator class from the previously active image
    const indicators = document.getElementsByClassName('indicator');
    const indicatorsArray = [...indicators];
    indicatorsArray.forEach(indicator => {
        indicator.classList.remove('active-indicator');
    });
    // Add the active indicator class to the current active image
    const indicator = document.getElementById('indicator-' + currentImageIndex);
    indicator.classList.add('active-indicator');
}

function changeImageOnIndicator(event) {
    resetInterval();
    const imageIndex = event.target.id.slice(-1); // last character of element id is the image index
    currentImageIndex = imageIndex; // change the global image index tracker
    pictureFrame.setAttribute('src', '/images/' + images[currentImageIndex]);
    changeIndicator();
}

function resetInterval() {
    if(intervalId) {
        // Stop the auto image changer timer
        clearInterval(intervalId);
    }
    // Start the auto iamge changer timer again
    intervalId = setInterval(autoChangeImage, 5000);
}

// Initially loads image1.jpg
const pictureFrame = document.getElementById('picture-frame');
pictureFrame.setAttribute('src', '/images/image1.jpg'); 

// Add function to change image when arrows are clicked
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
leftArrow.addEventListener('click', previousImage);
rightArrow.addEventListener('click', nextImage);

// Add functions to change image when indicators are clicked
const indicators = document.getElementsByClassName('indicator');
const indicatorsArray = [...indicators];
indicatorsArray.forEach(indicator => {
    indicator.addEventListener('click', changeImageOnIndicator);
});

// Initial start of function to change image src every 8 seconds
intervalId = setInterval(autoChangeImage, 5000);