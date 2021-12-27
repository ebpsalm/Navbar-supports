const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const closeIcon = document.querySelector('.close');
const openIcon = document.querySelector('.open');

toggleBtn.addEventListener('click', () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
    closeIcon.style.display = 'inline-block';
    openIcon.style.display = 'none';
  } else {
    linksContainer.style.height = 0;
    closeIcon.style.display = 'none';
    openIcon.style.display = 'inline-block';
  }
});
