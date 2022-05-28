function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function closeLightbox() {
    const modal = document.getElementById("lightbox")
    modal.style.display = "none"
}

function displayLightbox(array, indeximg) {
    let index = indeximg
    const modal = document.getElementById("lightbox")
    const img = document.querySelector('.lightbox-content img')
    img.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].image}`)
    modal.style.display = "flex"
    
    console.log(array)
    
    const btnNext = document.querySelector('.btn-next')
    const btnPrev = document.querySelector('.btn-prev')

    btnNext.addEventListener('click', (e) => {
        e.preventDefault()
        index += 1
        if(index === array.length) index = 0
        if(array[index].video) {
            console.log('media vidéo')
        } else {
            img.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].image}`)
        }
    })

    btnPrev.addEventListener('click', (e) => {
        e.preventDefault()
        index -= 1
        if(index === 0) index = array.length
        if(array[index].video) {
            console.log('media vidéo')
        } else {
            img.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].image}`)
        }
    })
}
