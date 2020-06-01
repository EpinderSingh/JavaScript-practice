let subreddits = ['socccer', 'popheds', 'cring', 'books'];

for (let sub of subreddits) {
  console.log(sub.toUpperCase());
}

const magicSquare = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 1],
];
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`Sum ${row} is ${sum}`);
}
