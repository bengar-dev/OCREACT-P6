

async function getPhotographers() { // fonction asynchrone qui va nous permettre de récupérer chaque photographe

  const response = await fetch("../data/photographers.json")
  const listJsonPhographers = await response.json()

  listJsonPhographers.photographers.forEach((photographer) => { // on parcours le tableau de photograph obtenu
          
    let photograph = new Photographer(photographer); // pour chaque photograph on lui créé une nouvelle class Photograph
    let articleTarget = document.querySelector(".photographer_section")

    articleTarget.append(photograph.getUserCardDom()) // on appelle créé une carte utilisateur pour notre photograph

  });
}

getPhotographers(); // appel de notre fonction async
