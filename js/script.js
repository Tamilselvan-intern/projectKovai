document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const indicatorsContainer = document.querySelector(".indicators");

  const totalSlides = document.querySelectorAll(".slide").length;
  let currentSlide = 0;

  // indicators
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicatorsContainer.appendChild(indicator);

    indicator.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  updateIndicators();

  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentSlide);
    });
  }

  function goToSlide(index) {
    currentSlide = index;
    const translateXValue = -index * 45 + "%";
    carousel.style.transform = `translateX(${translateXValue})`;
    updateIndicators();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
  }

  // arrow clicks
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      prevSlide();
    }
  });

 //setinterval method
  setInterval(() => {
    nextSlide();
  }, 3000);
});

