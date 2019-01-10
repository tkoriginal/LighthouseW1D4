function findWaldo(arr, found) {
  arr.forEach((person, index) => {
    if (person === "Waldo") {
      found(index);   // execute callback
    }
  })
}

function actionWhenFound(index) {
  let output = `Found Waldo at ${index}!`;
  console.log(output);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);