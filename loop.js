// FOR LOOP

// for(initialization / declararion, condition, increment / decrement){
//     // code to be excuted
// }

// i++
// ++i
// let a = 10;
// console.log(a++);
// console.log(++a);


// for ( let i = 0; i <= 5; i++){
//     console.log(i);
    
// }


// for( let i = 0;  i < 100; i++){
//     console.log(i);
    
//     if( i === 20  ){
//       console.log('Hey you hit 40!');
//       continue;
//     }
// }

// for( let i = 0;  i < 100; i++){
//     console.log(i);
    
//     if( i === 20  ){
//       console.log('Hey you hit 40!');
//       break;
//     }
// }

// for( let i = 0;  i < 100; i++){
    
//     if( i === 20  ){
//         console.log('Hey you hit 40!');
//         break;
//     }
//     console.log(i);
// }

// const texts = ['singing the park ', 'watching myself donce', 'dogo is danger', 'cat is black'];

// for( let i = 0; i < texts.length; i++ ){
//   console.log(i);
  
// }


// const texts = ['singing the park ', 'watching myself donce', 'dogo is danger', 'cat is black'];

// for( let i = 0; i < texts.length; i++ ){
//   console.log(texts[i]);
  
// }


// ===========================================


// FOR OF LOOPS

// const names = ['jahid', 'barble', 'Logic', 'BOOM', 'tool'];

// for(let names of names){
//     if(name === 'Logic'){
//     console.log('stahpy dis maness');
//     break;
//     }
//     console.log(name);
    
// }

// names.forEach(function(name, index){
//     if(name === 'Logic'){
//     console.log('Stahpt dis maness')
    
//     }
// })


// ============================================

// JavaScript For In Loops
// syntax

// for (key in object) {
//     // code block to be executed
//   }

// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
//   console.log(x);
// } 


// Syntax

// for (variable in array) {
//     code
//   } 

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  console.log(x);
  
}