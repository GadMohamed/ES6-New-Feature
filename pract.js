
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
          console.log(this.number);
      }
  }
}

g.process()(); // ()() this mean fire procss fun which return functin then fire it 
//undefined 

//solution In ES6 With Aroww fun
var g =
{
   number:115,
   process: function() {return () => console.log(this.number); }
}
g.process()(); //115