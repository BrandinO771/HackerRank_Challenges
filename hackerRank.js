
/*
///////////////////////////////////////////////////////////////////
hello I am Brandon Steinke 
EMAIL. brandon.steinke@yahoo.com
PORTFOLIO. https://brandino771.github.io/

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
U = UP , D = DOWN
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
    let max = totals.reduce(function(a, b) {
        return Math.max(a, b);
    });
    // console.log( "the max is", max   );
    //   console.log(totals);
    //   totals.reverse();
      console.log('The max total in the following array is ver1', max);
      console.log( max );
    }
///////////////////////////////////////////////////////////////////////
// THIS VERSION SUBMITTED TO HR = REMOVING SEVERAL UNNECESSARY STEPS 
// this was also the challenge from Day 11: 2D Arrays the refactored version below - I got read of sums array was extra not needed
///////////////////////////////////////////////////////////////////////
function hourglassSum(arr) {
    // for every index - look right 3 down center 1 down 3
    let storedSums = 0;
    let sums = 0;
    let totals = [];

    for( let rows = 0; rows < arr.length-2 ; rows++ ){
        for (let col=0;  col < arr[rows].length-2  ; col++ ){

            sums   =    arr[rows][col]     +  arr[rows][(col+1)]     +   arr[rows][(col+2)] +
                                              arr[(rows+1)][(col+1)] +
                        arr[(rows+2)][col] +  arr[(rows+2)][(col+1)] +   arr[(rows+2)][(col+2)];

            totals.push(sums);
            if( sums > storedSums) storedSums = sums;
            sums =0;
        }}
    console.log(totals);
    console.log("this is hourglass sums", storedSums);
    //> THIS IS REVERSE SORT THE EFFECTIVE WAY, WHEN YOU HAVE NEGATIVES SIMPLE .sort() and .reverse() doesnt work
    totals.sort(function(b, a){return a-b});
    // console.log(totals);
    console.log( totals[0] );
    return totals[0];
    }


function hourglassSum2(arr) {
        let storedSums = -1000;
        let sums = 0;
    
        for( let rows = 0; rows < arr.length-2 ; rows++ ){
            for (let col=0;  col < arr[rows].length-2  ; col++ ){
    
                sums   =    arr[rows][col]     +  arr[rows][(col+1)]     +   arr[rows][(col+2)] +
                                                  arr[(rows+1)][(col+1)] +
                            arr[(rows+2)][col] +  arr[(rows+2)][(col+1)] +   arr[(rows+2)][(col+2)];
                if( sums > storedSums) storedSums = sums;
                sums =0;
            }}
        return storedSums;
        }
    
        
let  testArr1 = [ [ 1,2,3,-4,5,6],
        [20,21,22,-23,-24,-25,26],
        [30,31,32,33,34,35,36],
        [40,-41,-42,-43,-44,-45,-46],
        [50,51,52,53,54,55,56],
        [60,61,62,63,64,65,66]
    ]
console.log("this is hourglass2 result", hourglassSum2(testArr1)  );

console.log( 'testArr1[1][3]' , testArr1[1][2]  );

console.log("this is hourglass1 result sum array",hourglassSum1(testArr1));

console.log("this is hourglass result",hourglassSum(testArr1));
/////////////////////////////////////////////////////////////////
// object oriented submission 30 day challenge
////////////////////////////////////////////////////////////////
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

function Person(initialAge){
    /*
if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:
yearPasses() should increase the  instance variable by .
amIOld() should perform the following conditional actions:
If <13, print You are young..
If >=13 <18 and , print You are a teenager..
Otherwise, print You are old..
*/
    // Add some more code to run some checks on initialAge
let ageCheck = initialAge;
 
if (ageCheck < 0 ) { 
    console.log("Age is not valid, setting age to 0" );
    ageCheck = 0;
    }
 
  let age = ageCheck;

  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if (age >= 0 && age <13 )  console.log("You are young", age );    
    if (age >= 13 && age <18 ) console.log("You are a teenager", age ); 
    if (age >= 18 )  console.log("You are old", age );     
    return age;    
  };

   this.yearPasses=function(){
          // Increment the age of the person in here
          age +=1;
   };
}

