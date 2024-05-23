import { scrollHandler as navScrollHandler } from './components/nav-scroll';

window.Webflow?.push(() => {
  navScrollHandler();
});
