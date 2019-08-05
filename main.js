const content = ["goat", "goat_2", "car"];
let box_1 = [];
let box_2 = [];
let box_3 = [];

console.log(content);
let random_index = Math.floor(Math.random() * content.length) // losuje: 0-2
console.log(random_index);
box_1 = content.splice(random_index, 1);
console.log(box_1);
console.log(content);
box_2 = content.splice(random_index -1, 1);
console.log(content);
box_3.push(content[0]);

console.log(box_1);
console.log(box_2);
console.log(box_3);

function show() {
let bramki = [...document.getElementsByClassName("btn")];  
console.log(bramki);
}
show();

