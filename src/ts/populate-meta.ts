function populateMetaNodes() {
  const metaNodes = document.querySelectorAll('.meta-info');
  if (metaNodes.length) {
    metaNodes.forEach(node => populateMetaNode(node as HTMLElement));
  }
}

function populateMetaNode(node: HTMLElement) {
  let metaName = node.dataset.metaName ?? '';
  if (metaName.length) {
    const metaTag = document.querySelector(`meta[name='${metaName}']`);
    const content = metaTag?.getAttribute('content') ?? '';
    content.length ? node.innerHTML = content : hideMetaNode(node);
  }
}

function hideMetaNode(node: HTMLElement) {
  node.style.display = 'none';
}

function showMeta() {
  const meta = document.querySelector('.meta');
  if (meta) {
    const foundMeta = meta as HTMLElement;
    foundMeta.style.display = 'block';
  }
}

export function populateMeta() {
  populateMetaNodes();
  showMeta();
}
