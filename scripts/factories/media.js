const articleTarget = document.querySelector(".photograph-medias");

class MediaFactory { // class MediaFactory qui va nous permettre de gérer le type de média

  static handleMedia(data, array) {

    // on cherche l'index du media qu'on doit gérer
    const indexMedia = array.findIndex((p) => p.image === data.image);

    if (data.image) { // si le média est une image alors on lui créé une class Image avec une Card qui correspond
      let imageMediaPhotograph = new Image(data);
      articleTarget.append(
        imageMediaPhotograph.getImageCard(array, indexMedia)
      );
    } else { // sinon notre média est une vidéo alors on lui créé une class Video
      let videoMediaPhotograph = new Video(data);
      articleTarget.append(
        videoMediaPhotograph.getVideoCard(array, indexMedia)
      );
    }

    let total = 0; // on initialise notre total de likes à 0
    const totalCount = document.querySelectorAll(".count-btn"); // on récupère le nbr de likes de chaques médias
    const target = document.querySelector(".photograph-infos div p span");
    totalCount.forEach((el) => { // pour chaques nombres de likes on vient incrémenter notre total
      total += +el.textContent;
      target.textContent = total;// on renvoi notre total dans notre div total
    });

  }
}

class Media { // class Media

  constructor(data) {
    data && Object.assign(this, data);
  }

}

class Image extends Media { // class Image

  constructor(data) {
    super(data);
  }

  getImageCard(array, indexMedia) { // création d'une card image
    const image = `assets/images/${this.photographerId}/${this.image}`;
    const article = document.createElement("article");
    const img = document.createElement("img");
    const altTxt = this.image.split(".jpg")[0];
    img.setAttribute("src", image);
    img.setAttribute("alt", `${altTxt}, closeup view`);

    img.addEventListener("click", () => { // on ajoute un listener sur notre card pour afficher la lightbox
      displayLightbox(array, indexMedia, image);
    });

    const title = document.createElement("div");
    title.classList.add("title-card");
    const h2 = document.createElement("h2");
    h2.textContent = this.title;
    const heart = document.createElement("img");
    heart.setAttribute("src", "assets/icons/heart.svg");
    heart.setAttribute("alt", "likes");
    const countDiv = document.createElement("div");
    countDiv.classList.add("count-heart");
    const countTxt = document.createElement("span");
    countTxt.classList.add("count-btn");
    let value = Math.floor(Math.random() * 60); // on génère un nombre de likes random
    countTxt.textContent = value;
    countTxt.addEventListener("click", () => { // listener qui va nous permettre de rajouter un like
      value++;
      countTxt.textContent = value;
      const totalTarget = document.querySelector(
        ".photograph-infos div p span"
      );
      totalTarget.textContent++;
    });
    countDiv.append(countTxt);
    countDiv.append(heart);
    title.append(h2);
    title.append(countDiv);
    article.append(img);
    article.append(title);

    return article;
  }
}

class Video extends Media { // class Video

  constructor(data) {
    super(data);
  }

  getVideoCard() { // création d'une carte vidéo
    const videoUrl = `assets/images/${this.photographerId}/${this.video}`;
    const article = document.createElement("article");
    const video = document.createElement("video");
    const source = document.createElement("source");
    source.setAttribute("src", videoUrl);
    video.append(source);
    const h2 = document.createElement("h2");
    h2.textContent = this.title;
    const heart = document.createElement("img");
    heart.setAttribute("src", "assets/icons/heart.svg");
    heart.setAttribute("alt", "likes");
    const title = document.createElement("div");
    title.classList.add("title-card");
    title.append(h2);
    title.append(heart);
    article.append(video);
    article.append(title);

    return article;
  }
}
