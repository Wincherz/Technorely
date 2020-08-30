var myGlobal = 10;
var oopsGlobal;

const func1 = () => {
  oopsGlobal = 5;
};

const func2 = () => {
  var output = '';
  if (typeof myGlobal !== undefined) {
    output = undefined;
    output = `myGlobal: ${myGlobal}`;
    console.log(output)
  }
  if (typeof oopsGlobal !== undefined) {
    output = undefined;
    output = `myGlobal: ${oopsGlobal}`;
    console.log(output)
  }
}

func2()


const myLocalScope = () => {
  'use strict'
  var myVar = 'my local variable'

  console.log(`inside myLocalScope ${myVar}`)
}

myLocalScope()

console.log(`outside myLocalScope ${myVar}`)