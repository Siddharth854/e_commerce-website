  const container = document.querySelector('.image-container');
  const defaultImg = container.querySelector('.default-image');
  const hoverImg = container.querySelector('.hover-image');

  container.addEventListener('mouseenter', () => {
    defaultImg.style.display = 'none';
    hoverImg.style.display = 'block';
  });

  container.addEventListener('mouseleave', () => {
    defaultImg.style.display = 'block';
    hoverImg.style.display = 'none';
  });

  function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;

    // Remove active class from all thumbnails
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach(img => img.classList.remove('active'));

    // Add active class to clicked thumbnail
    element.classList.add('active');
  }

