// Relational operator ->  , > , <= , == , ===,! == 


var num1 = 20 ;

var num2 = 25;

console.log(num1>num2);        // false

console.log (num1>=num2);     // false 


console.log (num1<=num2);         // true 

console.log (num1<num2);    // true 

console.log (20<20);      // false 

console.log(20>= 20);  // true 

console.log(20<= 20);   // true 


console.log(20 == "20");    // true ...because two == will check only value , it will not check data type 


console.log(20 === "20");   // false ....cz it will check value and data type both;

//     != just value check   ! == value and data type check 



console.log(25!= 20);         // true.... != just value check 

//......................logical operator ......................................

// logical operator -> , && , || 

var x = 50;

var y = 30;

var z = 20;


console.log(x>y &&  x>z);       //true .....both side need to be ture 


console.log(x>y || x<y || z > x );            // true ..cz firs one is ture : here  need to be any single one true 


console.log(x>y &&  z>x);   // false becaause z>x is not true ...both side need to be ture 


console.log(!false );    // true 



console.log(!(25>20));     // false 













