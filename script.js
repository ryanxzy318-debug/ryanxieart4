const projectGrid = document.querySelector('.project-grid');
const gallery = document.getElementById('home-gallery');
const contactPage = document.getElementById('contact-page');
const groups = [...gallery.content.children];
const menuButton = document.querySelector('.menu-button');
const mobilePanel = document.querySelector('.mobile-panel');
const navLinks = document.querySelectorAll('.nav a, .mobile-nav a');

const artworkViewer = document.querySelector('.artwork-viewer');
const viewerImage = document.querySelector('.artwork-viewer-image');
const closeViewerButton = document.querySelector('.artwork-viewer-close');
let viewerTrigger = null;

function showGallery() {
  if (artworkViewer.open) artworkViewer.close();
  const showContact = location.hash === '#contact';
  contactPage.hidden = !showContact;
  projectGrid.hidden = showContact;
  const galleryHash = !location.hash || location.hash === '#all' ? '#story-art' : location.hash;
  const selected = groups.find((group) => '#' + group.dataset.gallery === galleryHash);
  const visibleGroups = selected ? [selected] : groups;
  document.body.classList.toggle('environment-page', selected?.dataset.gallery === 'story-art');
  projectGrid.replaceChildren(...visibleGroups.map((group) => group.cloneNode(true)));

  for (const link of navLinks) {
    const active = (Boolean(selected) || showContact) && link.hash === galleryHash;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
}

function setMenuOpen(open) {
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  mobilePanel.setAttribute('aria-hidden', String(!open));
  mobilePanel.inert = !open;
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

for (const link of navLinks) {
  link.addEventListener('click', () => setMenuOpen(false));
}

window.addEventListener('hashchange', showGallery);
showGallery();

projectGrid.addEventListener('click', (event) => {
  const card = event.target.closest('a.project-card');
  if (!card || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

  event.preventDefault();
  viewerTrigger = card;
  viewerImage.src = card.href;
  viewerImage.alt = card.querySelector('img').alt;
  document.body.classList.add('lightbox-open');
  artworkViewer.showModal();
});

closeViewerButton.addEventListener('click', () => artworkViewer.close());
artworkViewer.addEventListener('click', (event) => {
  if (event.target === artworkViewer) artworkViewer.close();
});

artworkViewer.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  viewerImage.removeAttribute('src');
  if (viewerTrigger?.isConnected) viewerTrigger.focus({ preventScroll: true });
  viewerTrigger = null;
});

