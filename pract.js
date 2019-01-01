
//problem with var key word
var a = [];

for ( var i= 0; i < 2 ;i++) // solution replace var to let 
{
  a.push(function(){
      console.log(i);
  })
}

a[0](); // 2
a[1](); // 2


//problem with this in ES5 and solve it by Arrow Function in ES6

//es5
var a = function () {
    return 5;
}
console.log(a()); // 5

//es6
var a = () => 5;
console.log(a()); // 5

//es5 
var b = function (c) {
    return c* 5;
}
console.log(b(5)); // 25

//es6 
var b =  (c) => c* 5;
console.log(b(5)); // 25


// problem with this in ES5

var g = 
{
  process:function()
  {
      return function () {
          console.log( this.number);
      }
  }
}

g.process()(); // ()() this mean fire procss fun which return functin then fire it 
//undefined 

//solution In ES6 With Aroww fun
var g =
{
   number:115,
   process: function() {return () => console.log( this.number); }
}
g.process()(); //115


//Defult Function Parameter

//In es5
var d = function (product) {
    if(product === undefined)
    {
        product = 200;
    }
    console.log(product);
}
d(); //200
d(10); // 10

//defult parameter In ES6
var dd = function (product = 200) {
    console.log(product);
}
dd(); //200
dd(10); // 10


var d = function (product = 300 , price = 50) {
    console.log(product);
    console.log(price);
}
d(); //300 , 50
d(undefined,10); // 300,10

// Reset Operator

var rest = function (product , ...categry) {
    console.log(categry[0]);
}
rest(1,2,3,4); // 2,3,4 pass as element in arry category 
rest(1)        //[] Empty Arry 


// Spread Operator

var spread = [1,2,3,5];
console.log(Math.max(...spread)); // 5  

// max function  not accept arry but number separated by , spread operator do this with function









