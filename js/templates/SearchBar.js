class SearchBar {
  constructor(filterList, cardList, searchValue) {
    this._filterList = filterList;
    this._cardList = cardList;
    this._searchValue = searchValue;
  }
  createSearchBar() {
    const element = document.createElement("label");
    element.setAttribute("for", "search");
    element.setAttribute("id", "searchBar");
    const input = `
      <input 
        placeholder="Rechercher une recette"
        id="searchBtn"
        type="search">
      <button> <i class="fa-solid fa-magnifying-glass"></i> </button>

    `;
    element.innerHTML = input;
    return element;
  }
  searchRecipes() {
    document.getElementById("searchBar").addEventListener("input", (e) => {
      console.log(e.target.value);
      console.log(this._filterList);
      console.log(this._cardList);


      if (e.target.value && e.target.value.length >= 3) {

          this._filterList.map((item) => {
            console.log(item);
          });

      }
    });
  }
}
