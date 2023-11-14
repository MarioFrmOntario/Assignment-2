
document.addEventListener('DOMContentLoaded', function() {
    // Define an array of objects representing gallery items, each with a source and title.
    const galleryItems = [
        { src: 'flowers-purple', title: 'Purple Flowers' },
        { src: 'flowers-yellow', title: 'Yellow Flowers' },
        { src: 'flowers-white', title: 'White Flowers' },
        { src: 'flowers-red', title: 'Red Flowers' },
        { src: 'flowers-pink', title: 'Pink Flowers' }
    ];

    // Get the DOM element where thumbnails will be displayed.
    const thumbnailsContainer = document.getElementById('thumbnails');

    // Iterate over each item in the galleryItems array.
    galleryItems.forEach(item => {
        // Create a new list item element for each gallery item.
        const li = document.createElement('li');
        // Create a new image element.
        const img = document.createElement('img');
        // Set the source of the image. This uses a template literal to construct the file path.
        img.src = `images/${item.src}-large.jpg`;
        // Set the alternative text for the image.
        img.alt = item.title;
        // Set the width and height of the image.
        img.width = 240;
        img.height = 160;
        // Append the image to the list item.
        li.appendChild(img);
        // Append the list item to the thumbnails container.
        thumbnailsContainer.appendChild(li);

        // Add a click event listener to each image.
        img.addEventListener('click', function() {
            // When an image is clicked, update the featured image source to that of the clicked image.
            document.getElementById('featuredImage').src = `images/${item.src}-large.jpg`;
            // Update the image title to match the clicked image's title.
            document.getElementById('imageTitle').innerText = item.title;
            // Call updateThumbnailStyles to update the styling of thumbnails.
            updateThumbnailStyles();
        });
    });

    // Define a function to update the styles of thumbnails.
    function updateThumbnailStyles() {
        // Select all image elements inside the thumbnails container.
        document.querySelectorAll('#thumbnails img').forEach(img => {
            // Apply a grayscale filter to all images except the one currently displayed as the featured image.
            img.style.filter = img.src === document.getElementById('featuredImage').src ? 'none' : 'grayscale(100%)';
        });
    }

    // Call updateThumbnailStyles initially to set the correct styles on page load.
    updateThumbnailStyles();
});

