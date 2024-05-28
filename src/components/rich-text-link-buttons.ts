/**
 * Showing individual links in rich text as buttons
 */
export function showRichTextSoloLinksAsButtons() {
  const richTextParagraphsList = document.querySelectorAll('.text-rich-text > p');

  richTextParagraphsList.forEach((p) => {
    const node = p.firstChild as Element;
    if (
      p.childNodes.length !== 1 ||
      !node ||
      node.nodeType !== Node.ELEMENT_NODE ||
      node.tagName !== 'A'
    ) {
      return;
    }

    node.classList.add('button', 'is-secondary', 'is-small', 'is-inline', 'w-button');
  });
}
