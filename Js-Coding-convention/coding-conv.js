// magic number
//  for(let i = 0;i < 86400; i ++){
//     console.log(i)
 //}
 // Here,this 86400 number has no significance.To make meaningfull this number,we can store this number to
 // meaningfull variable.

//  let SECOND_IN_A_DAY = 86400 ;
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

//In above Code,there are one more code repeation ,to resolve this problem ,We need to use function

const retrieveValue = (element) =>{
    if(Array.isArray(element)){
        return retrieveValue(element[0])
    }
    return element;
}
console.log(retrieveValue(deepNesting))

// stop 