function main2() {

    var age=18;
    var p=new Person(age);
    p.amIOld();
    for(j=0;j<3;j++){
        p.yearPasses();
        
    }
    p.amIOld();
    console.log("");   
}
main2();

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
let myString1 = 'theBlackSon';
if ( myString1.includes('Black'))
        console.log(myString1, 'contains what you are looking for ');
else
        console.log(myString1, 'contains what you are looking for ');

 
 function makeAnagram(a, b) {
        // compare a to b if a is NOT in b increment counter
        let aa=a.split('');
        let bb=b.split('');
        let deletionCount = 0;
        let deletedList = [];
        aa.sort();// THESE BOTH HAVE TO BE SORTED TO WORK
        bb.sort();
        //-> get list of all non shared elements  from both lists
        for ( let letter of  aa )
            if( !bb.includes(letter) )  deletedList.push(letter);

        for ( let letters of bb )
            if( !aa.includes(letters) )  deletedList.push(letters);
        
        for ( let char of deletedList ) //-> DELETE non shared elements from each list
            {
            if ( aa.includes(char)   ) { aa.splice(  aa.indexOf(char) , 1  ) ;}
            if ( bb.includes(char)   ) { bb.splice(  bb.indexOf(char) , 1  ) ;}
            }
        // console.log( 'len of delete list' , deletedList.length , 'len of aa', aa.length,  'len of bb', bb.length  )
        //-> ONLY KEEP PAIRS
        // got through remaining lists and compare filter results if one is larger 
        // than the other , delete that many from the other list 
        let comp1 = [];
        let comp2 = [];
        for ( let final of aa )
            {
                comp1 = aa.filter(x => x == final);
                comp2 = bb.filter(x => x == final);

                if( comp1.length > comp2.length ) //the odd man out 
                    {
                        aa.splice(aa.indexOf(final),  comp1.length - comp2.length );
                        deletionCount += (comp1.length - comp2.length);
                    } 
                else 
                    {
                        bb.splice(bb.indexOf(final),  comp2.length - comp1.length );
                        deletionCount += (comp2.length - comp1.length);
                    } 
            }

            deletionCount += deletedList.length;
       console.log('deletion ct', deletionCount,'deletedList',  deletedList, 'a', aa , 'b', bb);
       return deletionCount;

       }

// makeAnagram('cde', 'abc');
makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');
///////////////////////////////////////////////////////////////////////////////////////////////////////
//// --> THIS OTHER GUY SUBMITTED BELOW -STILL TRYING TO FIGURE IT OUT 
/// BUT LOOKS LIKE HE GOT NUMERIC VALUES FOR EACH CHARACTER CREATED POS AND NEG FOR COMPARE THEN ADDED IT ALL UP
function processData(left, right) {
	const count = new Array(26).fill(0);
	const pos = s => {
		return   s.charCodeAt(0) - 'a'.charCodeAt(0) ;
	}

	for (let i = 0; i < left.length; ++i) {
		count[pos(left.charAt(i))]++;
	}

	for (let i = 0; i < right.length; ++i) {
        count[pos(right.charAt(i))]--;
        // console.log( pos(right.charAt(i)) )
	}
	// console.log(count);
	const diff = count.reduce((p, c) => {
		return Math.abs(p) + Math.abs(c);
	}, 0);
  
  console.log('count', count)
  console.log(diff);
}

processData('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');

//////////////////////////////////////////////////////////////////////////////////////
// how many deletions needed to remove repeated consecutive letters 
//////////////////////////////////////////////////
function alternatingCharacters(s) {
    let dels = 0;
    if ( typeof s == 'string'){
       for ( let y =0;  y < s.length-1; y++) 
           if (s[y] == s[(y+1)] ) dels+=1
           
       return dels ;
       }
   }
console.log( alternatingCharacters('AAABBBAABB' )  );
console.log( alternatingCharacters('AABBAABB' )  );
console.log( alternatingCharacters('ABABABAA')  );



