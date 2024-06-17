/**
 * Location CMS template page
 */
import { CURRENT_CSS_CLASS } from '@finsweet/ts-utils';

window.Webflow?.push(() => {
  setActiveQuicklinksMenu();
});

function setActiveQuicklinksMenu() {
  console.debug('setActiveQuicklinksMenu');

  const LOCATIONS_SELECTOR = '[data-el="quicklinks-locations"]';
  const LIVING_WITH_US_SELECTOR = '[data-el="quicklinks-living-with-us"]';

  const locationsEl = document.querySelector(LOCATIONS_SELECTOR);
  const livingWithUsEl = document.querySelector(LIVING_WITH_US_SELECTOR);
  const LINK_EL_SELECTOR = '.page-content_quicklinks_link';

  if (!locationsEl || !livingWithUsEl) {
    return;
  }

  const referrer = document.referrer;
  if (referrer) {
    const referrerPath = new URL(referrer).pathname;
    const activeParentLinkEl = document.querySelector(
      `${LIVING_WITH_US_SELECTOR} ${LINK_EL_SELECTOR}[href="${referrerPath}"]`
    );

    if (!activeParentLinkEl) {
      livingWithUsEl.style.display = 'none';
    } else {
      activeParentLinkEl.classList.add(CURRENT_CSS_CLASS);
      locationsEl.style.display = 'none';
    }
  } else {
    livingWithUsEl.style.display = 'none';
  }
}
