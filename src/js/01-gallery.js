// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
//_________________________________________________________________
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
let modalImage;

const bodyEl = document.querySelector('body');


const galleryMarkup = galleryItems.map(
({ preview, original, description }, alt) => 
	`<div class="gallery__item">
<a class="gallery__link" href="${original}">
   <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
   />
</a>
</div>
	`,)
.join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);



const onGalleryClick = event => {
	event.preventDefault();

	if (event.target.nodeName !== "IMG")
	return;
	onOpenModal(event.target.dataset.source);
};

galleryEl.addEventListener('click', onGalleryClick);


const onCreateModal = img => basicLightbox.create(`<img src="${img}" width="1280" alt="${img}">`);


const onOpenModal = img => {
	modalImage = onCreateModal(img);
	modalImage.show();
	console.log("Open modal");
	document.addEventListener("keydown", onKeyPress);
};

const onKeyPress = event => {
	if (event.code !== "Escape") {
		return;
	}
	console.log("Close modal with escape");
	modalImage.close()
};
