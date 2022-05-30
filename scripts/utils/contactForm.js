function displayModal() {
  // ouverture de la modal contact
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
}

function closeModal() {
  // fermeture de la modal contact
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

function closeLightbox() {
  // fermeture de la lightbox
  const modal = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  lightboxContent.innerHTML = `
        <button class="btn-next" aria-label="Next image">
            <img src="assets/icons/arrow.svg" alt="Next image"/>
          </button>
          <button class="btn-prev" aria-label="Previous image">
            <img src="assets/icons/arrow.svg" alt="Previous image"/>
          </button>`;
  modal.style.display = "none";
}

function displayLightbox(array, indeximg) {
  // ouverture de la lightbox

  let index = indeximg; //initialisation de l'index, on lui donne l'index de l'image ciblé

  const modal = document.getElementById("lightbox"); // création de notre DOM
  const lightboxContent = document.querySelector(".lightbox-content");
  const img = document.createElement("img");
  const video = document.createElement("video");
  video.controls = "true";
  const source = document.createElement("source");
  video.append(source);
  img.setAttribute(
    "src",
    `assets/images/${array[index].photographerId}/${array[index].image}`
  );
  lightboxContent.append(img);

  modal.style.display = "flex"; // affichage de la modal

  const btnNext = document.querySelector(".btn-next");
  const btnPrev = document.querySelector(".btn-prev");

  const nextMedia = () => {
    // fonction qui va gérer le prochain média
    index += 1;
    if (index === array.length + 1) index = 0;
    if (array[index].video) {
      lightboxContent.removeChild(img);
      source.setAttribute(
        "src",
        `assets/images/${array[index].photographerId}/${array[index].video}`
      );
      source.setAttribute("autoplay", "video/mp4");
      lightboxContent.append(video);
    } else {
      if (!lightboxContent.contains(img)) lightboxContent.removeChild(video);
      img.setAttribute(
        "src",
        `assets/images/${array[index].photographerId}/${array[index].image}`
      );
      lightboxContent.append(img);
    }
  };

  const leftMedia = () => {
    // fonction qui va gérer le précédent média
    index -= 1;
    if (index === -1) index = array.length;
    if (array[index].video) {
      lightboxContent.removeChild(img);
      source.setAttribute(
        "src",
        `assets/images/${array[index].photographerId}/${array[index].video}`
      );
      lightboxContent.append(video);
    } else {
      if (!lightboxContent.contains(img)) lightboxContent.removeChild(video);
      img.setAttribute(
        "src",
        `assets/images/${array[index].photographerId}/${array[index].image}`
      );
      lightboxContent.append(img);
    }
  };

  window.addEventListener("keydown", (e) => {
    // listener sur les touches du clavier
    console.log(e.key);
    if (e.key === "ArrowRight")
      nextMedia(); // prochain média, touche flèche droite
    else if (e.key === "ArrowLeft")
      leftMedia(); // précédent média, touche flèche gauche
    else if (e.key === "Escape") closeLightbox(); // fermeture de la lightbox, touche echap
  });

  btnNext.addEventListener("click", (e) => {
    // listener boutton suivant
    e.preventDefault();
    nextMedia();
  });

  btnPrev.addEventListener("click", (e) => {
    // listener boutton précédent
    e.preventDefault();
    leftMedia();
  });
}
