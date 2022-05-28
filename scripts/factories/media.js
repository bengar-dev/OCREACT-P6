const articleTarget = document.querySelector('.photograph-medias')

class MediaFactory {

    static handleMedia(data, array) {
        const indexMedia = array.findIndex(p => p.image === data.image)
        if(data.image) {
            let imageMediaPhotograph = new Image(data)
            articleTarget.append(imageMediaPhotograph.getImageCard(array, indexMedia))
        } else {
            let videoMediaPhotograph = new Video(data)
            articleTarget.append(videoMediaPhotograph.getVideoCard(array, indexMedia))
        }
    }

}

class Media {

    constructor(data) {
        data && Object.assign(this, data)
    }

}


class Image extends Media {

    constructor(data) {
        super(data)
    }

    getImageCard(array, indexMedia) {
        const image = `assets/images/${this.photographerId}/${this.image}`
        const article = document.createElement("article")
        const img = document.createElement("img")
        img.setAttribute("src", image)
        img.addEventListener('click', () => {
            displayLightbox(array, indexMedia, image)
        })
        const h2 = document.createElement("h2")
        h2.textContent = this.title
        article.append(img)
        article.append(h2)

        return article
    }
    
}

class Video extends Media {

    constructor(data) {
        super(data)
    }

    getVideoCard() {
        const videoUrl = `assets/images/${this.photographerId}/${this.video}`
        const article = document.createElement("article")
        const video = document.createElement("video")
        const source = document.createElement("source")
        source.setAttribute("src", videoUrl)
        video.append(source)
        const h2 = document.createElement("h2")
        h2.textContent = this.title
        article.append(video)
        article.append(h2)

        return article
    }
    
}