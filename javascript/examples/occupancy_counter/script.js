class Group {
    #id;
    #name;
    #mobile;
    #count;

    static counter = 0;

    constructor(name, mobile, count) {
        this.#name = name;
        this.#mobile = mobile;
        this.#count = count;
        this.#id = ++Group.counter;
    }

    get name() {
        return this.#name;
    }

    get mobile() {
        return this.#mobile;
    }

    get count() {
        return this.#count;
    }

    get id() {
        return this.#id;
    }

}

class Club {
    #capacity;
    #counter;

    #groups = [];

    constructor(capacity) {
        this.#capacity = capacity;
        this.#counter = 0;
        this.render();
    }

    in(group) {
        const newCounter = this.#counter + group.count;

        if (this.#capacity >= newCounter) {
            this.#counter = newCounter;
            this.#groups.push(group);
            this.render();
        }
        else {
            alert("Club is full.")
        }
    }

    out(group) {
        const index = this.#groups.findIndex((g) => g.id == group.id);
        const removedGroups = this.#groups.splice(index, 1);
        this.#counter -= removedGroups[0].count;
        this.render();
    }


    render() {
        let counterSpan = document.getElementById("counter");
        counterSpan.style.color = "red";
        counterSpan.innerText = this.#counter;

        const entriesDiv = document.getElementById("entriesDiv");
        entriesDiv.removeChild(entriesDiv.firstChild);

        const ulElement = document.createElement("ul");

        this.#groups.forEach((group) => {
            const liElement = document.createElement('li');
            const spanElement = document.createElement("span");
            spanElement.textContent = `${group.name} (${group.count}) mobile: ${group.mobile}`;

            const outButton = document.createElement("button");
            outButton.textContent = "Out";
            outButton.addEventListener("click", () => {
                this.out(group);
            });

            liElement.appendChild(spanElement);
            liElement.appendChild(outButton);
            ulElement.appendChild(liElement);
        });

        entriesDiv.appendChild(ulElement);
      
    }
}

const club = new Club(50);

const nameInput = document.getElementById("nameInput");
const mobileInput = document.getElementById("mobileInput");
const countInput = document.getElementById("countInput");

const clearForm  = () => {
    nameInput.value = "";
    mobileInput.value = "";
    countInput.value = "";
}

let inButton = document.getElementById("inButton");
inButton.addEventListener("click", () => {
    const name = nameInput.value;
    const mobile = mobileInput.value;
    const count = parseInt(countInput.value);
    const group = new Group(name, mobile, count);
    club.in(group);
    clearForm();
});


