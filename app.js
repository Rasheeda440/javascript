// Assignment no: 6 

// chapter 21-25:

// Task 1:

// var firstName = prompt("Enter your first name.");
// var lastName = prompt("Enter your last name.");
// var fullName = (firstName  +" " + lastName);
// alert("Hello " + fullName);

// Task 2:

// var mobile = prompt("Enter your favorite mobile model");
// alert("My favorite mobile model is: " + mobile);
// alert("length of string: " + mobile.length);

// Task 3:

// var pak = "Pakistani";
// document.write("String: " + pak);
// document.write("<br>");
// document.write("Index of 'n': " + pak.indexOf("n"));

// Task 4:

// var pak = "Hello World";
// document.write("String: " + pak);
// document.write("<br>");
// document.write("Index of 'n': " + pak.lastIndexOf("l"));

// Task 5:

// var pak = "Pakistani";
// document.write("String: " + pak);
// document.write("<br>");
// document.write("Character at index 3: " + pak.charAt(3));

// Task 6:

// var firstName = prompt("Enter your first name.");
// var lastName = prompt("Enter your last name.");
// var concat = firstName.concat(lastName);
// document.write(concat);

// Task 7:

// var str = "City: Hyderabad";
// document.write(str);
// document.write("<br>");
// var res = str.replace("Hyder", "Islam");
// document.write("After replacement " + res);

// Task 8:

// var str = "Ali and sami are best friends, They play cricket and football together.";
//  document.write(str);
// document.write("<br>");
// var res = str.replace(/and/g, "&");
// document.write("After replacement " + res);

// Task 9:

// var num = "472 ";
// var num1 = parseInt(472);
// var num2 = typeof num;
// var num3 = typeof num1;
// document.write("Value: " + num + "<br>" + "Type: " + num2 + "<br>");
// document.write( "Value: " + num1 + "<br>" + " Type: " + num3);

// Task 10: 

// var str = prompt("Enter any word!");
// var res = str.toUpperCase();
// document.write("User Input: " + str + "<br>");
// document.write("Upper Case: " + res);

// Task 11:

// var str = prompt("Enter any statement!");
//  var str1 = str.toLowerCase().split(' ');
// for (var i = 0; i < str1.length; i++) {
//   str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
// }
// document.write("User Input: " + str + "<br>");
// document.write("Title Case: " + str1.join(' '));

// Task 12:

// var num = 35.36;

// function remove_decimal(num)
// {
//     var numStr = "" + num;
//     var decimalIndex = numStr.indexOf('.');
//     return num * Math.pow(10, (numStr.length - (decimalIndex + 1)));
// }

// remove_decimal(num)
// document.write("Number: " + num + "<br>");
// document.write("Result: " + remove_decimal(num));

// // Task 13:

// var userName = prompt("Enter your username");
// var arr = [ "@" , "." , "," , "!"];
// if (userName.match[arr]){
//     document.write("Please enter a valid username!");
// }

// Task 14:

// var inputtxt = prompt("What do you want to order?");
// var arr = ["cake", "appple pie" , "cookie", "chips" , "patties" ];
// if(inputtxt.match[arr]){
//     document.write(inputtxt + "is available at index" + arr.indexOf(inputtxt)  + "in our bakery" );
// } else {
//     alert("we are sorry " + inputtxt + " is not availabe in our bakery");
// }

// Task 15:

// var inputtxt = prompt("Enter password!"); 

// var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
// if(inputtxt.match(passw)) 
// { 
// alert('Correct, try another...')
// }
// else
// { 
// alert(' Enter a valid password')
// }


// Task 16: 

// var university  = "University Of Karachi";
// var ar = university.split(','); 
// document.write(ar);
// document.write("<br>");


//   for (var i=0; i < ar.length; i++){
//    document.write(ar[i] + "<br>");
//   }



// Task 17:

// var str = prompt("Enter any word!");
// var res = str.charAt(str.length-1); 
// document.write("Last character of input: " + res);              


// Task 18:

