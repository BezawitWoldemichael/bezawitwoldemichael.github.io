"use strict";


// question #9

let printOddNumbersOnly = (args) => {
  for (let num of args) {
    if (num % 2 != 0) console.log(num);
  }
};

// question #10
let returnEvenNumbersOnly = (args) => {
  let evens = [];
  for (let num of args) {
    if (num % 2 == 0) evens.push(num);
  }
  return evens;
};
let computeSumOfSquares = (args) =>
  args.reduce((total, num) => total + num * num, 0);

let computeSumOfSquaresOfEvensOnly = (args) =>
  computeSumOfSquares(returnEvenNumbersOnly(args));




function max(a,b){ //first question
    if(a>b)
    return a;
    else
    return b;
}


function maxOfThree(a,b,c){
    if(a>b){
        if(a>c)
            return a;
        else
            return c;
    }
    else{
        if(b>c)
            return b;
        else
            return c;
    }
}

function isVowel(a){
    switch(a){
        case 'a' : return true; 
        case 'e' : return true; 
        case 'i' : return true; 
        case 'o' : return true;
        case 'u' : return true;
        default: return false;    
    }
    
}

function sum(a){
    var sum=0;
    a.forEach(element=>{
        sum+=element;
    });
    multiply(a);
    return sum;


}
function multiply(a){
    var result=1;
    a.forEach(element=>{
        result*=element;
    });
    return result;
}

function reverse(str){
    var reversed=""
    for(var i=str.length-1; i>=0; i--){
        reversed+=str[i];
    }
    return reversed;
}

function findLongestWord(str){
    var maxLength=str[0].length;
    for(var i=1; i<str.length; i++){
       if(str[i].length>maxLength){
        maxLength=str[i].length;
       }
    }
    return maxLength;
}

function  filterLongWords(str , val){
    return  str.filter(x=>x.length>val)
}


let returnEvenNumbersOnly = (args) => {
    let evens = [];
    for (let num of args) {
      if (num % 2 == 0) evens.push(num);
    }
    return evens;
  };
  printOddNumbersOnly([1, 2, 3, 4, 5]);
  let computeSumOfSquaresOfEvensOnly = (args) =>
    computeSumOfSquares(returnEvenNumbersOnly(args));
  console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));
  
  let sumReduce = (args) => args.reduce((sumR, num) => sumR + num, 0);
  let multiplyReduce = (args) =>
    args.reduce((multiplyR, num) => multiplyR * num, 1);
  console.log(sumReduce([9, 5, 8]));
  
  console.log(multiplyReduce([9, 5, 8]));
  
  let findSecondBiggest = (args) => {
    let max = args[0];
    let secondMax = args[1];
    for (let num of args) {
      if (max < num) {
        secondMax = max;
        max = num;
      }
    }
    return secondMax;
  };
  findSecondBiggest([1, 2, 3, 4, 5]);
  
  let printFibonaci = (n, a, b) => {
    let print = "";
    let next;
    for (let i = 0; i < n; i++) {
      print += i == n - 1 ? a + "" : a + ", ";
      next = a + b;
      a = b;
      b = next;
    }
    console.log(print);
  };
  printFibonaci(5, 2, 3);
  
  let sums = (args) => sumReduce(args.filter((x) => x > 20));
  console.log(sums([20, 22, 3, 22]));
  
  let getNewArray = (args) => {
    let newString = [];
    for (let word of args) {
      if (word.length > 5 && word.includes("a")) newString.push(word);
    }
    return newString;
  };
  console.log(getNewArray(["relative", "real", "rolling"]));
  

function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }


  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))); //max(a,b)
  console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20,10,30))); //maxOfThree(a,b,c)
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a'))); //isVowel(a)
  console.log("Expected output of sum([1,2,3,4,5]) is 15" + myFunctionTest(15, sum([1,2,3,4,5]))); //sum(a)
  console.log("Expected output of multiply([1,2,3,4,5]) is 120" + myFunctionTest(120, multiply([1,2,3,4,5]))); //multiply(a)
  console.log("Expected output of reverse(Beza) is azeB  " + myFunctionTest("azeB", reverse("Beza"))); //reverse(str)
  console.log("Expected output of findLongestWord([JS,is,hard,for,Noobs]) is 5 that is length of Noobs  " + myFunctionTest(5, findLongestWord(["JS","is","hard","for","Noobs"]))); //findLongestWord(str)
  console.log("Expected output of filterLongWords([JS,is,hard,for,Noobs] , 3) is ['hard', 'Noobs']  " + myFunctionTest(["hard", "Noobs"], filterLongWords(["JS","is","hard","for","Noobs"] , 3))); //filterLongWords(str , val)
  
