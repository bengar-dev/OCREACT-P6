async function getPhotographers() {
  const response = await fetch("../data/photographers.json")
  const listJsonPhographers = await response.json()
  listJsonPhographers.photographers.forEach((photographer) => {
          
    let photograph = new Photographer(photographer);
    let articleTarget = document.querySelector(".photographer_section")

    articleTarget.append(photograph.getUserCardDom())

  });
}

getPhotographers();
