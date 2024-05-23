const NAV_SELECTOR = '.nav_component';
const SCROLLED_CLASS = 'is-scrolled';

const scrollPosEl = document.querySelector('[data-el="nav-scroll-pos"]');
const navEl = document.querySelector(NAV_SELECTOR);

export function scrollHandler() {
  if (!scrollPosEl || !navEl) {
    window.DEBUG('scroll position element or nav not found');
    window.DEBUG({ scrollPosEl }, { navEl });
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
