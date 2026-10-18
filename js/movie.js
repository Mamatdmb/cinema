import { getMovie, getPoster } from "./api.js";

const MOIS = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
               Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };

function formatDate(date) {
  if (!date || date === "N/A") return "Non disponible";
  const [jour, mois, annee] = date.split(" ");
  return `${jour.padStart(2, "0")}/${MOIS[mois]}/${annee}`;
}

async function afficherFilm() {
  const id = new URLSearchParams(window.location.search).get("id");
  if (!id) {
    document.getElementById("title").textContent = "Aucun film sélectionné";
    return;
  }

  try {
    const film = await getMovie(id);
    document.title = film.Title;

    const poster = document.getElementById("poster");
    poster.src = getPoster(film.Poster);
    poster.alt = "Affiche de " + film.Title;

    document.getElementById("title").textContent = film.Title;
    document.getElementById("genre").textContent = "Genre : " + film.Genre;
    document.getElementById("actors").textContent = "Acteurs : " + film.Actors;
    document.getElementById("plot").textContent = film.Plot;
    document.getElementById("dvd").textContent = "Sortie DVD : " + formatDate(film.DVD);

    const ratings = document.getElementById("ratings");
    (film.Ratings || []).forEach((note) => {
      const li = document.createElement("li");
      li.textContent = `${note.Source} : ${note.Value}`;
      ratings.appendChild(li);
    });
  } catch (erreur) {
    document.getElementById("title").textContent = "Erreur : " + erreur.message;
  }
}

afficherFilm();