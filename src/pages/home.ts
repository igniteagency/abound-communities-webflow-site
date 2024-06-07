import { SLIDER_CSS_CLASSES } from '@finsweet/ts-utils';

const MUTATION_CONFIG = {
  attributes: true,
  childList: true,
  subtree: true,
  attributeFilter: ['style'],
};

window.Webflow?.push(() => {
  homeSlider();
});

function homeSlider() {
  const sliderEl = document.querySelector(`.hero-header_slider.${SLIDER_CSS_CLASSES.slider}`);

  if (!sliderEl) {
    window.DEBUG(
      'Home header slider slides not found.',
      `Looking for '.hero-header_slider ${SLIDER_CSS_CLASSES.slide}'`
    );
    return;
  }

  // Set up a mutation observer to watch for changes in the slider
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(function (mutation) {
      const targetEl = mutation.target as HTMLElement;
      if (!targetEl.classList.contains('w-slider-aria-label')) {
        return;
      }

      // Disconnect observer to avoid callback loop
      observer.disconnect();

      window.DEBUG('Attribute mutation observed:', mutation);

      const slidesList = sliderEl.querySelectorAll(`.${SLIDER_CSS_CLASSES.slide}`);
      slidesList.forEach((slideEl) => {
        const slideVisibility = window.getComputedStyle(slideEl).visibility;
        const imageEl = slideEl.querySelector('img');

        if (!imageEl) {
          window.DEBUG('Slide image not found:', slideEl);
          return;
        }

        window.DEBUG({ slideVisibility }, slideEl);

        if (slideVisibility === 'visible') {
          // This is the active slide
          window.DEBUG('Active slide:', slideEl);

          // Scale the image to 1
          setTimeout(function () {
            imageEl.style.transform = 'scale(1)';
            window.DEBUG('Scaling image to 1:', imageEl);
          }, 500); // Delay to 0.5 seconds to ensure smooth transition
        } else {
          // Reset the image scale for inactive slides
          window.DEBUG('Scaling image back to 1.1:', imageEl);
          imageEl.style.transform = 'scale(1.1)';
        }
      });

      // Re-set observer
      observer.observe(sliderEl, MUTATION_CONFIG);
    });
  });

  // Observe the slide for attribute changes
  observer.observe(sliderEl, MUTATION_CONFIG);
}