// var r = "the quick brown fox jumps over the lazy dog. "; 
// var c = (r.match(/the/g)).length
// document.write("There are " + c + " occurrance(s) of the word 'the'" );

// chapter no: 26-30

// Task 1:

// var num = prompt("Enter a positive integer");
// document.write("number: " + Math.abs(num) + "<br>" + "round off value " + Math.round(num) + "<br>" + "floor value: " + Math.floor(num) + "<br>" + "ceil value: " + Math.ceil(num));

// Task 2:

// var num = prompt("Enter a negative floating number");
// document.write("number: " + Number(num) + "<br>" + "round off value " + Math.round(num) + "<br>" + "floor value: " + Math.floor(num) + "<br>" + "ceil value: " + Math.ceil(num));

// Task 3:

// var num = prompt("Enter a positive integer");
// document.write("The absolute value of " + num + " is " + Math.abs(num)); 

// Task 4:

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write('random dice value: ' + diceRoll + "<br>" );
// var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
// document.write('random dice value: ' + diceRoll1);

// Task 5:

 
//  var x = (Math.floor(Math.random() * 2) == 0);
//  if(x){
//  document.write("random coin value: Heads" + "<br>");
//  }
//  var x1 = (Math.floor(Math.random() * 2) == 0);
//  if(x1){
//  document.write("random coin value: Tails" );
//  }

// Task 6:

// var ram = Math.floor(Math.random() * 100) + 1;
// document.write("random number between 1 and 100: " + ram);


// Task 8:


// var y = Math.floor(Math.random() * 10 + 1); 
    
// var x = prompt("Enter a number between 1 and 10")
// if(x == y) 
// {     
//     alert("Congratulate the user!"); 
// }
//  else 
// {
//     alert("Try again!"); 

// }


// Chapter no: 31-34

// Task 1:

// var d = new Date();
// var month = d.getMonth()+1;
// var date = d.getDate()+"."+month+"."+d;
// document.write(date);

// Task 2:

// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var d = new Date();
// alert("Current month: " + monthNames[d.getMonth()]);

// Task 3:

// var dayNames = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"
// ];

// var d = new Date();
// var day = dayNames[d.getDay()];
// var name = day.substring(0,3);
// alert("Today is " + name);

// Task 4:

// var dayNames = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"
// ];

// var d = new Date();
// var day = dayNames[d.getDay()];
// if (day == "Sunday" && day == "Saturday" ){
//     document.write("It's a fun day");
// }

// Task 5:

// var d = new Date();
// var date = d.getDate();
// if(date < 16){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month");
// }

// Task 7:

// var hours = new Date(). getHours(); 
// var hours = (hours+24-2)%24; 
// var mid='am';
//  if(hours==0){ 
//      hours=12; 
// } else if(hours>12) { 
//     hours=hours%12; mid='pm'; 
// } 
// alert ("It's" + mid);

// Task 8:

// var d = new Date(2020, 11, 31);
// var month = d.getMonth()+1;
// var date = d.getDate()+"."+month+"."+d;
// document.write("Later date: " + date);

// Task 9:


// var date1 = new Date("05/24/2020"); 
// var date2 = new Date("07/20/2020"); 

// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

// document.write( Difference_In_Days + "  days have passed since 1st, Ramzan 2020"); 

// Task 10:

// var date1 = new Date("0/1/2020"); 
// var date2 = new Date("07/20/2020"); 

// var Difference_In_Time = date2.getSeconds() - date1.setSeconds(); 

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24 * 12 * 60); 

// document.write( "On reference date " + date2.getDate() + " ," + Difference_In_Days + " seconds had passed since beginning of 2020"); 

// Task 11:

// Task 12:


// Task 13:

// function calculate_age(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// document.write(calculate_age(new Date(2000, 2, 21)));

// Task 14:

