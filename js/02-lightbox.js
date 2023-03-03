import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImages = document.querySelector('ul.gallery');

const markup = galleryItems
    .map((item) => {
        const { original, preview, description } = item;
        return `<li class="list-item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`;
  })
  .join("");
galleryImages.insertAdjacentHTML("afterbegin", markup);

let gallery = new SimpleLightbox('.gallery a.gallery__link');
gallery.on('show.simplelightbox', function () {
   
});






