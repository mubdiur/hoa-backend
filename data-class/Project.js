class Project {
    #id;
    #name;
    #address;

    constructor(id, name, address) {
        this.#id = id;
        this.#name = name;
        this.#address = address;
    }

    // setters
    set id(id) {
        this.#id = id;
    }
    set name(name) {
        this.#name = name;
    }
    set address(address) {
        this.#address = address;
    }
    // getters
    get id() {
        return this.#id;
    }
    get name() {
        return this.#name;
    }
    get address() {
        return this.#address;
    }
    // methods
    update() {}
    save() {}
    delete() {}
    search() {}
    view() {}
}
