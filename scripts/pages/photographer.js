//Mettre le code JavaScript lié à la page photographer.html

const currentParams = new URLSearchParams(document.location.search);
const currentIdPhotograph = currentParams.get("id"); // nous permet d'obtenir l'id du photograph dans l'url

// déclaration des querySelector
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const submitBtn = document.querySelector(".contact_button");

async function getPhotographer() {
  // fonction async qui va nous permettre d'obtenir les détails de notre Photograph

  const response = await fetch("../data/photographers.json");
  const JsonPhotograph = await response.json();
  const array = JsonPhotograph.photographers;
  const arrayMedia = JsonPhotograph.media;

  const findPhotograph = array.find((p) => p.id === parseInt(currentIdPhotograph)); // on cible le photograph obtenu dans notre tableau en le filtran avec l'id obtenu dans l'url

  const targetHeader = document.querySelector(".photograph-header");

  let newPhotographer = new Photographer(findPhotograph); // on lui créé une class Photographer
  targetHeader.append(newPhotographer.getUserDetails()); // et on appelle getUserDetails qui va nous permettre de gérer les informations du photograph

  // création de la div information en bas de notre page, qui rassemble le prix et le nombres total de likes.
  const targetInfos = document.querySelector(".photograph-infos");
  targetInfos.innerHTML = `<div><p><span></span> <img src="../assets/icons/heart.png" alt="likes"/></p></div>
    <div><p>${findPhotograph.price}€/jour</p></div>`;

  // affichage du nom de notre photograph
  const targetModal = document.querySelector(".modal-photograph");
  targetModal.innerHTML = `${findPhotograph.name}`;

  // gestion du tableau des médias de notre photograph
  const filteredMediaArray = newPhotographer.mediaArray(
    arrayMedia,
    newPhotographer
  );
  filteredMediaArray.forEach((media) => {
    MediaFactory.handleMedia(media, filteredMediaArray);
  });
}

getPhotographer(); // appel de notre fonction async

// listener sur notre boutton submit de notre modal Contact
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // récupération des données + affichage dans la console
  const data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    msg: msg.value,
  };
  console.log(data);

  // on reset notre formulaire
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  msg.value = "";
  // on ferme notre modal
  closeModal();
});
