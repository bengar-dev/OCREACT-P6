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
    const lightboxContent = document.querySelector('.lightbox-content')
    lightboxContent.innerHTML = `
    <button class="btn-next">
            <img src="assets/icons/arrow.svg" />
          </button>
          <button class="btn-prev">
            <img src="assets/icons/arrow.svg" />
          </button>`
    modal.style.display = "none"
}

function displayLightbox(array, indeximg) {
    let index = indeximg
    const modal = document.getElementById("lightbox")
    const lightboxContent = document.querySelector('.lightbox-content')
    const img = document.createElement("img")
    const video = document.createElement("video")
    video.controls = "true"
    const source = document.createElement("source")
    video.append(source)
    img.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].image}`)
    lightboxContent.append(img)
    modal.style.display = "flex"
    
    const btnNext = document.querySelector('.btn-next')
    const btnPrev = document.querySelector('.btn-prev')

    btnNext.addEventListener('click', (e) => {
        e.preventDefault()
        index += 1
        if(index === array.length + 1) index = 0
        if(array[index].video) {
            lightboxContent.removeChild(img)
            source.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].video}`)
            source.setAttribute('autoplay', 'video/mp4')
            lightboxContent.append(video)
        } else {
            if(!lightboxContent.contains(img)) lightboxContent.removeChild(video)
            img.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].image}`)
            lightboxContent.append(img)
        }
    })

    btnPrev.addEventListener('click', (e) => {
        e.preventDefault()
        index -= 1
        if(index === -1) index = array.length
        if(array[index].video) {
            lightboxContent.removeChild(img)
            source.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].video}`)
            lightboxContent.append(video)
        } else {
            if(!lightboxContent.contains(img)) lightboxContent.removeChild(video)
            img.setAttribute('src', `assets/images/${array[index].photographerId}/${array[index].image}`)
            lightboxContent.append(img)
        }
    })
}
