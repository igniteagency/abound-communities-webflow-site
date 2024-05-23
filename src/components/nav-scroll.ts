const NAV_SELECTOR = '.navbar_component';
const SCROLLED_CLASS = 'is-scrolled';

const scrollPosEl = document.querySelector('[data-el="nav-scroll-pos"]');
const navEl = document.querySelector(NAV_SELECTOR);

export function scrollHandler() {
  if (!scrollPosEl || !navEl) {
    window.DEBUG('pageWrapper or nav not found');
    return;
  }

  window.DEBUG('scrollHandler');
  const navScrollToggleObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        navEl.classList.remove(SCROLLED_CLASS);
      } else {
        navEl.classList.add(SCROLLED_CLASS);
      }
    },
    {
      root: null,
      threshold: 0.0,
    }
  );
  navScrollToggleObserver.observe(scrollPosEl);
}
