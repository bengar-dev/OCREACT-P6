class Photographer {
  // class Photographer

  constructor(data) {
    data && Object.assign(this, data);
  }

  getUserCardDom() {
    // Création d'une carte photograph dans notre Dom
    const picture = `assets/photographers/${this.portrait}`;
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", this.name);
    const linkDetail = document.createElement("a");
    linkDetail.setAttribute("class", "photograph_link");
    linkDetail.setAttribute("href", `photographer.html?id=${this.id}`);
    const h2 = document.createElement("h2");
    h2.textContent = this.name;
    linkDetail.append(img);
    linkDetail.append(h2);
    const location = document.createElement("span");
    location.className = "photograph_location";
    location.textContent = `${this.city}, ${this.country}`;
    const desc = document.createElement("p");
    desc.className = "photograph_desc";
    desc.textContent = `${this.tagline}`;
    const price = document.createElement("span");
    price.className = "photograph_price";
    price.textContent = `${this.price}€/jour`;
    article.appendChild(linkDetail);
    article.append(location);
    article.append(desc);
    article.append(price);
    return article;
  }

  getUserDetails() {
    // gestion des informations du photograph

    const detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "header_details");
    const h1 = document.createElement("h1");
    h1.textContent = this.name;
    const location = document.createElement("span");
    location.setAttribute("class", "details_location");
    location.textContent = `${this.city}, ${this.country}`;
    const desc = document.createElement("p");
    desc.setAttribute("class", "details_desc");
    desc.textContent = this.tagline;
    detailsDiv.append(h1);
    detailsDiv.append(location);
    detailsDiv.append(desc);

    const btnContact = document.createElement("button");
    btnContact.setAttribute("class", "contact_button");
    btnContact.setAttribute("aria-label", "Contact Me");
    btnContact.addEventListener("click", () => {
      // listener pour ouvrir notre modal contact
      displayModal();
    });
    btnContact.textContent = `Contactez-moi`;

    const picture = `assets/photographers/${this.portrait}`;
    const imgProfil = document.createElement("img");
    imgProfil.setAttribute("class", "img-profil");
    imgProfil.setAttribute("alt", this.name);
    imgProfil.setAttribute("src", picture);

    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "header_photographer");
    headerDiv.append(detailsDiv);
    headerDiv.append(btnContact);
    headerDiv.append(imgProfil);

    return headerDiv;
  }

  mediaArray(array, objectPhotograph) {
    // fonction qui nous retourne un tableau de média correspondant à notre photograph
    const findMedia = array.filter(
      (p) => p.photographerId === parseInt(objectPhotograph.id)
    );
    return findMedia;
  }
}
