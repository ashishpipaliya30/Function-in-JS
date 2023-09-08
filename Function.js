console.log("This is tutorial53");

// inside function{}, defind variable is local-variable
function greet(name, ashu = "Hello..?") {
    let name1 = "Ashish Pipaliya";
    console.log(name1);
    console.log(ashu + " " + name);
    console.log(name + "is a good boy");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
}

// outside function{}, defind variable is globle-variable
let name1 = "Ashish ";
let name2 = "Manoj ";
let name3 = "Pankaj "
let name4 = "Mahendra ";
ashu = "Good morning";
greet(name1, ashu);
greet(name2, ashu);
greet(name3, ashu);
// not defind function name so outomaticlly catch msg you pass in function
greet(name4);

// Return value
// let returnVal = sum(1, 2, 3);
// console.log(returnVal);
