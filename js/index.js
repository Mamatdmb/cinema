import { getMovie, searchMovies } from "./api.js";
import { creerCarte } from "./affichage.js";

const TENDANCES = ["tt15239678", "tt6263850", "tt22022452", "tt9218128", "tt1262426", "tt13622970"];

const conteneur = document.getElementById("films");
const bouton = document.getElementById("load-more");
let page = 0;

async function afficherTendances() {
  try {
    const films = await Promise.all(TENDANCES.map((id) => getMovie(id, "short")));
    films.forEach((film) => conteneur.appendChild(creerCarte(film, true)));
  } catch (erreur) {
    conteneur.textContent = "Erreur : " + erreur.message;
  }
}

async function chargerPlus() {
  page++;
  try {
    const { films, total } = await searchMovies("love", page, "2024");
    films.forEach((film) => conteneur.appendChild(creerCarte(film)));
    if (page * 10 >= total) bouton.hidden = true;
  } catch (erreur) {
    bouton.textContent = "Erreur : " + erreur.message;
  }
}

bouton.addEventListener("click", chargerPlus);
afficherTendances();