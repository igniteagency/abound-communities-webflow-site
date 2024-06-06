const SCALE_START_VALUE = 1.05;
const SCALE_DURATION_SECONDS = 0.8;

const SCALE_ATTR = 'data-scale';
const SCALE_DELAY_ATTR = 'data-scale-delay-ms';

export function scaleDown() {
  const scaleDownElList = document.querySelectorAll(`[${SCALE_ATTR}]`);
  scaleDownElList.forEach((el) => {
    const delayValue = el.getAttribute(SCALE_DELAY_ATTR);
    const delay = delayValue ? Number(delayValue) / 1000 : false;

    scaleDownAnimation(el, delay);
  });
}

function scaleDownAnimation(el: gsap.TweenTarget, delay: false | number = false) {
  window.gsap.set(el, {
    scale: SCALE_START_VALUE,
  });

  window.gsap.to(el, {
    scale: 1,
    duration: SCALE_DURATION_SECONDS,
    ease: 'power2.out',
    delay: delay || 0,
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
      markers: window.IS_DEBUG_MODE,
      id: 'scale',
    },
  });
}
