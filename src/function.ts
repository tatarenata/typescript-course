// tipe data pada balikan function 

function getName(): String {
    return "hello, my name is Renata";
}

console.log(getName());

function getAge(): number{
    return 123;
}


function printName(): void {
    console.log("print name");
}

printName();

// arguments types

function multiply(val1: number, val2: number): number {
    return val1 * val2;  
}

const result = multiply(20, 5);
console.log(result);

// function as type

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

// default parameter
const fullName = (first: string, last: string = "Hanggarawan"): string => {
    return first + " " + last;
}

console.log(fullName("Renata"));


// optional parameter
const getUmur = (val1: String, val2?: String): String =>{
    return val1 + " " + val2;
}

console.log(getUmur("A", "B"));

