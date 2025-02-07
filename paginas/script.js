


const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

   
  
  const changeSlide = (direction) => {
    const totalSlides = slides.children.length;
  
    if (direction === 'next') {
      currentSlide = (currentSlide + 1) % totalSlides;
    } else if (direction === 'prev') {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }
  
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  };
  
  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => changeSlide('prev'));
    nextButton.addEventListener('click', () => changeSlide('next'));
  }
  
  

  
 