//////////////////////////////////////////////////////////////////////////////////////
// Day 6: 
//input is a string with line seperators '\n', first element =number of strings, then strings , 
/// iterate through strings break into 2 strings if index pos of char odd or even
//////////////////////////////////////////////////
function processData(input) {

    let strArr = input.split('\n');//make array
    strArr.shift();//drop first element which is num of sep strings

    for (  let i of strArr  ){
        str1 ='';
        str2 = '';
        for (  let  x  in  i  ){
            if (x % 2 == 0) str1+=i[x] ;// if odd or even
            else str2+=i[x] 
        }
    console.log(str1,str2);
    }
} 
console.log('this is process data solution:');
processData( '2\nHacker\nRank');

//////////////////////////////////////////////////
// DAY 7 : ARRAY - REVERSE - PRINT - 1 LINE W/ SPACES 
/////////////////////////////////////////////////
function main1(arr) {
    ////-->MY CODE BELOW :
    /// --> REVERSE INPUT ARRAY - PRINT ON ONE LINE - W/SPACE BTWN EACH
    // - NOTES: I REFACTORED MORE AFTER SUBMISSION DROPPING to.String() AND REALIZED FROM OTHER USER COULD HAVE USED JOIN
    arr.reverse();
    let str = '';
    for ( let i of arr )   str +=  i + ' ';
    // i.toString(); //> THIS NOT NEEDED
    // str+=i+' '; //> MOVED AVOVE 
     /// I COULD HAVE USED JOIN!!!!
    console.log(arr.join(' '));
    console.log(str)
}
console.log('this is main1 solution:');
main1([5,4,3,2,1]);

//////////////////////////////////////////////////////////////////////////////////////////
// <>  INTERVIEW PREP compare all pairs in array and return absolute smallest diff
//////////////////////////////////////////////////////////////////////////////////////////
//=> NOTES : THEY THREW IN SOME LARGE SETS OF 100K TOTAL NUMBERS,
// THE LARGER SETS THE SOLUTION FOUND BY SORTING THEN CHECKING ADJACENT NUMBERS 
// FOR SMALL SET CHECK ALL COMBOS 
/// this times out on large sets - we should break if min is zero
function minimumAbsoluteDifference(arr) {
    /// this times out on large sets - we should break if min is zero
    /// I RESUBMITTED FOR JUST THE TOP FOR LOOP AND IT WORKED FOR ALL THE 
    // TOP FOR LOOP DOES NOT CHECK ALL PERMUTATIONS AES INSTRUCTIONS WANTED ? 
    let results = [];
    let diff = -1;
    let ct = 0;
        arr.sort(function(a, b) { return  b - a });
        ///==> FIRST CHECK ALL ADJENCENT PAIRS 
        if ( arr.length > 500){ // for optimization
        for ( let t = 0; t < arr.length-1; t++)
            {
                diff = Math.abs(  parseInt(arr[t]) - parseInt(arr[(t+1)]) );
                if ( results.length == 0) results[0] = diff;
                if ( diff < results[0] ) results[0] = diff;
                if ( diff == 0){ return results[0]; }
            }}
        ///=> NEXT CHECK ALL POSSIBLE PAIRS -this could be 10 billion combos on large set!!
        if ( arr.length < 500){
        for ( let i of arr){
            for( let x of  arr ){
                if ( i != x ){
                    diff = Math.abs(  parseInt(i) - parseInt(x) );
                    if ( results.length == 0) results.push(diff)
                    if ( diff < results[0] ) results[0] = diff;
                    if (diff == 0){ results[0] = 0; break }
                    } 
           }}}
        return results[0];
    }
    
// console.log(data)
// process1([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]);// should be 1
console.log(minimumAbsoluteDifference( [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]) );
// process1([3, -7, 0]);// should be 3
// process1([1, -3, 71, 68, 17,]); // should be 3 
console.log(minimumAbsoluteDifference( [1, -3, 71, 68, 17]) );
// console.log('typeof data1', typeof data1, data1.length);
console.log('processing large set comp');
// console.log(minimumAbsoluteDifference(data1)); // should be 3 
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

myMap = new Map();
// myMap.push({ name : 'Brandon', phone : '123-456-7890'});


