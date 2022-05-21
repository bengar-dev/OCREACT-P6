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

function displayLightbox(image) {
    const modal = document.getElementById("lightbox")
    const img = document.querySelector('.lightbox-content img')
    img.setAttribute('src', image)
    modal.style.display = "flex"
}
