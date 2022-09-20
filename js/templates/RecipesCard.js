class RecipesCard {
  constructor(recipe) {
    this._id = recipe.id;
    this._name = recipe._name;
    this._servings = recipe.servings;
    this._ingredients = recipe.ingredients;
    this._time = recipe.time;
    this._description = recipe.description;
  }

  createCard() {
 
    const element = document.createElement("article")
    element.className = "recipesCards";

    const imgContainer = document.createElement("div")
    imgContainer.className = "imgContainer";
    const img = document.createElement("img")
    imgContainer.appendChild(img);

    const blockInfo = document.createElement("div")
    
    const header = document.createElement("div")
    header.className = "headerCard";
    const name = document.createElement("h3");
    name.innerText = this._name;
  
    const time = document.createElement("span")
    time.innerHTML = `<span><i class="fa-regular fa-clock"></i>  ${this._time} min</span>`;
    
    header.appendChild(name);
    header.appendChild(time)

    const descriptionContainer = document.createElement("div")
    descriptionContainer.className = "descriptionContainer";
    const list = document.createElement("ul")
    this._ingredients.map((ingredient) => {
      const li = document.createElement('li')

      if(ingredient.unit === "grammes") {
       ingredient.unit = "g"
      }

      li.innerHTML = `
      <span class="typeIngredient">${ingredient.ingredient} :</span>
      <span class="ingredientQuantity">
        ${ingredient.quantity || ""}${ingredient.unit || ""}
      </span>
     
      `;
       list.appendChild(li);

    })

    const description = document.createElement("p");
    description.innerText = this._description;

    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(list)
    

    blockInfo.appendChild(header);
    blockInfo.appendChild(descriptionContainer)
    
    element.appendChild(imgContainer);
    element.appendChild(blockInfo);


        // <img src="" alt="">
        // <div>
        //   <div>
        //     <h3>${this._name}</h3>
        //     <span><i class="fa-regular fa-clock"></i>${this._time} min</span>
        //   </div>
        //     <ul>
        //     ${
        //       this._ingredients.map((ingredient) => {
        //       `<li>dddddddd</li>`
        //       })
        //     }
        //     </ul>
        //     <p></p>
        //   <div>
        //   </div>
        // </div>

     return element;
  }
}