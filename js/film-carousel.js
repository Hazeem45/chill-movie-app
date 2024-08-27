const carousel = document.getElementById("carousel");
const filmsWatched = [
  {
    src: "https://s3-alpha-sig.figma.com/img/172d/0b0d/16ba29ed4f9110cc92c49cfa518cdd42?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTQZbYMXxY20FE~V6u-3Dm7bQY3j3XK3znEvTYPf0G7zSxvZr5ScVjUspMf1bVNUYbYPcPkG3A1r20waYPLufqNeMi~lVf6Cicm6LFSKxJst0zwP7S3IGfA5rnsmnS8A6BBFHXzO4v~R71k0A-WYCICgfYYx67YFkM0r0IlTKuTZH~13j~qz-4tyPksfhyxu1VA7U2yKuiZpJFePo-rkLJJBATfhKn-gtOTSAZwDnHLQ57ShuFf~JoDxCKHKE~wL0ILfDkGP~rXEY5dKxcwv5HOEz5FdGVTbOlGrPEyoQhIWhQuMtsoNgVgQnld2cdHuSwXXBuS0Emu4~QF2qhs1hw__",
    title: "Suzume",
    rating: "7.6/10",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/86eb/e770/66bd10e71fc69c2fb5c7719e382332a5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~s-ijRrymYXBlkYg92ZVMtWiVGf1WEWtRkN~g4dEQItP~vUGmM4kA9vemAHs4sJBaZ3Sh0wdl-jYiXvCCqBvoA2vdUE1zp9Q6Hg~9JfV~cNHBY21qK0Sc7Rsbhch7g-Uk-8OKHLA7JPyePFMTpa-zkHlMGMUqS765CR3~Nb4KOMwN0H6ISjNdPSrG2dYTqjWpPpuJ5pUnrdgqZoV8wzL~1HhnWL7aZ3pGDIh7t~Zwk9~IW2TIAfAANjKgcqC6uHX1R9tpETS12H7nDEfFWUjfOzDPnLCrjMH70bxZrCamlFi9WiWeSz1sMzCx4ghMa0B72wIEmHWl4~COFNWwxqKQ__",
    title: "The Batman",
    rating: "7.8/10",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/f001/6bab/6b2c07a3703453ff18f4ffedb1273177?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oPpG-WJtRN5tVPcGeqDExP~5X3E70rZ7Ibpm5retREKnucNN9EV7-WPL-a-qjRWGCMf4bMiX8Xurn1FIpjAD46JGNiKZZuPF26GZCfqLnTrNODbhL9SpCjQUEG9uSpe9M2eJFbAs2bqRNcGVMWuZiUYbkkwBYoDJiP3DXwiK8k3nLmJtLBhrkd~JpGCzBST~TRrEWx~pNCCvW4bP-hff7W2LuW0JLdI4Nr3~VFudLoW7KCULMtKTo7IUJ~hup-jxtmsp960XUYG8nadoqHsdUKzvc73c634UqTuYnhAIQaNpeTqM5rZKsGIicOW7gwmVGhuxuPe5dPU6X0vvPXAN~Q__",
    title: "Spiderman: Across the Spider-verse",
    rating: "8.6/10",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/82f7/ab25/4b87e8094b89c255d9b83ef7b669e963?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=crcSjRDAXslj6XjC-YtzFlUllridEgmlHqMq85FZnZKatpG3MP9ElFMIchPUBpRrHH8RDAo3Ge1fHTgEg4--oo96kesnmMTu7XsQOhzt-~20~Nw3DMcswLifPHcM1AvkEt41BuyMEMVipEB5jpABkyH0M8ZwMpM8ZM17S7Dr75Rz18DkTy~Mzd5vcU31dlGgeZfuGjvuE7sWM-2WsBLqNBGF7qPnncenLeI-1C2JEZi1mzXjWpzmMsNlSPc-uXpgFGUJxA~VxcHAP5s1WHcVPwxLDJ0fEj-2GQQD-~mkxD5~45pLoJiFFZEJxqXTDVY21Nqdq5BiGG4s0fcRoocE7Q__",
    title: "Doctor Strange: The Multiverse of Madness",
    rating: "6.9/10",
  },
  {
    src: "https://image.tmdb.org/t/p/original/nqUThBjou0TAWXu93Q4SNFpgqai.jpg",
    title: "Spiderman: No Way Home",
    rating: "8.2/10",
  },
  {
    src: "https://image.tmdb.org/t/p/original/9wXPKruA6bWYk2co5ix6fH59Qr8.jpg",
    title: "Avenger: End Game",
    rating: "8.4/10",
  },
  {
    src: "https://image.tmdb.org/t/p/original/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
    title: "Kimi No Namae Wa",
    rating: "8.4/10",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/34d6/c331/cab6e1c1349d98e2eefe7933424f0db7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jXr9kDdnObBdDUdETkoJgdKiqZ~LV~kgBdG1Ty9ZLqnRMXrzIRp59NnKaXVEtIqU~0iEm2qnAWXdoI-1~Afz8ZKKkwt1gh321-6RpquTmat3xFHSOtNFWuERxU3v4FHJdwKHImF2msuv6WlMW42~CXMYLlc1l1oKo~XVVMDWrQpkSBNLn9TOk6e9fdd1nwLV1C7HZAx72LE8aGr1mp204zdWi2xH0cJlyta0KZgn-Y1J9cYqW7QKKPAwv2XUkom5rHi3Bu2fAXlxoXrnxn17OzbQWUCyqt~RwI6oP1TFmra8Mk2~E0yf731U~UMhZHizn454DUlqaKX9im2JZ~6eag__",
    title: "Baymax!",
    rating: "7.2/10",
  },
];

filmsWatched.forEach((film) => {
  const filmItem = document.createElement("div");
  filmItem.className = "carousel-item";
  filmItem.innerHTML = `
      <img src="${film.src}" alt="${film.title}" />
      <div class="overlay"></div>
      <p>${film.title}</p>
      <p><i class="fa fa-star" style="font-size: 16px; margin-right: 4px" ></i> ${film.rating}</p>
  `;

  carousel.appendChild(filmItem);
});

carousel.addEventListener("wheel", (event) => {
  event.preventDefault();
  carousel.scrollLeft += event.deltaY;
});

function scrollNext() {
  carousel.scrollBy({left: 300, behavior: "smooth"});
}

function scrollPrev() {
  carousel.scrollBy({left: -300, behavior: "smooth"});
}
