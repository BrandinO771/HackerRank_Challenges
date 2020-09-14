
/*
///////////////////////////////////////////////////////////////////
hello I am Brandon Steinke 
below are my hackerRank challenge solutions 
started 9/2020
solved in JavaScript Node.js
I hope to return upon prior challenges and refactor further ...
///////////////////////////////////////////////////////////////////
*/



///////////////////////////////////////////////////////////////////
//     SOCK MERCHANT 
//////////////////////////////////////////////////////////////////
function sockMerchant(n, ar) {
     //TAKE IN ARRAY AND RETURN THE TOTAL NUMBER OF UNIQUE PAIRS 
    let pairsList = [];
    let totalPairs = 0;
    let match = false;
        for ( let sock of ar ) 
        {
             for( let pair of pairsList)
                {
                if (pairsList.length == 0 ) pairsList.push({ color : sock, pairCt : 1 });         
                if (pairsList.length != 0 && sock == pair.color )
                    {
                     pair.pairCt +=1;
                     match = true ;
                     if (  pair.pairCt % 2 === 0) totalPairs +=1 ;
                    }
                }
            if (match == false ) pairsList.push({ color : sock, pairCt : 1 });
            match = false;
        }
        // OUTPUTS DICT OBJ LIKE  let pairsList = [{ color: 0, pairCt : 0 }];
        console.log("the pairs ==", pairsList, 'the totalPairs ==', totalPairs);
        return totalPairs;
    }
    
console.log( 'sockMerchant solution =' , sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) ,'pairs' );
console.log();
///////////////////////////////////////////////////////////////
// TEST PRACTICE - FOR ABOVE 
///////////////////////////////////////////////////////////////
obj1 = [
    { elm1 : 1 , elm2 : 2   },
    { elm1 : 2 , elm2 : 4   },
    { elm1 : 3 , elm2 : 6   },
    { elm1 : 2 , elm2 : 8   },
]

//Find the first index location of element with certain value in our dictionary 
console.log('obj1 dict=', obj1);
console.log('return array of eml1==2 ', obj1.filter( m => m.elm1 == 2));
console.log('return array of eml2>4 ', obj1.filter( m => m.elm2 > 4));

let theIndex = obj1.findIndex(    function(x){ return  x.elm1 == 2;   }   );
console.log('the index pos of elm1==2', theIndex);
console.log("the index pos eml1==3 is=",    obj1.findIndex(function(x){ return x.elm1 == 3;})  );
console.log("the index pos eml2==8 is=",    obj1.findIndex(function(x){ return x.elm2 == 8;})  );


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
//     COUNTING VALLEYS 
//////////////////////////////////////////////////////////////////

let = summary1 = `
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example:

The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.
Function Description
Complete the countingValleys function in the editor below.
countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path
Returns

int: the number of valleys traversed
Input Format

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe the path.

Constraints
Sample Input
8
UDDDUDUU
Sample Output
1
Explanation
If we represent _ as sea level, a step up as /, and a step down as \, the hike can be drawn as:
_/\      _
\    /
\/\/
`

//+ MY NOTES :
// if _ and then u > 1 watch for  / 
// count level below see level and when drop below zero 
// and then at or above zero  valleyCt +=1 
/*
* Complete the 'countingValleys' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
*  1. INTEGER steps
*  2. STRING path
*/
/////--> SOLUTION  :
function countingValleys(steps, path) {
let levelsFromSea = 0;
let valleyCt = 0;

for ( let step of path){
    if ( step == 'U') levelsFromSea +=1; 
        else levelsFromSea -=1; 
    // console.log( 'curr step=', step, 'levelsFromSea=', levelsFromSea, 'valleyCt=', valleyCt  ,'valleySearch', valleySearch  );
    if ( levelsFromSea == 0 && step =='U') valleyCt+=1; 
   }
console.log( ' Counting Valleys, levelsFromSea=', levelsFromSea, 'valleyCt=', valleyCt   );
return valleyCt;
}
console.log('counting valleys solution = ', countingValleys(8,'UDDDUDUU') );
console.log();

// countingValleys(8,'UDDDUDUUUDDDUDUU');
// countingValleys(8,'DDUUDDUDUUUD');
/*
_          /\_
 \  /\    /
  \/  \/\/
*/
/* ///////////////////////////////////////////////////
// this did not work below 
function countingValleys(steps, path) {
   let levelsFromSea = 0;
   let valleyCt = 0;
   let valleySearch = 0;

   for ( let step of path ){
       if(levelsFromSea === 0 )valleySearch +=1;
       if(step === 'U') levelsFromSea +=1
       else if(step ==='D') levelsFromSea -=1;
       if( valleySearch === 2 ){ valleyCt +=1; valleySearch = 0;}
   }
   return valleyCt;
}
*/ //////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
//     ELECTRONICS SHOP 
//////////////////////////////////////////////////////////////////

//+>  MY NOTES :
// BUY MOST EXPENSIVE COMBO OF KEYBOARDS AND DRIVES WITHIN BUDGET AMOUNT
// IF NO COMBO EXISTS RETURN -1
// I PASSED ALL TESTS AFTER ALLOWING FOR COMBO TOTAL TO BE EQUAL TO BUDGET

//--> SOLUTION  :
function getMoneySpent(keyboards, drives, b) {

    console.log('keyboards=', keyboards, 'drives=', drives, 'b=',b);
    // inputs are : array, array, int keyboards= [ 3, 1 ] ,  drives= [ 5, 2, 8 ] ,  b= 10
   // iterate through arrays, sum prices, if below b and  more than prior maxpurchase  amt save as maxpurchase   
   if ( keyboards.length == 0 || drives.length == 0 || b <=0) return -1;
   let maxPurchase = -1;
   let sums = 0;
   for ( let board of keyboards ){
       for ( let drive of drives ){
           sums = board + drive ;
           if ( sums > maxPurchase && sums <= b ) maxPurchase = sums;
       }}
    return maxPurchase; 
}
console.log('get money solution =',  getMoneySpent( [ 3, 1 ], [ 5, 2, 8 ], 10)  );
console.log();
 
 ///////////////////////////////////////////////////////////////////
//     
//////////////////////////////////////////////////////////////////


 ///////////////////////////////////////////////////////////////////
//     
//////////////////////////////////////////////////////////////////


 ///////////////////////////////////////////////////////////////////
//     
//////////////////////////////////////////////////////////////////


 ///////////////////////////////////////////////////////////////////
//     
//////////////////////////////////////////////////////////////////