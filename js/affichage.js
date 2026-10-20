export function creerCarte(film) {
  const carte = document.createElement("div");
  carte.className = "carte";

  const lien = document.createElement("a");
  lien.setAttribute("href", "movie.html");
  lien.addEventListener("click", () => {
    localStorage.setItem("filmId", film.imdbID);
  });

  const image = document.createElement("img");
  image.setAttribute("src", film.Poster);
  image.setAttribute("alt", film.Title);

  const titre = document.createElement("h3");
  titre.textContent = film.Title;

  lien.appendChild(image);
  lien.appendChild(titre);
  carte.appendChild(lien);
  return carte;
}