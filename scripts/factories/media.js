class Media {

    constructor(data) {
        data && Object.assign(this, data)
    }

}


class Image extends Media {

    constructor(data) {
        super(data)
    }

    
}

class Video extends Media {

    constructor(data) {
        super(data)
    }

    
}