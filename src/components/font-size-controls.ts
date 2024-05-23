export function initFontSizeController() {
  const baseSize = 16;
  let currentSize = baseSize;

  const changeDifference = 3;

  const increaseTriggerEl = document.querySelector(`[data-el="font-size-increase"]`);
  const decreaseTriggerEl = document.querySelector(`[data-el="font-size-decrease"]`);

  if (!increaseTriggerEl || !decreaseTriggerEl) {
    window.DEBUG('increaseTriggerEl or decreaseTriggerEl not found');
    window.DEBUG({ increaseTriggerEl }, { decreaseTriggerEl });
    return;
  }

  increaseTriggerEl.addEventListener('click', () => {
    const newSize = currentSize + changeDifference;
    updateFontSize(newSize, currentSize);
    currentSize = newSize;
  });

  decreaseTriggerEl.addEventListener('click', () => {
    const newSize = currentSize - changeDifference;
    updateFontSize(newSize, currentSize);
    currentSize = newSize;
  });
}

function updateFontSize(newSize: number, currentSize: number) {
  if (newSize < 13 || newSize > 27) {
    window.DEBUG(`Limit hit. Current font size is ${currentSize}`);
    return;
  }
  document.documentElement.style.fontSize = newSize + 'px';
}
