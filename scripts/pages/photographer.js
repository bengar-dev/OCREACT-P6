//Mettre le code JavaScript lié à la page photographer.html

const currentParams = new URLSearchParams(document.location.search)
const currentIdPhotograph = currentParams.get("id")

async function getPhotographer() {
    await fetch("../data/photographers.json")
      .then((response) => response.json())
      .then((JsonPhotograph) => {

        const array = JsonPhotograph.photographers
        const findPhotograph = array.find(p => p.id == currentIdPhotograph)
        let target = document.querySelector(".photograph-header")
        let newPhotographer = new Photographer(findPhotograph)

        target.append(newPhotographer.getUserDetails())
    
      })
      .catch((error) => {
        return false;
      });
}

async function getMedias() {
    await fetch("../data/photographers.json")
      .then((response) => response.json())
      .then((jsonMedias) => {
        const array = jsonMedias.media
        array.forEach(media => {

          if(media.photographerId == currentIdPhotograph) {
            
            if(media.image) {
              let imageMediaPhotograph = new Image(media)
              
            } else {
              let videoMediaPhotograph = new Video(media)
            }

          }

        })
      })
      .catch((error) => {
        return false
      })
}

getPhotographer()
getMedias()