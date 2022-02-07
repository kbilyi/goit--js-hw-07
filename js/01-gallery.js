import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallaryEl = document.querySelector(".gallery");
const createImageMarkupList = createImageMarkup(galleryItems);

gallaryEl.insertAdjacentHTML("afterbegin", createImageMarkupList);

gallaryEl.addEventListener("click", onLinkClick);

function createImageMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </div>`;
    })
    .join("");
}

function onLinkClick(e) {
  e.target.firstElementChild.preventDefault();

  if (!e.target.classList.contains("gallary__item")) {
    return;
  }

  const bigImageLink = e.target.firstElementChild.href;

  const intance = basicLightbox.create(
    `<img src ="${bigImageLink}" width="800" height="600">`
  );
}

// intance.show();
// console.log(bigImageLink);

