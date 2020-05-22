const movieData = [
  {
    title: 'Wolf of Wall Street',
    price: 300,
  },
  {
    title: 'Wake Up Sid',
    price: 180,
  },
  {
    title: 'dipak',
    price: 200,
  },
];

function MovieStore(data) {
  debugger;
  return {
    data,
    totalPrice() {
      return data.reduce((startingValue, item) => {
        return startingValue + item.price;
      }, 0);
    },
    // checkTitle(title) {
    //   return data.filter((item) => (item.title == title ? title : null));
    // },
    findData(title) {
      return this.data.find((data) =>
        console.log(data.title === title ? title : 'not a your Name')
      );
    },
  };
}

var movi = MovieStore(movieData);
movi.totalPrice();
movi.findData('dipak');

// console.log(movi.checkTitle('dipak'));
console.log(movi.totalPrice());
// console.log(movi.findData('dipak'));

var a = [1, 2, 3];
var sum = a.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(sum);
