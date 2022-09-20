class App {
  constructor() {
    this._recipesApi = recipes;
    this._recipesContainer = document.getElementById("recipesCardsContainer");
    this._filtersSelected = []
    this._searchValue = ''
  }
  async main() {
    console.log(this._recipesApi);

 


    /////////// Recipes card

    this._recipesApi
      .map((recipe) => new Recipes(recipe))
      .forEach((recipe) => {
        const recipeCard = new RecipesCard(recipe);
        this._recipesContainer.appendChild(recipeCard.createCard());
      });


    ////////////// Search Engine 

    const searchEngine = new SearchEngine(
      this._filtersSelected,
      this._recipesApi
    );
    searchEngine.search()

    // ingredient list
    const ingredientsList = [
      ...new Set(
        this._recipesApi
          .map((items) => items.ingredients.map((item) => item.ingredient))

          .flat()
          .map((name) => {
            return name[0].toUpperCase() + name.slice(1);
          })
          .sort((a, b) => a.localeCompare(b))
      ),
    ];
    console.log(ingredientsList);
    const ingredientsFilter = new FilterOptions(
      ingredientsList,
      "#3282F7",
      "ingrédients",
      this._filtersSelected,
      document.querySelector("#filterListContainer > ul")
    );
    document
      .getElementById("filterCategoryContainer")
      .appendChild(ingredientsFilter.createFilterOptions());

    // appliance list
    const applianceList = [
      ...new Set(
        this._recipesApi
          .map((items) => items.appliance)
          .flat()
          .map((name) => {
            return name[0].toUpperCase() + name.slice(1);
          })
          .sort((a, b) => a.localeCompare(b))
      ),
    ];
    console.log(applianceList);
    const applianceFilter = new FilterOptions(
      applianceList,
      "#68D9A4",
      "Appareils",
      this._filtersSelected,
      document.querySelector("#filterListContainer > ul")
    );
    document
      .getElementById("filterCategoryContainer")
      .appendChild(applianceFilter.createFilterOptions());

    // ustensils list
    const ustensilsList = [
      ...new Set(
        this._recipesApi
          .map((items) => items.ustensils)
          .flat()
          .map((name) => {
            return name[0].toUpperCase() + name.slice(1);
          })
          .sort((a, b) => a.localeCompare(b))
      ),
    ];
    console.log(ustensilsList);
    const ustensilsFilter = new FilterOptions(
      ustensilsList,
      "#ED6454",
      "Ustensiles",
      this._filtersSelected,
      document.querySelector("#filterListContainer > ul")
    );
    document
      .getElementById("filterCategoryContainer")
      .appendChild(ustensilsFilter.createFilterOptions());

    ///////////// Delete Filter Options

    document
      .querySelector("#filterListContainer")
      .addEventListener("click", (e) => {
        if ([...e.target.classList][0] === "deleteFilterBtn") {
          this._filtersSelected.map((element) => {
            if (
              element.filter === e.target.parentNode.dataset.filter &&
              element.type === e.target.parentNode.dataset.type
            ) {
              this._filtersSelected.splice(this._filtersSelected.indexOf(element), 1);
              e.target.parentNode.remove();
            }
          });
        } else if (
          [...e.target.parentNode.classList][0] === "deleteFilterBtn"
        ) {
          this._filtersSelected.map((element) => {
            if (
              element.filter ===
                e.target.parentNode.parentNode.dataset.filter &&
              element.type === e.target.parentNode.parentNode.dataset.type
            ) {
              this._filtersSelected.splice(this._filtersSelected.indexOf(element), 1);
              e.target.parentNode.parentNode.remove();
            }
          });
        }
      });

    /////////// searchbar

    const searchBar = new SearchBar(
      this._filtersSelected,
      this._recipesApi,
      this._searchValue
    );
    document
      .getElementById("searchBarContainer")
      .appendChild(searchBar.createSearchBar());
    
    searchBar.searchRecipes()

    /////////// test section ///////////
    document
      .querySelector("#searchBarContainer > label > button")
      .addEventListener("click", (e) => {
        console.table(this._filtersSelected);
        this._searchValue = e.target.value;
        console.log(this._searchValue);
      });
  }
}

const app = new App();
app.main();
