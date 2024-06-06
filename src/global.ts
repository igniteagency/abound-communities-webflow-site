import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { fadeUp } from '$utils/fade';
import { scaleDown } from '$utils/scale';

import { initFontSizeController } from './components/font-size-controls';
import { scrollHandler as navScrollHandler } from './components/nav-scroll';
import { printPage } from './components/print-page';
import { showRichTextSoloLinksAsButtons } from './components/rich-text-link-buttons';

window.gsap = gsap;
window.gsap.registerPlugin(ScrollTrigger);
window.ScrollTrigger = ScrollTrigger;

window.Webflow?.push(() => {
  navScrollHandler();

  initFontSizeController();
  printPage();

  showRichTextSoloLinksAsButtons();

  fadeUp();
  scaleDown();
});
