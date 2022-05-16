class Media {

    constructor(data) {
        data && Object.assign(this, data)
    }

}


class Image extends Media {

    constructor(data) {
        super(data)
    }

    getImageCard() {
        const image = `assets/images/${this.photographerId}/${this.image}`
        const article = document.createElement("article")
        const img = document.createElement("img")
        img.setAttribute("src", image)
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

    
}