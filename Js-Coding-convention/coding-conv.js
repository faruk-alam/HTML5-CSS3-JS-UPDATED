// magic number
//  for(let i = 0;i < 86400; i ++){
//     console.log(i)
 //}
 // Here,this 86400 number has no significance.To make meaningfull this number,we can store this number to
 // meaningfull variable.

//  const SECOND_IN_A_DAY = 86400 ;
//  for(let i = 0;i < SECOND_IN_A_DAY; i ++){
    //console.log(i)
//  }

 // deep nesting
 const deepNesting = [[[ "value"]]];

 //  deepNesting.forEach((array1) =>{
//     array1.forEach((array2) => {
//         array2.forEach((element) => {
//             console.log(element)
//     })
//     })
//  })

//In above Code,there are one more code repeation ,to resolve this problem ,We need to use different function
// to separate the logic .

const retrieveValue = (element) =>{
    if(Array.isArray(element)){
        return retrieveValue(element[0])
    }
    return element;
}
console.log(retrieveValue(deepNesting))

// avoid large function 
const addMultiplySubstrack = (a,b,c) => {
    // addition
    const addition = a+b+c;




   // more more statement and logic








    // Multiplacation
    const multiplacation = a*b*c;




  // more more statement and logic






    // Subtraction 
    const subtracktion = a-b-c
    return `${addition} ${multiplacation} ${subtracktion}`

}
console.log(addMultiplySubstrack(9,5,2))

//In above function,a lot of statement and logic,that why It is difficult to understand what we are 
//returning.to avoid this difficulty ,we can make different function to separate logic.

 const add = (a,b,c)=> a+b+c ;
 const multiply = (a,b,c)=> a*b*c ;
 const subtrack = (a,b,c)=> a-b-c ;


// less code repetition 
const getUserCredentials = (user) => {
    const name = user.name
    const surname = user.surname
    const email = user.email
    const password = user.password
}
// In above Expample,we have repeated code a lot.In this case ,we can use es6 destracturing method to extract
// all value into one value.
const getUserCredential = (user) => {
    const {name, surname, email, password} = user;
}

// Naming variable and function - camelCase and use meaningfull Name.
// camelCase 
const camelCase = " ";
const addNumber(w,x,y,z,){
    let sum = w + x+ y +z ;
    return sum;
}

//meaningful Name 
getUserData;
getuserInfo;

// more meaningful
getUserPost

// Favor descriptive over concise

findUser;
 
//More descriptive

findUserByNameorEmail ;


// Make booleans that read well in if - than statements.

let car;
Audi,sold,silver,airbag
isAudi,isSold,isSilver,hasAirbag
let isSold = false;

// use noun for class names with pascal Case.

let Task = {
    // code to be here
}

let MakeList = {
    // code to be here
}

// Capitalize constant value with SNAKE UPPER CASE (in case of multiple word)
const SECOND_IN_A_DAY = 86400 ;
const USER_AGE = 30;
const USER = foundUser;
const TODAY = new Date() ;

// Avoid one letter variable or function name 

let q = () => {};
// In above code q is not descriptive.no body has idea about q.we can write for example - 
let query = () => {}
