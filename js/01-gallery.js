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

const galleryLinks = [];
for (let i = 0; i < imageLarge.length; i++) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  galleryLinks.push(galleryItem);

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = `${imageLarge[i]}`;
  galleryItem.append(galleryLink);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = `${imageSmall[i]}`;
  galleryImage.dataset.source = `${imageLarge[i]}`;
  galleryImage.alt = `${imageText[i]}`;
  galleryLink.append(galleryImage);
}

gallery.append(...galleryLinks);

const modalWindow = (e) => {
  e.preventDefault();
  const imageInstance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600"></img>`
  );
  imageInstance.show();
  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      if (basicLightbox.visible()) {
        imageInstance.close();
      }
    }
  });
};

gallery.addEventListener("click", modalWindow);

console.log(galleryItems);
