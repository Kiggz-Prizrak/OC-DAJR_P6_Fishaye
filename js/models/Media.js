class Medias {
  constructor(medias,firstname) {
    this._id = medias.id;
    this._photographerId = medias._photographerId;
    this._title = medias.title;
    this._image = medias.image;
    this._likes = medias.likes;
    this._date = medias.date;
    this._price = medias.price;
    this._video = medias.video;
    this._firstname = firstname;
  }

  get id() {
    return this._id;
  }

  get photographerId() {
    console.log(photographerId);
    return this._photographerId;
  }
  get title() {
    return this._title;
  }
  get image() {
    return `/assets/photos/${this._firstname}/${this._image || this._video}`;
  }
  get likes() {
    return this._likes;
  }
  set likes(value) {
    this._likes = value;
  }
  get date() {
    return this._date;
  }
  get price() {
    return this._price;
  }
  get firstname() {
    return this._firstname;
  }
}
