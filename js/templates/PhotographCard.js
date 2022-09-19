class PhotographCard {
  constructor(photograph) {
    this._photograph = photograph;
  }

  createPhotographCard() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("photograph-card-wrapper");

    console.log(this._photograph.portrait);

    const photographCard = `
      <article>    
        <a href="photographer.html?id=${this._photograph.id}" >
          <img src="${this._photograph.portrait}">
          <h2 class='photographName'>${this._photograph.name}</h2>
        </a>
        <p class="photographLocation">${this._photograph.city}, ${this._photograph.country}</p>
        <p class="photographTagline">${this._photograph.tagline}</p>
        <p class="photographPrice">${this._photograph.price}€/jour</p>

      </article>
    `;

    wrapper.innerHTML = photographCard;
    return wrapper;
  }
}
