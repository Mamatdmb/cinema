import { appelerApi } from "./api.js";
import { creerCarte } from "./affichage.js";

const films = document.getElementById("films");
const bouton = document.getElementById("load-more");
const tendances = ["tt15239678", "tt6263850", "tt22022452"];
let page = 1;

async function afficherTendance(id) {
  try {
    const film = await appelerApi("&i=" + id);
    films.appendChild(creerCarte(film));
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

async function chargerPlus() {
  try {
    const data = await appelerApi("&s=love&y=2024&page=" + page);
    data.Search.forEach((film) => {
      films.appendChild(creerCarte(film));
    });
    page = page + 1;
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

tendances.forEach((id) => {
  afficherTendance(id);
});
bouton.addEventListener("click", chargerPlus);