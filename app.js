console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {    // for (initialization; condition; final-expression)

    if (i % 2 !== 0)    {
        console.log(i);
    }

}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let j = 1; j <= 100; j++) {

    if (j % 3 === 0 && j % 5 === 0) {
        console.log("FIZZBUZZ");

    }

    else if (j % 3 === 0) {
        console.log('FIZZ');
    }

    else if (j % 5 === 0) {

    }

    else {
        console.log(j);
    }


}

console.log("EXERCISE 3:\n==========\n");
let b = 1   ;                  //exercise 1 using a "while" loop.

while (b <= 100) {
    console.log(b);
    b++;
}

let a = 1;

do {
    console.log(a);           //exercise 1 using a "do/while" loop.
    a++;
}  while (a <= 100);


let i = 1;

while (i <= 100) {               //exercise 2 using "while" loop.
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ")
    }  else if (i % 3 === 0){
        console.log("FIZZ");
    }  else if (i % 5 === 0){
        console.log("BUZZ");
    }  else {
        console.log(i);
    }
    i++;
}

let j = 1;

do {                            //exercise 2 using "do/while" loop.
    if (j % 3 === 0 && j % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (j % 3 === 0) {
        console.log('FIZZ');
    } else if (j % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(j);
    }
    j++;
} while (j <= 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);

let found = false;

for (let i = 0; i <= n; i++) {
    if (i === value) {
        console.log("Found Value!");
        found = true;
        break;
    }
}

if (!found) {
    console.log("Did Not Find Value");
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++) {

    
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
        console.log('FIZZBUZZ');
    }
   
    else if (i % fizzDivisor === 0) {
        console.log('FIZZ');
    }
    
    else if (i % buzzDivisor === 0) {
        console.log('BUZZ');
    }
    
    else {
        console.log(i);
    }
}

