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

getPhotographer()