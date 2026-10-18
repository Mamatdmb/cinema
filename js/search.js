import { searchMovies } from "./api.js";
import { creerCarte } from "./affichage.js";

const champ = document.getElementById("recherche");
const resultats = document.getElementById("resultats");
const message = document.getElementById("message");
const bouton = document.getElementById("load-more");

let recherche = "";
let page = 1;
let delai;

async function chercher(nouvelleRecherche) {
  if (nouvelleRecherche) {
    page = 1;
    resultats.replaceChildren();
  }

  if (recherche.length < 3) {
    message.textContent = "Tape au moins 3 lettres";
    bouton.hidden = true;
    return;
  }

  const requete = recherche;
  message.textContent = "Recherche en cours...";

  try {
    const { films, total } = await searchMovies(requete, page);
    if (requete !== recherche) return;

    if (total === 0) {
      message.textContent = "Aucun résultat";
      bouton.hidden = true;
      return;
    }

    message.textContent = `${total} résultat(s)`;
    films.forEach((film) => resultats.appendChild(creerCarte(film)));
    bouton.hidden = page * 10 >= total;
  } catch (erreur) {
    message.textContent = "Erreur : " + erreur.message;
  }
}

champ.addEventListener("input", () => {
  clearTimeout(delai);
  delai = setTimeout(() => {
    recherche = champ.value.trim();
    chercher(true);
  }, 400);
});

bouton.addEventListener("click", () => {
  page++;
  chercher(false);
});