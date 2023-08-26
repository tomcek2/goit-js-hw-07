import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryLinks = [];
for (let i = 0; i < galleryItems.length; i++) {
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__item");
  galleryLink.href = `${galleryItems[i].original}`;
  galleryLinks.push(galleryLink);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = `${galleryItems[i].preview}`;
  galleryImage.alt = `${galleryItems[i].description}`;
  galleryLink.append(galleryImage);
}
gallery.append(...galleryLinks);

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
galleryLightbox.on("show.simplelightbox");
console.log(galleryItems);
