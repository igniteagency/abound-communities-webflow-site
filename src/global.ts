import { initFontSizeController } from './components/font-size-controls';
import { scrollHandler as navScrollHandler } from './components/nav-scroll';
import { printPage } from './components/print-page';

window.Webflow?.push(() => {
  navScrollHandler();
  initFontSizeController();
  printPage();
});
