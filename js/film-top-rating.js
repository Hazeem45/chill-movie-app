const carouselTopRating = document.getElementById("carousel-top-rating");
const filmsTopRating = [
  {
    src: "https://image.tmdb.org/t/p/original/oJdVHUYrjdS2IqiNztVIP4GPB1p.jpg",
    title: "loki",
    series: true,
  },
  {
    src: "https://image.tmdb.org/t/p/original/mvphQkTzkMyeJ1E7YmLDc8nc7SS.jpg",
    title: "alya-san/tokidoki-bossoto",
    series: true,
  },
  {
    src: "https://image.tmdb.org/t/p/original/11keFudto4QrgrXChukexJwdHPe.jpg",
    title: "moon-knight",
    series: true,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/0698/bec5/abe04843f0aceb335745ff6c6f63aa99?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kf0sE~1ijEqQk4MmosiKziDdqBExhshPdarSSHfuFeZ-867glRTbUu9vrYfTWY70bIqj28lFq1EdXyXSntDyYqH2lsRbWCU0zLkIY1r~NmdIR0JdtPdH8gylvB4JM9YeY62aQx7G1DsY4NIn32Xm3QPQNKpCLt~OEKwp8EDTJc4LwtcSdQVU9DIruxci-pRdY7q3-USyGujmz6zZFT4yvXovg5n6uBXhctw6uMdlC2Mu2Ylhxsn1NSuz09IkmmnmmuayQ54raAGTVMWl9-3h5pW5x2~qyz9qPTsE3~3SO70vLaO8fHiFoPxjUsUiCxpR2nEna7gWNfdwXkKBVdqrNw__",
    title: "GOTG",
    series: false,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/66f5/b172/b02ee5140c6c3950674ff222c25a2afc?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UMpAINv7mDN0wdAvaZ300fMbYMrIQPqyttAtfwWHOW5bvLkO9X0thq1yG7-VRyR3jDXUnlbvGhL9eN4Q1Cq7uVurl5-Vi571DrqpJzqfYf7EVDvzrRlnTFTrPBQT0~fhbJcl~mqHDi~bh4WJvS9OsSTtdCwupOF6malts9sK7fC1r7kxL3DIBrZLR7inqBeL7zrPwJM5FOHiaMix~GHZq7k0Po-tdGfKO5h8dJlrKm4~g3d99ONXVFPWzAh6x1FpfkYiik1XIFTb9UgF7Uyp2jm6WBbxzMJArNht8cEwtcbY~UU3adTTHMf0dTxR7O4srf97tNpYnvxYyyAcCUqHHg__",
    title: "tomorrow-war",
    series: false,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/f13a/41ae/67ffc54c229ba84966d225c70f917ceb?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nuq~7XkTtCfbKT2IaPb4BU-dqXdSc60INCskkdco1aIyZSLGHjJZ7dnkONkpk-ZsROPlyQQToy1zXn0ZWgXuPH30bfO3OAUi0bznnGABBgRGGwO~kjQ1VbdBIXnkCYJ0QG7M8xEy69jVHxeKjPGrxLAPkgW-G8fmCFj-LZACTN3-Rv7leIWvpcTxtk-fXe4PrQEaZJLV8pgAeL4TuW2EKLeyGtTEqEU9okoRqn2gsHpvmle4Umts5pG4a6IacWPEszbVE0VhYWFZaUEye7l~GRqyCPShp5uXL6XCxUbAtatggwg0tqefsEnFG5INFs2afbGUG1RUNelrWipCM-EfTQ__",
    title: "jurassic-world",
    series: false,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/a7eb/5ffb/17161b60d3ca432abae13fb3d9de0655?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mQxfloPWdIaXHelqdEsCS-B030OYR~qYvjulaWJ1YcR~bJ2YNzMen8C62u61hQuTIhNpX5jnCRFYTK7BjwEigCTigSWfW59XFxR9-oqFboZ-eJ1D0iEAWXD5YrTlNDUuP8o4vw3dYdry1XJPq~kh3YIhPLLQLnE6ZA95qCbZDNuWbVgBkmGshcZ3oEt~uxe5CN97XaHjsTiaA3PymeR-0PnvIrRtGeh7afy2HT7FHx3pSI1K~0QRr~RYn3JPCODVyT-2Aepet3K86VFmUYUsmYYrd~3owepSxLWEZimEapxqEMt0W3lYPnyNpmMMOl8s0pXwZ0s6JoKiSThfk3TPuw__",
    title: "BNHA",
    series: false,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bb01/034a/195ca385847dfb00597f0a200c613751?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qmIspArylRGeuU~vEVaEwBiN~GPK1PrDmBvJm67Jg3oQOG09qIPdzrC4IiPUo~OzoBqH7oQJe~NaeCGX7ycp8STxX2F71LKcUNxL7QKYQzB849dW0G-SEOeTerzxzZvBCqs7~pThNqHZ~JD1lxzVJk2S5waQoU1v7EEqtEl68GhEoRDAJxRrjztvE4HbSYYnLKVzkt4NY03rzZc-VffS7hsoJbDbVNe5gCrkE03M7nzeGimquVOUdwanw5WD8ATEuMKA8KXerRf~80mR2OemmS-~6Tyi1FpoEe0-wvdEbIge05N1OqEsJWCYkCYCJ5P0wnsBkv5bD-UlipwfLt8O7A__",
    title: "sonic-2",
    series: false,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/bcb4/09f7/ab042531436332710f400d7c925035be?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DNDTV1KslIAxl9XN0Fvj9S04KTl32lPf87zZaED9ISWhTeDRH9x0lngKq~xXC3oNu-lZ92qVPxVbyaTMc30A8CmlRqME4xLDdFL9B4CwYRVZ9BgBANm-VhpPI0FyNMGDlhjJWHIeOork9qE5F4r6mp7izlrK0YGg1YY5e~32422lIfFsK3V9tyzOmam-GvtVrygj-Wt5X6vWTtzFgMy6gH2WzMtDV6El8dMz4tNuPUaei2EEk5iY3osuw34QerxQI0lsCtIZx3CYOvfINzV7SZcTXdoPeyqRBGvf8Bn9W-O9Y4NCv2Ypcs9I5XsbC0vZMiVXX1mCbfPYpbA9MXlf2A__",
    title: "rio",
    series: false,
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/149b/9081/f9e764a3a46e6c1b9ed29d6592db1020?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kICQwNbkoprCsYChdOoWRbMeqnE8q73MNJ7s10NQWxhdbZNSgvOBKsbDNJ4NKxAlkMKW8-EUehRaYgihVEKlwDPeXrCz8cwhjvlCfuPkTxrTMkOwrCdkZw2AUNVdnm1cRAj-mZpBUIn3R3jFR~-QSxvkI0G9U0tknE3j4Nk4VUWcOxJm8cez9PR-89lTuuZXVo3QteBzTZ1ITU7E0WUpvHmy79oMBN6daTTw3-cQC3n~E7GjFHSgNBwmbQj7eTsj6Rno7tjxK8C9PMWid7AGRlYoQxAyjnC24CW-P-LQVk0~bbqR1rEn7ksvVGKyyEpUuo8fd~Aj~fpxeFB2gX0ReQ__",
    title: "big-hero-6",
    series: false,
  },
];

filmsTopRating.forEach((film) => {
  const posterItem = document.createElement("div");
  posterItem.className = "carousel-poster-item";
  posterItem.innerHTML = `
        <img src="${film.src}" alt="${film.title}" />
        <div class="${film.series ? "label-updated" : "display-none"}">Episode Baru</div>
    `;

  carouselTopRating.appendChild(posterItem);
});

carouselTopRating.addEventListener("wheel", (event) => {
  event.preventDefault();
  carouselTopRating.scrollLeft += event.deltaY;
});

function scrollNextTopRating() {
  carouselTopRating.scrollBy({left: 300, behavior: "smooth"});
}

function scrollPrevTopRating() {
  carouselTopRating.scrollBy({left: -300, behavior: "smooth"});
}
