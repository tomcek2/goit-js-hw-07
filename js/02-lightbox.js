import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const imageLarge = [];
const imageSmall = [];
const imageText = [];

for (const item of galleryItems) {
  imageLarge.push(item.original);
  imageSmall.push(item.preview);
  imageText.push(item.description);
}

for (let i = 0; i < imageLarge.length; i++) {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__item");
  galleryLink.href = `${imageLarge[i]}`;
  gallery.append(galleryLink);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = `${imageSmall[i]}`;
  galleryImage.alt = `${imageText[i]}`;
  galleryLink.append(galleryImage);
}

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
galleryLightbox.on("show.simplelightbox", (e) => {
  e.preventDefault();
});
console.log(galleryItems);
