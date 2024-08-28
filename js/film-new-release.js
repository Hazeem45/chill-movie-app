const carouselNewFilm = document.getElementById("carousel-new-film");
const newFilm = [
  {
    src: "https://image.tmdb.org/t/p/original/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg",
    title: "Deadpoll-n-Wolverine",
    updated: false,
    topRating: true,
  },
  {
    src: "https://image.tmdb.org/t/p/original/8mRrl8lc7TrbdA1PFzUhQ0nFZ7R.jpg",
    title: "venom-3",
    updated: false,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
    title: "frieren",
    updated: true,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/oJdVHUYrjdS2IqiNztVIP4GPB1p.jpg",
    title: "loki",
    updated: true,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/o7MpXc9OR90fuGNRpe4R1qxA02x.jpg",
    title: "shikanoko",
    updated: true,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/5cAuJOfd5tuuFBz2yQmBCtVBaj0.jpg",
    title: "Beyond-the-Spider-Verse",
    updated: false,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/lhaVFq4WHhxpTOoBfzATiE5vSEG.jpg",
    title: "civil-war-2024",
    updated: false,
    topRating: true,
  },
  {
    src: "https://image.tmdb.org/t/p/original/mvphQkTzkMyeJ1E7YmLDc8nc7SS.jpg",
    title: "alya-san/tokidoki-bossoto",
    updated: true,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
    title: "planet-apes",
    updated: false,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    title: "godzilla-kong",
    updated: false,
    topRating: false,
  },
  {
    src: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    title: "inside-out-2",
    updated: false,
    topRating: true,
  },
];

newFilm.forEach((film) => {
  const posterItem = document.createElement("div");
  posterItem.className = "carousel-poster-item";
  posterItem.innerHTML = `
        <img src="${film.src}" alt="${film.title}" />
        <div class="${film.topRating ? "label-trending" : "display-none"}">Top 10</div>
        <div class="${film.updated ? "label-updated" : "display-none"}">Episode Baru</div>
    `;

  carouselNewFilm.appendChild(posterItem);
});

carouselNewFilm.addEventListener("wheel", (event) => {
  event.preventDefault();
  carouselNewFilm.scrollLeft += event.deltaY;
});

function scrollNextNewFilm() {
  carouselNewFilm.scrollBy({left: 300, behavior: "smooth"});
}

function scrollPrevNewFilm() {
  carouselNewFilm.scrollBy({left: -300, behavior: "smooth"});
}
