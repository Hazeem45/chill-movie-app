const carouselTrendingFilm = document.getElementById("carousel-film-trending");
const filmsTrending = [
  {
    src: "https://image.tmdb.org/t/p/original/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg",
    title: "dark-knight",
  },
  {
    src: "https://image.tmdb.org/t/p/original/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg",
    title: "Deadpoll-n-Wolverine",
  },
  {
    src: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    title: "interstellar",
  },
  {
    src: "https://image.tmdb.org/t/p/original/isiGxhIx99SVIxrwZi8qeey4pZm.jpg",
    title: "kimi-no-nawa",
  },
  {
    src: "https://image.tmdb.org/t/p/original/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    title: "inside-out-2",
  },
  {
    src: "https://image.tmdb.org/t/p/original/lhaVFq4WHhxpTOoBfzATiE5vSEG.jpg",
    title: "civil-war-2024",
  },
  {
    src: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    title: "no-way-home",
  },
  {
    src: "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    title: "return-of-king",
  },
  {
    src: "https://image.tmdb.org/t/p/original/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    title: "parasite",
  },
  {
    src: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    title: "the-batman",
  },
];

filmsTrending.forEach((film) => {
  const posterItem = document.createElement("div");
  posterItem.className = "carousel-poster-item";
  posterItem.innerHTML = `
        <img src="${film.src}" alt="${film.title}" />
        <div class="label-trending">Top 10</div>
    `;

  carouselTrendingFilm.appendChild(posterItem);
});

carouselTrendingFilm.addEventListener("wheel", (event) => {
  event.preventDefault();
  carouselTrendingFilm.scrollLeft += event.deltaY;
});

function scrollNextTrending() {
  carouselTrendingFilm.scrollBy({left: 300, behavior: "smooth"});
}

function scrollPrevTrending() {
  carouselTrendingFilm.scrollBy({left: -300, behavior: "smooth"});
}
