import { appelerApi } from "./api.js";

async function afficherFilm() {
  const id = localStorage.getItem("filmId");
  try {
    const film = await appelerApi("&i=" + id + "&plot=full");
    document.getElementById("poster").setAttribute("src", film.Poster);
    document.getElementById("title").textContent = film.Title;
    document.getElementById("genre").textContent = "Genre : " + film.Genre;
    document.getElementById("actors").textContent = "Acteurs : " + film.Actors;
    document.getElementById("plot").textContent = film.Plot;
  } catch (erreur) {
    console.error("Erreur :", erreur);
  }
}

afficherFilm();