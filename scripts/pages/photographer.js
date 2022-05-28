//Mettre le code JavaScript lié à la page photographer.html

const currentParams = new URLSearchParams(document.location.search)
const currentIdPhotograph = currentParams.get("id")

const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')
const submitBtn = document.querySelector('.contact_button')

async function getPhotographer() {
    const response = await fetch("../data/photographers.json")
    const JsonPhotograph = await response.json()
    const array = JsonPhotograph.photographers
    const arrayMedia = JsonPhotograph.media
    const findPhotograph = array.find(p => p.id == currentIdPhotograph)

    const targetHeader = document.querySelector(".photograph-header")
    let newPhotographer = new Photographer(findPhotograph)
    targetHeader.append(newPhotographer.getUserDetails())
    
    const targetInfos = document.querySelector(".photograph-infos")
    targetInfos.innerHTML = `<div><p>284 1589 <img src="../assets/icons/heart.png" /></p></div>
    <div><p>${findPhotograph.price}€/jour</p></div>`

    const targetModal = document.querySelector(".modal-photograph")
    targetModal.innerHTML = `${findPhotograph.name}`

    const filteredMediaArray = newPhotographer.mediaArray(arrayMedia, newPhotographer)
    filteredMediaArray.forEach(media => {
      MediaFactory.handleMedia(media, filteredMediaArray)     
    })
}

getPhotographer()

submitBtn.addEventListener('click', (e) => {

  e.preventDefault()
  
  const data = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    msg: msg.value
  }
  console.log(data)
  firstname.value = ''
  lastname.value = ''
  email.value = ''
  msg.value = ''

  closeModal()
})
