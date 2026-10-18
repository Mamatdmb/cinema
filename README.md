# cinema
Projet : cinéma 
# Cinéma : Mini-Projet JavaScript

Site de films qui utilise l'API OMDb : films tendance, recherche en temps réel et fiche détaillée de chaque film.

## Lien GitHub

https://github.com/Mamatdmb/cinema

## Lancer le projet

Les pages doivent être servies en HTTP :

- avec l'extension **Live Server** de VS Code : clic droit sur `index.html`, puis "Open with Live Server" ;
- ou avec npm : `npx serve`, puis ouvrir l'adresse indiquée.

## Pages

- **index.html** : films tendance (affiche, titre, résumé) et bouton pour charger plus de films de 2024.
- **search.html** : recherche en temps réel, sans rechargement de la page, avec un bouton "Charger plus de résultats".
- **movie.html** : détail d'un film (titre, affiche, résumé complet, genre, acteurs, notes, date de sortie DVD au format jj/mm/aaaa).

## Structure

- `js/api.js` : appels à l'API OMDb
- `js/affichage.js` : création des cartes de films
- `js/index.js`, `js/search.js`, `js/movie.js` : un script par page
- `css/style.css` : thème marron, terracotta et beige

## Organisation Git

- `main` : version finale
- `develop` : branche de travail
- `feature/movie`, `feature/index`, `feature/search`, `feature/style`, `docs/readme` : une branche par fonctionnalité, fusionnée dans `develop` par Pull Request
- Messages de commit au format Conventional Commits (`feat`, `style`, `docs`, `chore`)

## Auteure

Mamatou Doumbia, SUPINFO