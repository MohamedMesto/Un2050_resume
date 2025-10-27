// UN2050 Image Slider Script

document.addEventListener("DOMContentLoaded", () => {
  // Image sources
  const images = [
    "assets/images/home/un2050_logo.png",
    "assets/images/home/logo2.png",
    "assets/images/home/logo3.png",
    "assets/images/home/logo4.jpg",
    "assets/images/home/logo5.png",
    "assets/images/home/logo6.png",
    "assets/images/home/logo7.jpg",
    "assets/images/home/logo8.jpg",
  ];

  let currentImageIndex = 0;
  const sliderImage = document.getElementById("sliderImage");
  const indicators = document.querySelectorAll(".indicator");

  // Function to change image
  function showImage(index) {
    currentImageIndex = index;
    sliderImage.src = images[index];
    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Function for indicator click
  window.setSlide = function(index) { // Make it global for onclick
    showImage(index);
  };

  // Automatic change every 5 seconds
  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }, 5000);

  // Initialize
  showImage(0);
});
