const API_KEY = "6896f3f";
const BASE_URL = "https://www.omdbapi.com/";
export async function getMovie(id) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  if (!response.ok) throw new Error("Erreur HTTP " + response.status);
  const data = await response.json();
  if (data.Response === "False") throw new Error(data.Error);
  return data;
}
export async function searchMovies(query, page = 1, year = "") {
  let url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=${page}`;
  if (year) url += `&y=${year}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Erreur HTTP " + response.status);
  const data = await response.json();
  if (data.Response === "False") return { films: [], total: 0 };
  return { films: data.Search, total: Number(data.totalResults) };
}
export function getPoster(poster) {
  return poster && poster !== "N/A" ? poster : "https://placehold.co/300x445?text=Pas+d'affiche";
}