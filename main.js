const content = ["goat", "goat_2", 1];
let box_1 = [];
let box_2 = [];
let box_3 = [];

console.log(content);
let random_index = Math.floor(Math.random() * content.length) // losuje: 0-2
console.log(random_index);
box_1 = content.splice(random_index,1);
console.log(box_1);
console.log(content);
box_2 = content.splice(random_index -1,1);
console.log(content);
box_3.push(content[0]);

console.log(box_1);
console.log(box_2);
console.log(box_3);


//LOSOWANIE LICZB 
// const result = [];
// function losowanie () {
    // if(result.length === 6) return; 

//     const newDiv = document.createElement("div");

//    const wynikLosowania = Math.floor(Math.random() * 49 + 1);
//     for (let i=0; i <result.length; i++){
//          if (wynikLosowania === result[i]){
//              return losowanie()
//          }
//     }
//    newDiv.textContent = wynikLosowania;
//    document.body.appendChild(newDiv);
//     result.push(wynikLosowania);
// }
// const newButton = document.querySelector("button");
// newButton.addEventListener("click", losowanie);