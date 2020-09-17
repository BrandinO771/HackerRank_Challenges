
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
//     SOCK MERCHANT 1
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
    
console.log( 'sockMerchant solution =' , sockMerchant(9, [10, 20, 20, 10, 10, 30, 50,  10, 20]) ,'pairs' );
console.log();
     
///////////////////////////////////////////////////////////////////
//     SOCK MERCHANT 2  - refactored not submitted to HR
//////////////////////////////////////////////////////////////////
// 10 10 10 10 20 20 30 50 
// could sort it then ask if curr is equal to next if yes +=1 to pair then skip one and reset or iterate by 2
function sockMerchant2( arr ){
    arr.sort();
    console.log(arr)
    let pairz = 0;

    for ( let p = 0; p < arr.length; p+=2 )
        {
        if ( arr[p] == arr[(p + 1)]  ) pairz +=1;
        console.log(`curr pos ${p}, assess pair ${arr[p]} & ${arr[(p + 1)]}, pair count=${pairz}`);
        }
    // if length of arr is odd then we need to assess last 2 elements as a pair 
    if (    arr.length % 2 !== 0    &&     arr[(arr.length-2)] == arr[(arr.length-1)]    )  pairz +=1; 
    return pairz;
}

console.log( 'sockMerchant2 solution =' , sockMerchant2( [10, 20, 20, 40, 10, 10, 30, 50, 10, 20, 50]) ,'pairs' );
console.log();
///////////////////////////////////////////////////////////////////
//     SOCK MERCHANT 3  
//////////////////////////////////////////////////////////////////
function sockMerchant3( arr )
    {
        arr.sort(); let pairs = 0;

        for (  let p = 0;  p < arr.length;  p+=2  )         if (  arr[p] === arr[ (p + 1) ]  )  pairs +=1;  

        if  (  arr.length % 2  !== 0   &&   arr[ (arr.length-2) ] === arr[ (arr.length-1) ]  )  pairs +=1;

        return pairs;
    }
console.log( 'sockMerchant3 solution =' , sockMerchant3( [10, 20, 20, 40, 10, 10, 30, 50, 10, 20, 50]) ,'pairs' );
console.log();

/*
//  " EVERY  "--> returns true/false running condition against every element until conditon is not met
const numArray8 = [ 45,23,36,0 ];
let isAllPositive = numArray8.every(function(value ) {
    return value >=0;
});
console.log('isAllPositive',isAllPositive);
*/

let tt = [1,2,3,4]
let pp = [100,200,300]
/* // this is 3x3 = 9 iterations
tt.forEach(function( x ){
    pp.forEach(function ( p ) {
     console.log( 'x +',x,'p=', p, '=', x+p);
    })
});
 */
// ADD 2 ARRAYS OF SAME LENGTH this is 3 iterations 
tt.forEach(function( x ){
      console.log( x,'+', pp[(x-1)] , '=', x + pp[(x-1)]);
});

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

const numArray10 = [ -1, 76, 2, 66];
const testarr = [ 76, 2];
const filtered01 = testarr.filter(function(x){
  return x == numArray10[1];
});
console.log('the filtered val', filtered01);
 


//////////////////////////////////////////////////////////////////////////////
// Complete the checkMagazine function below.
// 2 cases failed out of 22
// Complete the checkMagazine function below.
// 2 cases failed out of 22
//
// Complete the checkMagazine function below.
// 0 cases failed out of 22

///////////////////////////////////////////////////////////////////////////////////////
//THIS vERSION BUILT AN ARRAY AND COMPARED LENGTHS WHICH IS MEMORY PROCESSING WASTE
//////////////////////////////////////////////////////////////////////////////////////
function checkMagazine(magazine, note) {

    let magLen = 0;
    let noteLen = 0;
    let wordPos = -1;
    let out = [];
    magLen = magazine.length;
    noteLen = note.length;
    let proceed = false;
    let stage = 0;
    // console.log(magazine, note);
    if ( Array.isArray(magazine) || Array.isArray(note) ){stage =1;} else { proceed = false; stage =100;}
    
    if ( stage ==1 && ( magLen == 0 || noteLen == 0 || magLen < noteLen || magLen>30000 ||  noteLen>
    30000 )) { proceed = false; stage =100;} else { stage= 2; }

    if ( stage == 2){
        let magAllString = magazine.every(function(value ) {
            return  typeof value === 'string';});

        let noteAllString = note.every(function(value ) {
            return  typeof value === 'string';});

        if ( magAllString === false || noteAllString === false ) { proceed=false; } else { proceed=true; }
    }

    if( proceed == true)
        {
        for ( let word of note ){
                // if ( magazine.includes(word) ){
                    wordPos = magazine.indexOf(word);
                    // console.log( 'wordPos',  wordPos);
                    if ( wordPos < 0 ){ proceed = false; break} // exit the first time we dont find a match
                    if ( proceed == true && magazine.length > 0 && wordPos >= 0 && out.length < noteLen)
                        {
                        out.push(word);
                        magazine.splice( wordPos, 1 );
                        // console.log('magazine', magazine);
                        }
            }
        }
    if ( proceed == false ||  out.length != noteLen ) {console.log('No')}
    else { console.log("Yes");}
    // console.log('mag', magazine, 'out', out , 'note', note, 'out.length', out.length, 'noteLen', noteLen )
}

