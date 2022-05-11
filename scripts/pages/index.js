async function getPhotographers() {
  await fetch("../data/photographers.json")
    .then((response) => response.json())
    .then((listJsonPhographers) => {
      listJsonPhographers.photographers.forEach((photographer) => {
          
        let photograph = new Photographer(photographer);
        let articleTarget = document.querySelector(".photographer_section")

        articleTarget.append(photograph.getUserCardDom())

      });
    })
    .catch((error) => {
      return false;
    });
}

getPhotographers();
