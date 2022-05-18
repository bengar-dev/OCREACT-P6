//Mettre le code JavaScript lié à la page photographer.html

const currentParams = new URLSearchParams(document.location.search)
const currentIdPhotograph = currentParams.get("id")

async function getPhotographer() {
    const response = await fetch("../data/photographers.json")
    const JsonPhotograph = await response.json()
    const array = JsonPhotograph.photographers
    const findPhotograph = array.find(p => p.id == currentIdPhotograph)
    const targetHeader = document.querySelector(".photograph-header")
    let newPhotographer = new Photographer(findPhotograph)
    targetHeader.append(newPhotographer.getUserDetails())
    const targetInfos = document.querySelector(".photograph-infos")
    targetInfos.innerHTML = `<div><p>284 1589 <img src="../assets/icons/heart.png" /></p></div>
    <div><p>${findPhotograph.price}€/jour</p></div>`
    const targetModal = document.querySelector(".modal-photograph")
    targetModal.innerHTML = `${findPhotograph.name}`
}

async function getMedias() {
  const response = await fetch("../data/photographers.json")
  const jsonMedias = await response.json()
  const array = jsonMedias.media
  array.forEach(media => {
    if(media.photographerId == currentIdPhotograph) {    
      MediaFactory.handleMedia(media)
    }

  })
}

getPhotographer()
getMedias()