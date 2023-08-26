import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryLinks = [];
for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  galleryLinks.push(galleryItem);

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = `${galleryItems[i].original}`;
  galleryItem.append(galleryLink);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = `${galleryItems[i].preview}`;
  galleryImage.dataset.source = `${galleryItems[i].original}`;
  galleryImage.alt = `${galleryItems[i].description}`;
  galleryLink.append(galleryImage);
}

gallery.append(...galleryLinks);

const modalWindow = (e) => {
  e.preventDefault();

  const modalWindowClose = (e) => {
    if (e.code == "Escape") {
      imageInstance.close();
    }
  };

  const imageInstance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600"></img>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", modalWindowClose);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", modalWindowClose);
      },
    }
  );
  imageInstance.show();
};

gallery.addEventListener("click", modalWindow);

console.log(galleryItems);
