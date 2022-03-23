class Hoa {
  #id;
  #projectId;
  #coordinates;
  #portal;
  #fees;
  #paymentFrequency;
  #email;
  #phoneNumber;
  #cityCorporationId;
  #propertyCodes;

  constructor(
    id,
    projectId,
    coordinates,
    portal,
    fees,
    paymentFrequency,
    email,
    phoneNumber,
    cityCorporationId,
    propertyCodes
  ) {
    this.#id = id;
    this.#projectId = projectId;
    this.#coordinates = coordinates;
    this.#portal = portal;
    this.#fees = fees;
    this.#paymentFrequency = paymentFrequency;
    this.#email = email;
    this.#phoneNumber = phoneNumber;
    this.#cityCorporationId = cityCorporationId;
    this.#propertyCodes = propertyCodes;
  }

  // setters
  set id(id) {
    this.#id = id;
  }
  set projectId(projectId) {
    this.#projectId = projectId;
  }
  set coordinates(coordinates) {
    this.#coordinates = coordinates;
  }
  set portal(portal) {
    this.#portal = portal;
  }
  set fees(fees) {
    this.#fees = fees;
  }
  set paymentFrequency(paymentFrequency) {
    this.#paymentFrequency = paymentFrequency;
  }
  set email(email) {
    this.#email = email;
  }
  set phoneNumber(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }
  set cityCorporationId(cityCorporationId) {
    this.#corporation = cityCorporationId;
  }
  set propertyCodes(propertyCodes) {
    this.#propertyCodes = propertyCodes;
  }
  // getters
  get id() {
    return this.#id;
  }
  get projectId() {
    return this.#projectId;
  }
  get coordinates() {
    return this.#coordinates;
  }
  get portal() {
    return this.#portal;
  }
  get fees() {
    return this.#fees;
  }
  get paymentFrequency() {
    return this.#paymentFrequency;
  }
  get email() {
    return this.#email;
  }
  get phoneNumber() {
    return this.#phoneNumber;
  }
  get cityCorporationId() {
    return this.#cityCorporationId;
  }
  get propertyCodes() {
    return this.#propertyCodes;
  }

  // methods
  save() {}
  search() {}
  update() {}
  delete() {}
  addProperty() {}
  removeProperty() {}
}
