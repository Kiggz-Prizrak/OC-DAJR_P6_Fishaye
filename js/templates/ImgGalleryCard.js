class ImgGalleryBlock {
  constructor(ImgGallery, totalLike) {
    this._ImgGallery = ImgGallery;
    this._totalLike = totalLike;
  }

  counterLikeRefresh() {
    /////test Like ///
    this._totalLike = 0;
    const array = [...document.querySelectorAll(".numberLikes")];
    array.map((e) => {
      this._totalLike += parseInt(e.innerText);
    });
    console.log(this._totalLike);
    document.querySelector("#totalLike").innerText = this._totalLike;
  }

  createImgGallery() {
    if (this._ImgGallery._video) {
      console.log("video");

      const articleGallery = document.createElement("article");
      articleGallery.classList.add("imgGalleryCard");

      articleGallery.dataset.liked = false;

      const imgGalleryCard = `
        <a class="linkGallery" href="" alt="image de la gallery" >
          <video al="${this._ImgGallery.title}" type="video/mp4" src="${this._ImgGallery.image}"></video>
        </a>
          <div class="imgLike">
            <p>${this._ImgGallery.title} </p>
            <div class="imgLike">
              <p class="numberLikes">${this._ImgGallery.likes} </p>
            <button aria-label="aimer le média / retirer sa réaction" class='btnLike'  data-liked = "false">
              <span class="likeIcon" aria-label='likes'><i class="fa-solid fa-heart"></i></span>
            </button>  
            </div>
          </div>
       
    `;
      articleGallery.innerHTML = imgGalleryCard;

      articleGallery
        .querySelector(".btnLike")
        .addEventListener("click", (e) => {
          if (articleGallery.dataset.liked === "false") {
            this._ImgGallery.likes += 1;


            this.counterLikeRefresh();

            articleGallery.querySelector(".likeIcon").style.color = "#DB8876";
            articleGallery.dataset.liked = "true";

          } else if (articleGallery.dataset.liked === "true") {
            this._ImgGallery.likes -= 1;

            this.counterLikeRefresh();

            articleGallery.querySelector(".numberLikes").innerText =
              this._ImgGallery.likes;
            articleGallery.dataset.liked = "false";
          }
        });

      return articleGallery;
    } else {
      const articleGallery = document.createElement("article");
      articleGallery.classList.add("imgGalleryCard");

      articleGallery.dataset.liked = false;

      const imgGalleryCard = `
      <a class="linkGallery" href="" >
        <img class ="imgGallery" src="${this._ImgGallery.image}" alt="${this._ImgGallery.title}">
      </a>

        <div class="imgLike">
          <p>${this._ImgGallery.title} </p>
          <div class="imgLike">
            <p class="numberLikes">${this._ImgGallery.likes} </p>
            <button aria-label="aimer le média / retirer sa réaction" class='btnLike'  data-liked = "false">
              <span class="likeIcon"  aria-label='likes'><i class="fa-solid fa-heart"></i></span>
            </button>  
          </div>
        </div>
      
    `;
      articleGallery.innerHTML = imgGalleryCard;

      articleGallery
        .querySelector(".btnLike")
        .addEventListener("click", (e) => {
          if (articleGallery.dataset.liked === "false") {
            this._ImgGallery.likes += 1;

            articleGallery.querySelector(".numberLikes").innerText =
              this._ImgGallery.likes;


            this.counterLikeRefresh();

            articleGallery.querySelector("i").style.color = "#DB8876";
            articleGallery.dataset.liked = "true";

          } else if (articleGallery.dataset.liked === "true") {
            this._ImgGallery.likes -= 1;


            articleGallery.querySelector(".numberLikes").innerText =
              this._ImgGallery.likes;

            this.counterLikeRefresh();

            articleGallery.dataset.liked = "false";
            articleGallery.querySelector("i").style.color = "#901C1C";
          }
        });
      return articleGallery;
    }
  }
}
