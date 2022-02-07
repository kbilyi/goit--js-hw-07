import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createGallery = document.querySelector('.gallery')

const allGallaryEl = galleryItems.map(
    ({ preview, original, description }) => 
        `<li class = 'gallery__item'>
        <a class = 'gallery__link' href = "${original}">
        <img class = 'gallery__image' src = "${preview}"
        alt = "${description}"/>
        </a></li>
        `
    )
        .join('');

    createGallery.insertAdjacentHTML('beforeend', allGallaryEl);

    let gallery = new simpleLigthbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        captionSelector:'img',
    });



    function onImageToCreateModal(e) {
    e.preventDefault()

    const selectedImage = e.target.dataset.source
    console.log(selectedImage)
    
    const modal = simpleLightbox.create(`
        <img src="${selectedImage}" width="800" height="600">
    `)

    modal.show()

    document.addEventListener('keydown', closeModal)
    
    function closeModal(e) {
        if(e.code === "Escape") {
            document.querySelector(".gallery__image").style.display = 'none'
        }
    }
}

onImageToCreateModal.show()