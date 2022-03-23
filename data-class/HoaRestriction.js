class HoaRestriction {
  #id;
  #hoaId;
  #plantingRestriction;
  #trashRestrictions;
  #parkingRestrictions;
  #behavioralRestrictions;
  #otherRestrictions;
  #violationFee;

  constructor(
    id,
    hoaId,
    plantingRestriction,
    trashRestrictions,
    parkingRestrictions,
    behavioralRestrictions,
    otherRestrictions,
    violationFee
  ) {
    this.#id = id;
    this.#hoaId = hoaId;
    this.#plantingRestriction = plantingRestriction;
    this.#trashRestrictions = trashRestrictions;
    this.#parkingRestrictions = parkingRestrictions;
    this.#behavioralRestrictions = behavioralRestrictions;
    this.#otherRestrictions = otherRestrictions;
    this.#violationFee = violationFee;
  }

  // setters
  set id(id) {
    this.#id = id;
  }
  set hoaId(hoaId) {
    this.#hoaId = hoaId;
  }
  set plantingRestriction(plantingRestriction) {
    this.#plantingRestriction = plantingRestriction;
  }
  set trashRestrictions(trashRestrictions) {
    this.#trashRestrictions = trashRestrictions;
  }
  set parkingRestrictions(parkingRestrictions) {
    this.#parkingRestrictions = parkingRestrictions;
  }
  set behavioralRestrictions(behavioralRestrictions) {
    this.#behavioralRestrictions = behavioralRestrictions;
  }
  set otherRestrictions(otherRestrictions) {
    this.#otherRestrictions = otherRestrictions;
  }
  set violationFee(violationFee) {
    this.#violationFee = violationFee;
  }

  // getters
  get id() {
    return this.#id;
  }
  get hoaId() {
    return this.#hoaId;
  }
  get plantingRestriction() {
    return this.#plantingRestriction;
  }
  get trashRestrictions() {
    return this.#trashRestrictions;
  }
  get parkingRestrictions() {
    return this.#parkingRestrictions;
  }
  get behavioralRestrictions() {
    return this.#behavioralRestrictions;
  }
  get otherRestrictions() {
    return this.#otherRestrictions;
  }
  get violationFee() {
    return this.#violationFee;
  }

  // methods
  update() {}
  save() {}
  delete() {}
  view() {}
}
