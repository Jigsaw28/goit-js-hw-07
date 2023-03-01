import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
    .map((item) => {
        const { original, preview, description } = item;
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener("click", (event) => {
    event.preventDefault();
  const instance = basicLightbox.create(`
    <img  src="${event.target.dataset.source}">
`)

instance.show()
});



