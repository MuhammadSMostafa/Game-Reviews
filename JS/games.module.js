import { UI } from "./ui.module.js";

export class Games {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((currentLink) => {
      currentLink.addEventListener("click", () => {
        document.querySelector(".nav-link.active").classList.remove("active");
        currentLink.classList.add("active");
        this.getCategory(currentLink.dataset.category);
      });
    });
  }

  async getCategory(category) {
    const ui = new UI();
    ui.showLoading();
    const data = await this.fetchData(category);
    ui.displayGames(data);
  }

  async fetchData(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ecff0e1552mshf6b60167fec33efp1caa11jsn0af7c9017fda",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const data = await response.json();
    return data;
  }
}