// var customerName = prompt("Enter customer name");
// var currentMonth = prompt("Enter current month");
// var numberOfUnits = prompt("Enter no of units");
// var chargesPerUnit = prompt("Enter charges per unit");
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var netAmountPayable1 = Math.round(netAmountPayable);
// var latePaymentSurcharge = +prompt("Enter late payment surcharge ");
// var grossAmountPayable = +(netAmountPayable + latePaymentSurcharge);
// var grossAmountPayable1 = Math.round(grossAmountPayable);
// document.write("Customer Name: " + customerName + "<br>" + "Month: " + currentMonth + "<br>" + "Number Of Units: " + numberOfUnits + "<br>" + "Charges Per Unit: " + chargesPerUnit + "<br>" + "Late Amount Payment (within due date): " + netAmountPayable1 + "<br>" + "Late Payment Surcharge: " + latePaymentSurcharge + "<br>" + "Gross Amount Payable (after due date): " + grossAmountPayable1  );



// Chapter no: 35-38

// Task 1:

// function dateTime(){
// var d = new Date();
// var month = d.getMonth()+1;
// var date = d.getDate()+"."+month+"."+d;
// document.write(date);

// }
// dateTime();

// Task 2:

// function name(){
//     var first = prompt("Enter your first name");
//     var last = prompt("Enter you last name");
//     document.write("Hello " + first + " " + last + "!" );
// }
// name();

// Task 3:

// function sum(){
//         var first = +prompt("Enter first number");
//         var last = +prompt("Enter second number");
//         document.write( first  + last  );
//     }
//     sum();
    
// Task 4:

// function calc(num1,num2,opr){
//     num1 = +prompt("Enter first number");
//     num2 = +prompt("Enter second number");
//     opr = prompt("Enter operator");
//     if (opr == "+" ) {
//         document.write( num1 + num2);
//     }
//     else if (opr == "-"){
//         document.write( num1 - num2);
//     }
//     else if (opr == "*"){
//         document.write( num1 * num2);
//     }
//     else if (opr == "/" ) {
//         document.write( num1 / num2);
//     }
//     else {
//         document.write("Enter a valid value");
//     }
// }
// calc ();

// Task 5:

// function square(a){
//     a = +prompt("Enter any number");
//      var b = a * a;
//      document.write(b);
// }
 
// square();

// Task 6:

// function factorial(n){
   
//     if(n == 0 || n == 1){
//         return 1;
    
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = +prompt("Enter a number"); 
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);
    
// Task 7:

// function count() {
//     var FirstNumber = +prompt("Enter starting number");
//     var SecondNumber = +prompt("Enter ending number");

//     for (var i = FirstNumber; i <= SecondNumber; i++) {
//      document.write( i + "<br>");
//     }
// }
// count();

// Task 8:

// function calchyp(hyp){
   
//     function calcsqr(){
//         var sideA = +prompt("Enter base");
//         var sideB = +prompt("Enter perpendicular");
//         hyp = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//         document.write("hypotenuse = " + hyp);   
//     }
//     calcsqr();
    
// }
// calchyp();

// Task 9:

// function area(width , height){
//     var a;
//     a =  width * height;
//     return a;
// }
// document.write("Area of a rectangle is: " + area(4,2));

// Task 10:

// function Palindrome(str_entry){
//         var str_entry = prompt("Enter anything");
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
  
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
     
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
 
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
    
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
    
//         for (var x = 0; x < ccount; x++) {
     
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 document.write("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         document.write("The entry is a palindrome.");
//         return true;
//     }
// Palindrome();

// Task 11:

// function uppercase(str)
// {
//     var str = prompt("Enter anything");
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase());

// Task 12

// function find_longest_word(str)
// {
//     var str = prompt("Enter anything");
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word());
    
// Task 13:

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('web development', 'e'));

// Task 14:

// function calcCircumfrence(radius1) {
//     var radius1 = prompt("Enter the radius for circumference of circle");
//     var y = (Math.PI * radius1) * 2;
//   document.write("The circumfrence is " + y + "." + "<br>");
//   }
//   function calcArea(radius) {
//     var radius = prompt("Enter the radius for area of circle");

//     var x = (Math.PI * radius) * radius;
//   document.write("The area is " + x + ".");
//   }
  
//   calcCircumfrence();
//   calcArea();
  
  