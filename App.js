// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet('dipak');

// function makeAdjective(adjective) {
//   return function (val) {
//     console.log(adjective + '' + val);
//   };
// }

// var coolAdjective = makeAdjective('cool');
// coolAdjective('conferense');

// Map
rooms = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'];

var newRooms = rooms.map(function (val) {
  if (val == 'r3') {
    console.log('r2');
  } else {
    console.log(val);
  }
});
newRooms;
