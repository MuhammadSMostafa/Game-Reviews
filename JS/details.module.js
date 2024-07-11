import { UI } from "./ui.module.js";

export class Details {
  constructor() {
    this.game = document.querySelectorAll(".card-item");
    this.game.forEach((element) => {
      element.addEventListener("click", () => {
        this.getDetails(element.dataset.id);
      });
    });
  }

  async getDetails(id) {
    const ui = new UI();
    ui.showLoading();
    const data = await this.fetchData(id);
    ui.displayDetails(data);
  }

  async fetchData(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ecff0e1552mshf6b60167fec33efp1caa11jsn0af7c9017fda",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const data = await response.json();
    return data;
  }
}
