// variable dec
// datatypes
// operators

// let , var , const

// let , const - es6 - 2015

// var firstName = "shubham";
// console.log(firstName);

// let lastName = "Jain";
// console.log(lastName);

// const middleName = "kumar";
// console.log(middleName);

// var

// var firstName = "shubham";


// firstName = "Vinay"; // variable redelcare and reassign

// console.log(firstName)

// firstName = "Shubham";

// console.log(firstName)

// let

// let firstName = "shubham";  // let keyword - reassign but cannot redeclare 

// firstName = "Vinay";

// console.log(firstName)

// const

// const firstName = "shubham"; // const keyword - can not reassign , can not redeclared
// firstName = "Vinay";
// console.log(firstName)

// scopes
// block , global , functional scope / local scope
// var - global scope but in case of the function it becomes functional scope
// let , const  - block scope variable

// {
//    { 
//     var firstName = "shubham";
//    }
//     console.log(firstName)
// }

// console.log(firstName)

// let , const - block scope
// {
//     const firstName = "shubham";
//     console.log(firstName);
//     {
//         console.log(firstName)
//     }
// }
// console.log(firstName);

// {
//     const firstName = "shubham";
//     console.log(firstName);
//     {
//         console.log(firstName)
//     }
// }

// console.log(firstName);

// function sum(){
//     var a = 100;
//     console.log(a);
// }

// console.log(a);

// primitive types , ref types

// primitive types - string , number , boolean , undefined  , null ,  symbol , bigInt
// ref types - array , objects , Date 

// let firstVar = "Shubham";
// console.log(typeof firstVar);

// firstVar = true;
// console.log(typeof firstVar);

// firstVar = -100.56;
// console.log(typeof firstVar);

// let secondVar = NaN;

// console.log(typeof secondVar);

// secondVar = "Vinay";
// console.log(typeof secondVar);

// secondVar = null;

// console.log(typeof secondVar);

// let firstNum = 12345432354545453n;
// let secondNum = firstNum + 10n;
// console.log(firstNum)
// console.log(secondNum)

// ref

// let firstArray = [10,20,"shubham",true,null, undefined , [100,"Two",true],{}]; // collection of the multiple types of the datatypes

// console.log(typeof firstArray);

// objects - collection of the key value pairs

// let profile = {
//     "firstName" : "Shubham",
//     lastName : "Jain",
//     pinCode : 302020
// }

// console.log(profile.lastName)

// let firstNam = "shubham";
// console.log(firstNam1)