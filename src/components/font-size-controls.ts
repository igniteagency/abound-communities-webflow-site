import { ELEMENT_SELECTOR_DATA_ATTR_NAME } from 'src/constants';

export function initFontSizeController() {
  const baseSize = 16;
  let currentSize = baseSize;

  const changeDifference = 3;

  const increaseTriggerEl = document.querySelector(
    `[${ELEMENT_SELECTOR_DATA_ATTR_NAME}="font-size-increase"]`
  );
  const decreaseTriggerEl = document.querySelector(
    `[${ELEMENT_SELECTOR_DATA_ATTR_NAME}="font-size-decrease"]`
  );

  if (!increaseTriggerEl || !decreaseTriggerEl) {
    window.DEBUG('increaseTriggerEl or decreaseTriggerEl not found');
    window.DEBUG({ increaseTriggerEl }, { decreaseTriggerEl });
    return;
  }

  increaseTriggerEl.addEventListener('click', () => {
    const newSize = currentSize + changeDifference;
    updateFontSize(newSize);
    currentSize = newSize;
  });

  decreaseTriggerEl.addEventListener('click', () => {
    const newSize = currentSize - changeDifference;
    updateFontSize(newSize);
    currentSize = newSize;
  });
}

function updateFontSize(px: number) {
  if (px < 13) {
    window.DEBUG("Base value is 13. Can't go any smaller.");
    return;
  }
  document.documentElement.style.fontSize = px + 'px';
}
