import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const lighthBoxMarkup = (item) => {
  const { description, original, preview } = item;

  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
};

const lightBoxGalleryInserted = galleryItems.map(lighthBoxMarkup).join("");

const handler = (event) => {
  event.preventDefault();
  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
  return gallery;
};

galleryEl.insertAdjacentHTML('beforeend', lightBoxGalleryInserted)
galleryEl.addEventListener('click', handler)