export function printPage() {
  const printTriggerEl = document.querySelector(`[data-el="print-trigger"]`);

  if (!printTriggerEl) {
    window.DEBUG('printTriggerEl not found');
    window.DEBUG({ printTriggerEl });
    return;
  }

  printTriggerEl.addEventListener('click', () => {
    window.print();
  });
}
