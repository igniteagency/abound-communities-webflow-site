import { initFontSizeController } from './components/font-size-controls';
import { scrollHandler as navScrollHandler } from './components/nav-scroll';
import { printPage } from './components/print-page';
import { showRichTextSoloLinksAsButtons } from './components/rich-text-link-buttons';

window.Webflow?.push(() => {
  navScrollHandler();
  initFontSizeController();
  printPage();
  showRichTextSoloLinksAsButtons();
});
