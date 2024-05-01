import { scrollHandler as navScrollHandler } from './components/nav';

window.Webflow?.push(() => {
  navScrollHandler();
});
