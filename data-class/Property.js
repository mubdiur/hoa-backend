class Property {
  #id;
  #hoaId;
  #propertyImage;
  #propertyAddress;
  #residentName;
  #propertyCode;

  constructor(
    id,
    hoaId,
    propertyImage,
    propertyAddress,
    residentName,
    propertyCode
  ) {
    this.#id = id;
    this.#hoaId = hoaId;
    this.#propertyImage = propertyImage;
    this.#propertyAddress = propertyAddress;
    this.#residentName = residentName;
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
  set residentName(residentName) {
    this.#residentName = residentName;
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
  get residentName() {
    return this.#residentName;
  }
  get propertyCode() {
    return this.#propertyCode;
  }

  // methods
  update() {}
  search() {}
  view() {}
}
