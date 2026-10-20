const URL_API = "https://www.omdbapi.com/?apikey=6896f3f";

export async function appelerApi(parametres) {
  const response = await fetch(URL_API + parametres);
  if (!response.ok) {
    throw new Error("Erreur HTTP " + response.status);
  }
  const data = await response.json();
  return data;
}