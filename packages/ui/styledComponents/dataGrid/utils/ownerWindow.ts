function ownerWindow(node?: Element | null): Window {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

function ownerDocument(node?: Element | null): Document {
  return (node && node.ownerDocument) || document;
}

export default ownerWindow;
