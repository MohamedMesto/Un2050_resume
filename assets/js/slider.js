// UN2050 Image Slider Script

document.addEventListener("DOMContentLoaded", () => {
  // Image sources
  const images = [
    "assets/images/home/img_slider1.png",
    "assets/images/home/img_slider2.jpg",
    "assets/images/home/img_slider3.png",
    "assets/images/home/img_slider4.png",
    "assets/images/home/img_slider5.png",
    "assets/images/home/img_slider6.png",
    "assets/images/home/img_slider7.jpg",
    "assets/images/home/img_slider8.jpg",
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
