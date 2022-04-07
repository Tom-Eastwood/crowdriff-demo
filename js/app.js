const btn = document.querySelectorAll('#modalBtn')[0];
const modal = document.querySelectorAll('.modal')[0];
const previewWrap = document.querySelectorAll('.preview')[0];
const previewImg = document.querySelectorAll('.preview img');
const mainImage = document.querySelectorAll('.main img')[0];

// show the modal
btn.addEventListener('click', () => {
    modal.classList.add('visible');
});

// hide the modal
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('visible') ||
        e.target.classList.contains('fa-times')) {
        modal.classList.remove('visible');
    }
});

// hide the modal on escape click
document.addEventListener("keyup", e => {
    if (e.key == "Escape" && modal.classList.contains('visible') ) {
        modal.classList.remove('visible');
    }
});

// show the hovered preview image in the main section
previewImg.forEach((e) => {
    e.addEventListener('mouseover', (f) => {
        mainImage.setAttribute('src', f.target.getAttribute('src'));
    });
});

// show the original image when user leaves
previewWrap.addEventListener('mouseleave', () => {
    mainImage.setAttribute('src', 'img/ebook-cover.png');
});
