import { appelerApi } from "./api.js";
import { creerCarte } from "./affichage.js";

const champ = document.getElementById("recherche");
const resultats = document.getElementById("resultats");
const message = document.getElementById("message");
const bouton = document.getElementById("load-more");
let page = 1;

async function chercher() {
  try {
    const data = await appelerApi("&s=" + champ.value + "&page=" + page);
    if (page === 1) {
      resultats.innerHTML = "";
    }
    if (data.Response === "False") {
      message.textContent = "Aucun résultat";
      bouton.style.display = "none";
      return;
    }
    message.textContent = "";
    data.Search.forEach((film) => {
      resultats.appendChild(creerCarte(film));
    });
    bouton.style.display = "block";
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

function nouvelleRecherche() {
  page = 1;
  if (champ.value.length >= 3) {
    chercher();
  } else {
    resultats.innerHTML = "";
    message.textContent = "Tape au moins 3 lettres";
    bouton.style.display = "none";
  }
}

function chargerPlus() {
  page = page + 1;
  chercher();
}

champ.addEventListener("keyup", nouvelleRecherche);
bouton.addEventListener("click", chargerPlus);