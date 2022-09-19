class App {
  constructor() {
    this.photographBlockphotographBlockWrapper =
      document.querySelector("#main > div");
    this.photographApi = new PhotographApi("/data/photographers.json");
  }
  async main() {
    const photographsData = await this.photographApi.getPhotograph();
    console.log("this.photographApi.getPhotograph()" + photographsData);

    photographsData
      .map((photograph) => new Photographs(photograph))
      .forEach((photograph) => {
        const Template = new PhotographCard(photograph);
        this.photographBlockphotographBlockWrapper.appendChild(
          Template.createPhotographCard()
        );
      });
  }
}

const app = new App();
app.main();
