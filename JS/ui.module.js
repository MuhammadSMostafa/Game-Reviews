import { Details } from "./details.module.js";

export class UI {
  displayGames(data) {
    let games = ``;
    data.forEach((element) => {
      games += `<div class="col-xl-3 col-lg-4 col-md-6">
          <div class="card-item d-flex flex-column " data-id="${element.id}">
            <div class="item-img">
              <img src="${element.thumbnail}" alt="game image" class="w-100" />
            </div>
            <div class="name-price d-flex justify-content-between">
              <p>${element.title}</p>
              <div class="price text-bg-primary">
                <p>free</p>
              </div>
            </div>
            <div class="game-info text-center">
              <p>${element.short_description}</p>
            </div>
            <div class="game-type d-flex justify-content-between p-2 position-relative mt-auto">
              <div class="type-item">
                <p>${element.genre}</p>
              </div>
              <div class="type-item">
                <p>${element.platform}</p>
              </div>
            </div>
          </div>
        </div>`;
    });
    this.hideLoading();
    document.querySelector(".main-home .home").innerHTML = games;
    new Details();
  }

  displayDetails(game) {
    const gameDetails = `  <div class="container">
        <div class="header d-flex justify-content-between">
          <h3>Details Game</h3>
          <span class="icon">
            <i class="fa-solid fa-xmark" id="closePage"></i>
          </span>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src="${game.thumbnail}" alt="game image" class="w-100" />
          </div>
          <div class="col-md-8">
            <div class="data">
              <h2>Title: <span class="info">${game.title}</span></h2>
              <p>Category: <span class="info">${game.genre}</span></p>
              <p>Platform: <span class="info">${game.platform}</span></p>
              <p>Status: <span class="info">${game.status}</span></p>
              <p class="game-info">${game.description}</p>
            </div>
            <a href="${game.game_url}" target="_blank">
                <button class="btn">
                    Show Game
                </button>
            </a>
          </div>
        </div>
      </div>`;
    this.hideLoading();
    document.querySelector(".details").innerHTML = gameDetails;
    this.showDetails();
  }

  showLoading() {
    document.querySelector(".loading").classList.remove("d-none");
  }
  hideLoading() {
    document.querySelector(".loading").classList.add("d-none");
  }

  showDetails() {
    document.querySelector(".home-container").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
    document.getElementById("closePage").addEventListener("click", () => {
      this.hideDetails();
    });
  }
  hideDetails() {
    document.querySelector(".details").classList.add("d-none");
    document.querySelector(".home-container").classList.remove("d-none");
  }
}