//////////////////////////////////////////////
//THIS IS THE VERSION SUBMITTED TO HACKER RANK
/////////////////////////////////////////////////
function checkMagazine(magazine, note) {
    let count = 0 
    let magLen = 0;
    let noteLen = 0;
    let wordPos = -1;
    let out = [];
    magLen = magazine.length;
    noteLen = note.length;
    let proceed = false;
    let stage = 0;
    // console.log(magazine, note);
    if ( Array.isArray(magazine) || Array.isArray(note) ){stage =1;} else { proceed = false; stage =100;}
    
    if ( stage ==1 && ( magLen == 0 || noteLen == 0 || magLen < noteLen || magLen>30000 ||  noteLen>
    30000 )) { proceed = false; stage =100;} else { stage= 2; }

    if ( stage == 2){
        let magAllString = magazine.every(function(value ) {
            return  typeof value === 'string';});

        let noteAllString = note.every(function(value ) {
            return  typeof value === 'string';});

        if ( magAllString === false || noteAllString === false ) { proceed=false; } else { proceed=true; }
    }

    if( proceed == true)
        {
        for ( let word of note ){
                    wordPos = magazine.indexOf(word);
                    // console.log( 'wordPos',  wordPos);
                    if ( wordPos < 0 ){ proceed = false; break} // exit the first time we dont find a match
                    if ( proceed == true && magazine.length > 0 && wordPos >= 0 && count < noteLen)
                        {
                        count+=1;
                        magazine.splice( wordPos, 1 );
                        // console.log('magazine', magazine);
                        }
            }
        }
    if ( proceed == false ||  count != noteLen ) {console.log('No')}
    else { console.log("Yes");}
}


function hourglassSum1(arr) {
    // for every index - look right 3 down center 1 down 3
       let hgs = [];
       let sums = 0;
       let totals = [];
      for( let rows = 0; rows < arr.length-2 ; rows++ ){
          for (let col=0;  col < arr[rows].length-2  ; col++ ){
              hgs.push(  arr[rows][col],      arr[rows][(col+1)],       arr[rows][(col+2)],
                                              arr[(rows+1)][(col+1)],
                          arr[(rows+2)][col], arr[(rows+2)][(col+1)],   arr[(rows+2)][(col+2)]
                       )
                // console.log('hgs', hgs);

                for ( h of hgs) {sums+=h;}
                totals.push(sums);
                // console.log('sums',sums)
                sums =0;
                hgs.length=0;
               }
       }
    //> ANOTHER WAY TO FIND MAX IN ARRAY
    // let max = totals.reduce(function(a, b) {
    //     return Math.max(a, b);
    // });
    // console.log( "the max is", max   );
    //   console.log(totals);
      totals.reverse();
      console.log('The max total is ver1', totals[0]);
      console.log( totals[0] );
    }
///////////////////////////////////////////////////////////////////////
// THIS VERSION SUBMITTED TO HR = REMOVING SEVERAL UNNECESSARY STEPS 
///////////////////////////////////////////////////////////////////////
function hourglassSum(arr) {
    // for every index - look right 3 down center 1 down 3
    let sums = 0;
    let totals = [];

    for( let rows = 0; rows < arr.length-2 ; rows++ ){
        for (let col=0;  col < arr[rows].length-2  ; col++ ){

            sums   =    arr[rows][col]     +  arr[rows][(col+1)]     +   arr[rows][(col+2)] +
                                              arr[(rows+1)][(col+1)] +
                        arr[(rows+2)][col] +  arr[(rows+2)][(col+1)] +   arr[(rows+2)][(col+2)];

            totals.push(sums);
            sums =0;
        }}
    console.log(totals);
    //> THIS IS REVERSE SORT THE EFFECTIVE WAY, WHEN YOU HAVE NEGATIVES SIMPLE .sort() and .reverse() doesnt work
    totals.sort(function(b, a){return a-b});
    // console.log(totals);
    console.log( totals[0] );
    return totals[0];
    }

testArr1 = [ [ 1,2,3,-4,5,6],
            [20,21,22,-23,-24,-25,26],
            [30,31,32,33,34,35,36],
            [40,-41,-42,-43,-44,-45,-46],
            [50,51,52,53,54,55,56],
            [60,61,62,63,64,65,66]
           ]

            console.log( 'testArr1[1][3]' , testArr1[1][2]  );

hourglassSum1(testArr1);

hourglassSum(testArr1);

function weird(N) {
/*
N must be greater equal to 1 
If  is odd, print Weird
If  is even and in the inclusive range of  2 to 5, print Not Weird
If  is even and in the inclusive range of  6 to 20, print Weird
If  is even and greater than 20 , print Not Weird
Complete the stub code provided in your editor to print whether or not  is weird.
*/
  let outcome = '';
  if ( N % 2 !== 0  ) outcome = 'Weird';
  else if ( N >= 2 && N <=5 ) outcome ='Not Weird';
  else if ( N >= 6 && N <=20 )outcome = 'Weird';
  else outcome = 'Not Weird';
  console.log(outcome);
}

weird(25);
weird(1);
weird(4);
weird(3);

