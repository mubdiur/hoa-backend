class CityCorporation {
  #id;
  #division;
  #mayor;
  #website;
  #email;
  #phoneNumber;
  constructor(id, division, mayor, website, email, phoneNumber) {
    this.id = id;
    this.division = division;
    this.mayor = mayor;
    this.website = website;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
  // setters
  set id(id) {
    this.#id = id;
  }

  set division(division) {
    this.#division = division;
  }

  set mayor(mayor) {
    this.#mayor = mayor;
  }

  set website(website) {
    this.#website = website;
  }

  set email(email) {
    this.#email = email;
  }

  set phoneNumber(phoneNumber) {
    this.#phoneNumber = phoneNumber;
  }

  // getters
  get id() {
    return this.#id;
  }

  get division() {
    return this.#division;
  }

  get mayor() {
    return this.#mayor;
  }

  get website() {
    return this.#website;
  }

  get email() {
    return this.#email;
  }

  get phoneNumber() {
    return this.#phoneNumber;
  }

  // methods
  update() {}
  save() {}
  delete() {}
  view() {}
}