myMap.set( 'Tina', { phone: '222-456-7890'} );
myMap.set( 'Brandon', { phone: '222-5555-7890'} );
console.log( 'Brandons info', myMap.get('Brandon').phone        );
console.log( 'Brandons info', myMap.get('Brandon') );

// myDict = new Set();
myDict = [];

// myMap[0].append( ('Tina', '222-456-7890'));
myDict.push( ['Tina', '222-456-7890']);

console.log('myDict',myDict)

console.log(myMap)
//////////////////////////////////////////////////////////////////////////////////////////
// Day 8: Dictionaries and Maps
//////////////////////////////////////////////////////////////////////////////////////////
/*
Given  names and phone numbers, assemble a phone book that maps friends' names 
to their respective phone numbers. You will then be given an unknown number of names 
to query your phone book for. For each  queried, print the associated entry from your 
phone book on a new line in the form name=phoneNumber; 
if an entry for  is not found, print Not found instead.
*/
function processData1(input) {
    //BRANDON STEINKE SUBMISSION - PHONE BOOK CHECK
    //Day 8: Dictionaries and Maps
    let phoneBook  = new Map();
    let temp =[];
    // input = input.split('\n'); 
    
    for ( let i = 1; i <= parseInt(input[0]) ; i++ ){
        temp = input[i].split(' ');
        phoneBook.set( temp[0], { phone: temp[1] } );
        }

    for ( let x = 1 +(parseInt(input[0]));  x < input.length; x++){
        let exists = phoneBook.get( input[x]  );
        if ( exists ) { console.log( `${input[x]}=${exists.phone}` );}
        else {  console.log('Not found');}
    }      
} 
console.log('the day 8 array map results');
processData1( [ '3',
  'sam 99912222',
  'tom 11122222',
  'harry 12299933',
  'sam',
  'edward',
  'harry' ]);


//////////////////////////////////////////////////////////////////////////////////////////
// Day 9: Recursion 3
/////////////////////////////////////////////////////////////////////////////////////////

//>> DIRECTLY BELOW WAS TESTS PRIOR TO SUBMISSION
let  answer = 0;
function factorial1(n) {
    // console.log(' top this is answer', answer, 'this is n', n);
    if ( answer > 0 )   { answer =  answer * n;   n-=1;   console.log(' ongoing answer', answer, 'this is n', n);}
    if ( answer == 0 )  { answer = ( n * (n-1));  n-=2;   console.log(' initial answer', answer, 'this is n', n);} //else  { answer * n; }
    if( n > 1 ) factorial(n);  
    return answer;
}
console.log( 'factorial answer', factorial1(6) );

////////////////////////////////////////////////
///>>BELOW SUBMITTED TO HACKER RANK CHALLENGE
// BRANDON STEINKE SUBMISSION RECURSIVE CALC OF FACTORIAL - TRICKIER THAN ORIGINALLY THOUGHT!
answer = 0;
function factorial(n) {
    if ( answer > 0 )   { answer =  answer * n;    n-=1;  }
    if ( answer == 0 )  { answer = ( n * (n-1) );  n-=2;  } 
    if ( n > 1 ) factorial(n);  
    return answer;
}
function main3() {
    let result = factorial(11);// answer should be 39916800
    console.log("this is the result", result);
}
main3();
/////////////////////////////////////////////////
// Day 10: Binary Numbers
/////////////////////////////////////////////////
// convert number to binary then count max group of consect 1's
//  let inputzString =['1911']
//  let inputzString =['6'] // should be 2
//  let inputzString =['5'] // should be 1 
 let inputzString =['65535']; //should be 16
  /////////////////////////////////////
  // My code below 
function convBinary(num){  
    return ( num  >>> 0 ).toString(2); 
    }
let num='';
num = convBinary( inputzString[0]);
console.log('this is num binary', num);
let consectOnes =0;
let consectSave = 0;
 for ( let n of num ){
     if ( n == '1') consectOnes+=1; 
     if ( n == '0'){
         if( consectSave < consectOnes) { consectSave = consectOnes; } 
         consectOnes = 0;
 }}
 if( consectSave < consectOnes) {consectSave = consectOnes; } 

