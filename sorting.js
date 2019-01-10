var array = [10, 2, 5, 1, 9];
console.log(array.sort((a,b) => a-b));

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students
.sort((a,b) => a.name > b.name )
.sort ((a, b) => {
  if(a.name === b.name){
    return  b.age - a.age
  }
})

console.log(students)