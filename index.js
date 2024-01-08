class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        let attackType;

        switch (this.type) {
            case "mago":
                attackType = "magia";
                break;
            case "guerreiro":
                attackType = "espada";
                break;
            case "monge":
                attackType = "artes marciais";
                break;
            case "ninja":
                attackType = "shuriken";
                break;
        }

        console.log(`o ${this.type} atacou usando ${attackType}`);

    }
}

let heroi = new hero("Barbara", "28", "mago")

heroi.attack()