console.log(" this is consectSave", consectSave);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Day 11 2D Arrays >>> this was exactly like the hour glass above so thats why no code is below
///////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// Day 12 inheritance class
//////////////////////////////////////////////////////

class Persons {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Persons {

    /////////////////////////////////////////
    // ALL MY CODE BELOW 
    ///////////////////////////////////////////
     
     constructor(...parms){ 
       //>> inherit the parent parameters
        let theParms = super(parms) ;
        this.allParms = theParms;
        // console.log('all parms', allParms);
        //>> restructure the object extract all from firstName property
        this.allParms.lastName = this.allParms.firstName[1];
        this.allParms.idNumber = this.allParms.firstName[2];
        this.allParms.scores  = this.allParms.firstName[3];
        this.allParms.firstName = this.allParms.firstName[0];
     }

  printPerson (){
      console.log(`Name: ${this.allParms.lastName}, ${this.allParms.firstName}\nID: ${this.allParms.idNumber}`);
      }
  
    /*   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
     calculate(){
        let score = [];
        score = this.scores;
        let avg = 0;
        let sums = 0;
        let grade = '';
        for ( let testResult of score) sums+=parseInt(testResult);

        avg = sums/score.length;

             if ( avg >= 90 ) grade ='O'
        else if ( avg >=80 && avg < 90 ) grade ='E'
        else if ( avg >=70 && avg < 80 ) grade ='A'
        else if ( avg >=55 && avg < 70 ) grade ='P'
        else if ( avg >=40 && avg < 55 ) grade ='D'
        else grade = 'T';

        // console.log('grade',grade) 
        return grade;
        };
}

function main8() {
    let firstName ='Ted'
    let lastName = "Potts"
    let id = 134654654
    let testScores = [80, 50]

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
main8();

///////////////////////////////////////////////////////////////////////////////
///Day 13: Abstract Classes
///////////////////////////////////////////////////////////////////////////////
class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}
// Declare your class here.
    /**   
    *   Class Constructor
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/// Write your constructor here


    /////////////////////////////////////////////
    //>Brandon Steinke Submission below MyBook class below 
    /////////////////////////////////////////////
class MyBook{
    constructor(...parms)
    {
        this.props = parms;
        this.theBook= {
                Title : this.props[0],
                Author: this.props[1],
                Price : this.props[2]
        }
    }

    /*   Method Name: display
    *   Print the title, author, and price in the specified format.
    // Write your method here*/
    display(){
        let bookObj =this.theBook
        for ( let key of Object.keys(bookObj) )
             console.log(key+':', bookObj[key]);
    }
    
// End class
}
function main10() {
    let title = "Toads on the Roads"
    let author = "Toady McFlippers"
    let price =  400.00
    let book = new MyBook(title, author, price)
    book.display()
}

main10();




///////////////////////////////////////////
//// Day 20 bubble sort - receive arr sort ascending, return first last and number of swaps
//////////////////////////////////////////
//HackerRank provided a template for the bubble sort algorithm in python? and we had to implement
   //>> Brandon Steinke submission below:
   function BubbleSorts1(arr){
    let total_swaps=0
    let temp_curr=0
    let temp_next=0
    let curr = 0
    let nexts = 0
       
       for (let i = 0; i < arr.length; i++) {
       // Track number of elements swapped during a single array traversal
           let numberOfSwaps = 0;
       
           for (let j = 0; j < arr.length - 1; j++) {
               // Swap adjacent elements if they are in decreasing order
               curr = arr[j]
               nexts = arr[(j + 1)]
               temp_curr
               temp_next
               if ( curr > nexts ){
                   temp_curr = nexts
                   temp_next = curr
                   arr[j] = temp_curr
                   arr[(j + 1)] = temp_next
                   numberOfSwaps++;
                   total_swaps +=1;
               }
           }
       
       // If no elements were swapped during a traversal, array is sorted
               if (numberOfSwaps == 0) {
               break;
           }
       }
       console.log('bubbleSorts1 results', arr)
       console.log(`Array is sorted in ${total_swaps} swaps.`);
       console.log(`First Element: ${arr[0]}`);
       console.log(`Last Element: ${arr[(arr.length-1)]}`);
}
BubbleSorts1([3,2,1]);











