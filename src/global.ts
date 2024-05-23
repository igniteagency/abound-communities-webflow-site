import { initFontSizeController } from './components/font-size-controls';
import { scrollHandler as navScrollHandler } from './components/nav-scroll';

window.Webflow?.push(() => {
  navScrollHandler();
  initFontSizeController();
});
