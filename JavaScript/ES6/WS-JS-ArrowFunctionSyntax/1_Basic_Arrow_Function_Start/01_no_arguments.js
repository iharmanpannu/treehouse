const name = "Andrew";

function sayName() {
    const message = "My name is " + name;
    console.log(message);
}

function sayBye() {
    console.log("Bye " + name);
}

const sayname = function() {
    const message = `My name is ${name}`;
    console.log(message);
}

const sayname = () => {
    const message = `My name is ${name}`;
    console.log(message);
}

const sayBye = () => {
        console.log("Bye " + name);