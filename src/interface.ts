interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }    on(): void{
            throw new Error("Method not implemented.");
    }
         off(): void{
            throw new Error("Method not implemented.");
    }
}

class MacBook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }on(): void{
        console.log('nyala');
    }
    off(): void{
        console.log('mati');
        
    }
}

let asus = new Asus('Asus', true);
console.log(asus.on());
console.log(asus.off());

let mb = new MacBook('MPB', true);
console.log(mb.on());
console.log(mb.off());



