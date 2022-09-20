const photographerHeader = function(photographer) {

  const name = document.getElementById("photographerName");
  name.innerText = photographer.name
  const location = document.getElementById("photographerLocation")
  location.innerText = `${photographer.city}, ${photographer.country}`
  const tagline = document.getElementById("photographerTagLine");
  tagline.innerText = photographer.tagline
  const PhotographerImg = document.getElementById("PhotographerImg");
  PhotographerImg.src = `/assets/photographers/${photographer.portrait}`; 
}