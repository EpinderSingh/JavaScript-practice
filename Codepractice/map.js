const numbers = [10, 20, 30, 40, 50];

const double = numbers.map(function (n) {
  return (n = n * 2);
});
console.log(numbers);
console.log(double);
const movies = ['Mr and Mrs Kaur', 'Hello', 'Bye'];
const movie = movies.find((m) => {
  return m.includes('a');
});
console.log(movie);
