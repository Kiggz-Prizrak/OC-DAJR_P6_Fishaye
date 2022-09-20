class CounterLike {
  constructor(likes, price) {
    this._likes = likes;
    this._price = price;
  }
  createCounterLike() {
    const element = document.createElement("div");
    element.className = "CounterLikeBlock";
    const elementContent = `
      <span class='likesCounter'>
        <p id='totalLike'>
          ${this._likes}
        </p>
        <i class="fa-solid fa-heart"></i>
      </span>
      <span class='photographPrice'>
        ${this._price}€ / jour
      </span>
   `;
    element.innerHTML = elementContent;

    return element;
  }
}
