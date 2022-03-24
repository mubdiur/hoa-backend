class HoaDetails {
  #id;
  #hoaId;
  #pmcName;
  #pmcWebsite;
  #pmcEmail;
  #pmcNumber;
  #ccnr; // Covenants, Conditions, and Restrictions
  #rulesandregulations;
  #otherdocument;

  constructor(
    id,
    hoaId,
    pmcName,
    pmcWebsite,
    pmcEmail,
    pmcNumber,
    ccnr,
    rulesandregulations,
    otherdocument
  ) {
    this.#id = id;
    this.#hoaId = hoaId;
    this.#pmcName = pmcName;
    this.#pmcWebsite = pmcWebsite;
    this.#pmcEmail = pmcEmail;
    this.#pmcNumber = pmcNumber;
    this.#ccnr = ccnr;
    this.#rulesandregulations = rulesandregulations;
    this.#otherdocument = otherdocument;
  }

  // setters
  set id(id) {
    this.#id = id;
  }
  set hoaId(hoaId) {
    this.#hoaId = hoaId;
  }
  set pmcName(pmcName) {
    this.#pmcName = pmcName;
  }
  set pmcWebsite(pmcWebsite) {
    this.#pmcWebsite = pmcWebsite;
  }
  set pmcEmail(pmcEmail) {
    this.#pmcEmail = pmcEmail;
  }
  set pmcNumber(pmcNumber) {
    this.#pmcNumber = pmcNumber;
  }
  set ccnr(ccnr) {
    this.#ccnr = ccnr;
  }
  set rulesandregulations(rulesandregulations) {
    this.#rulesandregulations = rulesandregulations;
  }
  set otherdocument(otherdocument) {
    this.#otherdocument = otherdocument;
  }

  // getters
  get id() {
    return this.#id;
  }
  get hoaId() {
    return this.#hoaId;
  }
  get pmcName() {
    return this.#pmcName;
  }
  get pmcWebsite() {
    return this.#pmcWebsite;
  }
  get pmcEmail() {
    return this.#pmcEmail;
  }
  get pmcNumber() {
    return this.#pmcNumber;
  }
  get ccnr() {
    return this.#ccnr;
  }
  get rulesandregulations() {
    return this.#rulesandregulations;
  }
  get otherdocument() {
    return this.#otherdocument;
  }

  // methods

  update() {}
  save() {}
  delete() {}
  view() {}
}
