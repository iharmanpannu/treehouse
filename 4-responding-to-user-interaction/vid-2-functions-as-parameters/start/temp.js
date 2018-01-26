function exec(func, arg) {
    func(arg);
}

exec((something) => console.log(something),
    'Greetings, everyone!');


// function hello(func, arg) {
//     func(arg, arg, arg);
// }

// exec((hello, ok) => console.log(hello), 'Hello World', console.log(ok), 'Ok')