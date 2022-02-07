import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// function onImageToCreateModal(e) {
//     e.preventDefault()

//     const selectedImage = e.target.dataset.source
//     console.log(selectedImage)
    
//     const modal = basicLightbox.create(`
//         <img src="${selectedImage}" width="800" height="600">
//     `)

//     modal.show()

//     document.addEventListener('keydown', closeModal)
    
//     function closeModal(e) {
//         if(event.code === "Escape") {
//             document.querySelector(".gallery__image").style.display = 'none'
//         }
//     }
// }

// ===============================

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

    let gallery = new basicLigthbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

// ================================


const galleryCardMarkup = document.querySelector('.gallery')
galleryContainer.insertAjacentHTML('beforeend', galleryCardMarkup(galleryItems))

function galleryCardMarkup(img) {
    return img.map(({ preview, original, description}) => {
        return `div class="gallery__item"`
    })
}



const markup = galleryItems.map(item =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src='${item.preview}'
        data-source='${item.original}'
        alt='${item.description}'
      />
    </a>
  </div>`).join('');

  let image = '';
function createImgInModal(e) {
  image = basicLightbox.create(`
    <img src=${e.target.dataset.source}>`);
}

