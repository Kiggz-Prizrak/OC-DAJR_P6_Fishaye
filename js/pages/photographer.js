// ID du photographe
const photographerPageId = new URL(location.href).searchParams.get("id");

// méthode de tri de la gallery

const popularitySelected = function (array) {
  array.sort((a, b) => b.likes - a.likes);
};
const dateSelected = function (array) {
  array.sort((a, b) => new Date(b.date) - new Date(a.date));
};
const titleSelected = function (array) {
  array.sort((a, b) => a.title.localeCompare(b.title));
};

// élément
const selector = document.getElementById("select");
const galleryContainer = document.getElementById("galleryContainer");
const contactModal = document.getElementById("contact_modal");

class App {
  constructor() {
    this.photographApi = new PhotographApi("/data/photographers.json");
    this.mediaApi = new MediaApi("/data/photographers.json");
  }
  async main() {
    // get photographer from API
    const photographsData = await this.photographApi.getPhotograph();
    const photographerInfos = photographsData.filter(
      (photographer) => photographer.id == photographerPageId
    )[0];
    const name = photographerInfos.name.split(" ")[0];

    console.log(photographerInfos);
    // get medios's photographer from APÏ
    const mediasData = await this.mediaApi.getMedia();
    const gallery = mediasData.filter(
      (media) => media.photographerId == photographerPageId
    );

    //photographer header
    photographerHeader(photographerInfos);

    //createFilterGallery
    const filterList = ["Popularité", "Date", "Titre"];

    createFilterGallery(filterList, function (value) {
      filterGallery(value, gallery, name);
    });

    // counter like

    const totalLike = gallery
      .map((item) => item.likes)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(totalLike);
    const counterLike = new CounterLike(totalLike, photographerInfos.price);
    document.body.appendChild(counterLike.createCounterLike());

    // gallery
    gallery
      .map((media) => new Medias(media, name))
      .forEach((media) => {
        const Template = new ImgGalleryBlock(media, totalLike);
        galleryContainer.appendChild(Template.createImgGallery());
      });
    // lightbox
    const lightBoxBlock = document.getElementById("lightBoxBlock");
    const nodeElement = [...document.getElementsByClassName("linkGallery")];
    nodeElement.forEach((media) => {
      media.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const lightbox = new LightBox(
          gallery,
          name,
          nodeElement.indexOf(media)
        );

        lightBoxBlock.appendChild(lightbox.createLightBox());
        lightbox.lightboxBrowser();
        lightbox.lightBoxCloser();
      });
    });

    // contact form

    document.getElementById("contactButton").addEventListener("click", () => {
      const contactForm = new ContactForm(
        name,
        document.getElementById("contact_modal")
      );
      contactForm.createContactForm();
      contactForm.contactFormCloser();
      contactForm.sendForm();
    });
  }
}
const app = new App();
app.main();
