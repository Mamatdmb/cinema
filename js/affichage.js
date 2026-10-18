import { getPoster } from "./api.js";

export function creerCarte(film, avecResume = false) {
  const carte = document.createElement("article");
  carte.className = "carte";

  const lien = document.createElement("a");
  lien.href = `movie.html?id=${film.imdbID}`;

  const img = document.createElement("img");
  img.src = getPoster(film.Poster);
  img.alt = "Affiche de " + film.Title;

  const titre = document.createElement("h3");
  titre.textContent = film.Title;

  lien.append(img, titre);
  carte.appendChild(lien);

  if (avecResume && film.Plot && film.Plot !== "N/A") {
    const resume = document.createElement("p");
    resume.textContent = film.Plot;
    carte.appendChild(resume);
  }
  return carte;
}