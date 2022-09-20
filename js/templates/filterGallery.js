const createFilterGallery = function (parameter, callback, gallery) {
  const scrollingFilter = document.getElementById("scrollingFilter");
  const filterIcon = document.getElementById("filterIcon");

  const inputFilterSelected = document.getElementById("btnFilterSelected");
  inputFilterSelected.addEventListener("click", (e) => {
    if (scrollingFilter.style.display === "none") {
      scrollingFilter.style.display = "flex";
      filterIcon.style.transform = "rotate(180deg)";
    } else {
      scrollingFilter.style.display = "none";
      filterIcon.style.transform = "rotate(0deg)";
    }
  });

  const filterSelected = parameter[0];

  document
    .getElementById("btnFilterSelected")
    .setAttribute("value", filterSelected);

  document.getElementById("filterSelected").innerText = filterSelected;

  //////////////////////////////////////////////////////////////////////////
  // fonction de changement

  function filterfunction(filter) {
    const filterSelected = filter;
    document.getElementById("btnFilterSelected").setAttribute("value", filter);
    document.getElementById("filterSelected").innerText = filterSelected;
  }

  //////////////////////////////////////////////////////////////////////////
  // boucle de creation

  for (let i = 0; i < parameter.length; i++) {
    const createButton = document.createElement("button");
    createButton.setAttribute("value", parameter[i]);
    createButton.className = "scrollingBtn";
    createButton.innerText = parameter[i];
    if (i === 0) {
      createButton.style.display = "none";
    }
    scrollingFilter.appendChild(createButton);

    createButton.addEventListener("click", (e) => {
      const options = document.querySelectorAll("#scrollingFilter > button");
      for (let j = 0; j < options.length; j++) {
        options[j].style.display = "block";
      }
      e.target.style.display = "none";
      filterfunction(e.target.value);
      callback(e.target.value);
    });
  }
};

const filterGallery = function (value, liste, data) {
  console.log(liste);

  const name = data;


  const lightbox = function () {
    const lightBoxBlock = document.getElementById("lightBoxBlock");
    const nodeElement = [...document.getElementsByClassName("linkGallery")];
    nodeElement.forEach((media) => {
      media.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const lightbox = new LightBox(liste, name, nodeElement.indexOf(media));

        lightBoxBlock.appendChild(lightbox.createLightBox());
        lightbox.lightboxBrowser();
        lightbox.lightBoxCloser();
      });
    });
  }



  switch (value) {
    case "Popularité":
      document.getElementById("galleryContainer").innerHTML = "";

      popularitySelected(liste);

      liste
        .map((media) => new Medias(media, name))
        .forEach((media) => {
          const Template = new ImgGalleryBlock(media);
          galleryContainer.appendChild(Template.createImgGallery());
        });
        lightbox();
      break;

    case "Date":
      document.getElementById("galleryContainer").innerHTML = "";

      dateSelected(liste);

      liste
        .map((media) => new Medias(media, name))
        .forEach((media) => {
          const Template = new ImgGalleryBlock(media);
          galleryContainer.appendChild(Template.createImgGallery());
        });
        lightbox();
      break;

    case "Titre":
      document.getElementById("galleryContainer").innerHTML = "";

      titleSelected(liste);

      liste
        .map((media) => new Medias(media, name))
        .forEach((media) => {
          const Template = new ImgGalleryBlock(media);
          galleryContainer.appendChild(Template.createImgGallery());
        });
        lightbox();
      break;

    default:
      console.error("une erreur est survenue");
  }
};
