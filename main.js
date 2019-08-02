const content = [2,3,4,55,67,8,8,8];
let box_1 = [];
let box_2 = [];
let box_3 = [];

// console.log(content.splice(2,3));



let x = content[Math.floor(Math.random() * content.length)]; // 0 1 2 
console.log(x);
box_1.push(x);
console.log(box_1);
content.splice(x, x+1);

// console.log(content);
// console.log(content.length);

// box_2.push(content[Math.floor(Math.random() * content.length)]);
// console.log(box_2);

//  box_3.push(content[Math.floor(Math.random() * content.length)]);
//  console.log(box_3);

//     let box1 = boxes[Math.floor(Math.random()*content.length)]; 
//     let box2 = boxes[Math.floor(Math.random()*content.length)]; 
//     let box3 = boxes[Math.floor(Math.random()*content.length)]; 
// }









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