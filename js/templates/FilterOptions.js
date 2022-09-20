class FilterOptions {
  constructor(array, color, filterType, arraySelection, filterListContainer) {
    this._array = array;
    this._color = color;
    this._filterType = filterType;
    this._arraySelection = arraySelection;
    this._filterListContainer = filterListContainer;
  }
  createFilterOptions() {
    const element = document.createElement("div");
    element.style.backgroundColor = this._color;
    element.className = "filterCategoryBlock";

    const searchBar = document.createElement("div");
    searchBar.className = "filterCategoryHeader";

    const searchInputLabel = document.createElement("label");
    searchInputLabel.setAttribute("for", "search");

    const searchInput = document.createElement("input");
    searchInput.setAttribute("for", `${this._filterType}`);
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("id", `${this._filterType}Filter`);
    searchInputLabel.appendChild(searchInput);

    searchBar.appendChild(searchInput);
    element.appendChild(searchBar);

    const filterName = document.createElement("p");
    filterName.classList = "filterName";
    filterName.innerText = `${this._filterType}`;
    searchBar.appendChild(filterName);

    const icon = document.createElement("button");
    icon.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    searchBar.appendChild(icon);

    const filterList = document.createElement("ul");
    filterList.className = "filterList";
    element.appendChild(filterList);

    const listfiltration = (array, type, selection, listcontainer, color) => {
      filterList.innerHTML = "";
      array.map((element) => {
        const filter = document.createElement("li");
        const filterBtn = document.createElement("button");
        filterBtn.innerText = element;
        filter.appendChild(filterBtn);
        filterList.appendChild(filter);
        filterName.innerText = "";

        filterBtn.addEventListener("click", (e) => {
          const elementSelected = { type: type, filter: filterBtn.innerHTML };
          const verif = selection.some((element) => {
            if (element.filter === filterBtn.innerText) {
              return true;
            }
            return false;
          });
          if (!verif) {
            selection.push(elementSelected);
            const li = document.createElement("li");
            li.dataset.type = type 
            li.dataset.filter = element
            li.innerHTML = `
            <p>${filterBtn.innerHTML}</p>
            <button class="deleteFilterBtn" value="${filterBtn.innerHTML}">
              <i class="fa-solid fa-xmark"></i>
            </button>
            `;
            li.className = "filterSelectedBox";
            li.style.backgroundColor = color;
            listcontainer.appendChild(li);
          }
        });
      });
    };

    searchInput.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      document.addEventListener("click", (f) => {
        if (!element.contains(f.target)) {
          searchInput.value = "";
          icon.style.transform = "rotate(0deg)";
          filterName.innerText = `${this._filterType}`;
          filterList.innerHTML = "";
        }
      });
      if (!filterList.innerHTML) {
        icon.style.transform = "rotate(180deg)";
        listfiltration(
          this._array,
          this._filterType,
          this._arraySelection,
          this._filterListContainer,
          this._color
        );
      }
    });
    searchInput.addEventListener("input", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.value) {
        const value = e.target.value[0].toUpperCase() + e.target.value.slice(1);
        if (value.length >= 3) {
          const searchResult = this._array.filter((element) =>
            element.startsWith(value)
          );
          filterList.innerHTML = "";
          listfiltration(
            searchResult,
            this._filterType,
            this._arraySelection,
            this._filterListContainer,
            this._color
          );
        }
      } else {
        listfiltration(
          this._array,
          this._filterType,
          this._arraySelection,
          this._filterListContainer,
          this._color
        );
      }
    });
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      searchInput.value = "";
      icon.style.transform = "rotate(0deg)";
      filterName.innerText = `${this._filterType}`;
      filterList.innerHTML = "";
    });
    return element;
  }
}
