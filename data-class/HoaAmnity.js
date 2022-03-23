class HoaAmnity {
  #id;
  #hoaId;
  #amenityName;
  #address;
  #accessibility;
  #amenityRules;
  #amenityFees;

  constructor(
    id,
    hoaId,
    amenityName,
    address,
    accessibility,
    amenityRules,
    amenityFees
  ) {
    this.#id = id;
    this.#hoaId = hoaId;
    this.#amenityName = amenityName;
    this.#address = address;
    this.#accessibility = accessibility;
    this.#amenityRules = amenityRules;
    this.#amenityFees = amenityFees;
  }
  // setters
  set id(id) {
    this.#id = id;
  }
  set hoaId(hoaId) {
    this.#hoaId = hoaId;
  }
  set amenityName(amenityName) {
    this.#amenityName = amenityName;
  }
  set address(address) {
    this.#address = address;
  }
  set accessibility(accessibility) {
    this.#accessibility = accessibility;
  }
  set amenityRules(amenityRules) {
    this.#amenityRules = amenityRules;
  }
  set amenityFees(amenityFees) {
    this.#amenityFees = amenityFees;
  }

  // getters
  get id() {
    return this.#id;
  }
  get hoaId() {
    return this.#hoaId;
  }
  get amenityName() {
    return this.#amenityName;
  }
  get address() {
    return this.#address;
  }
  get accessibility() {
    return this.#accessibility;
  }
  get amenityRules() {
    return this.#amenityRules;
  }
  get amenityFees() {
    return this.#amenityFees;
  }
  // methods
  update() {}
  save() {}
  delete() {}
  search() {}
}
