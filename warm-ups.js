var apples = 14;
console.log(apples);

console.log('I have ' + apples + 'apples.');

//-----------------------------------------

var materials = ['wood','metal','stone'];

var words ={
  elephant: "The world's largest land mammal.",
  school: 'A place of learning.',
  iceCream: 'A delicious milk-based dessert.'
};

//------------------------------------------

var num = 16;

if (num > 10){
  console.log( num + " is greater than 10." )
} else if (num === 10) {
  console.log(num + " is exactly 10.")
} else {
  console.log(num + " must be less than 10.")
}

//----------------------------------------------

for ( i=0; i<10; i++ ){
  console.log('Doing the same thing over and over')
}

//------------------------------------------------

var base = 5;

for (i=0; i<20; i++){
  console.log(i+base)
}

//--------------------------------------------------

var total = 0;
for(i=0; i<100; i++){
  total += i;
}
console.log(total);

//--------------------------------------------------









//----------------------------------------------------






//----------------------------------------------------

function helloWorld(){
  console.log("Hello World!");
}

helloWorld;

//-----------------------------------------------------
