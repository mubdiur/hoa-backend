class Property {
    #id;
    #hoaId;
    #propertyImage;
    #propertyAddress;
    #residentNames;
    #propertyCode;

    constructor(
        id,
        hoaId,
        propertyImage,
        propertyAddress,
        residentNames,
        propertyCode
    ) {
        this.#id = id;
        this.#hoaId = hoaId;
        this.#propertyImage = propertyImage;
        this.#propertyAddress = propertyAddress;
        this.#residentNames = residentNames;
        this.#propertyCode = propertyCode;
    }

    // setters
    set id(id) {
        this.#id = id;
    }
    set hoaId(hoaId) {
        this.#hoaId = hoaId;
    }
    set propertyImage(propertyImage) {
        this.#propertyImage = propertyImage;
    }
    set propertyAddress(propertyAddress) {
        this.#propertyAddress = propertyAddress;
    }
    set residentNames(residentNames) {
        this.#residentNames = residentNames;
    }
    set propertyCode(propertyCode) {
        this.#propertyCode = propertyCode;
    }

    // getters
    get id() {
        return this.#id;
    }
    get hoaId() {
        return this.#hoaId;
    }
    get propertyImage() {
        return this.#propertyImage;
    }
    get propertyAddress() {
        return this.#propertyAddress;
    }
    get residentNames() {
        return this.#residentNames;
    }
    get propertyCode() {
        return this.#propertyCode;
    }

    // methods
    update() {}
    search() {}
    view() {}
}
