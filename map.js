var words = ["ground", "control", "to", "major", "tom"];

let length = map(words, function(word) {
  return word.length;
});

let UpperCase = map(words, function(word) {
  return word.toUpperCase();
});

let reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

function map (array, callback) {
  let output = []
  array.forEach (item => {
    output.push(callback(item));
  })
  return output;
}

console.log(length)
console.log(UpperCase)
console.log(reverse)