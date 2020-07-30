"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

// 2. Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array.The object must
// have the same properties as the objects already in the array.Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

// addSubmission(submissions, "Kati", 100, "2020-07-29");
// console.log(submissions);

// 3. Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using
// the splice method.

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

// 4. Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
  let targetedindex = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(targetedindex, 1);
};

// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

// 5. Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index.Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise

const editSubmission = (array, index, updatedscore) => {
  array[index].score = updatedscore;
  array[index].passed = updatedscore >= 60 ? true : false;
};

// editSubmission(submissions, 0, 7);
// console.log(submissions);

// 6. Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name.Use the
// find method.

const findSubmissionByName = (array, name) => {
  let foundobject = array.find((student) => {
    return student.name === name;
  });
  return foundobject;
};

// console.log(findSubmissionByName(submissions, "Jane"));

// 7. Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score.Use the
// forEach method to loop through the whole array.

// const findLowestScore = (array) => {
//   let lowestscore = array[0];
//   array.forEach((thisobject) => {
//     if (thisobject.score < lowestscore.score) {
//       lowestscore = thisobject;
//     }
//   });
//   return lowestscore;
// };

// console.log(findLowestScore(submissions));

//alt version using ternary operator shortcut (of it statement)

const findLowestScore = (array) => {
  let lowestscore = array[0];
  array.forEach((student) => {
    student.score < lowestscore.score ? (lowestscore = student) : null;
  });
  return lowestscore;
};

// console.log(findLowestScore(submissions));

// 8. Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score.Use a for...of loop.

// const findAverageScore = (array) => {
//   let sum = 0;
//   let counter = 0;
//   for (let student of array) {
//     sum += student.score;
//     counter++;
//   }
//   return sum / counter;
// };

// alt version using .length method

const findAverageScore = (array) => {
  let sum = 0;
  for (let student of array) {
    sum += student.score;
  }
  return sum / array.length;
};

// console.log(findAverageScore(submissions));

// 9. Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method.The filter method
// should find objects in the array that have passing scores.

const filterPassing = (array) => {
  let passingStudents = array.filter((students) => {
    return students.passed === true;
  });
  return passingStudents;
};

// console.log(filterPassing(submissions));

// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method.The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  let excellentStudents = array.filter((students) => {
    return students.score >= 90;
  });
  return excellentStudents;
};

// console.log(filter90AndAbove(submissions));

// EC 1. Create a function named createRange
// ○ Parameter(s): start, end
// ○ Functionality: construct and return an array of integers starting with the start
// parameter and ending at the end parameter.e.g createRange(2, 5) returns
// [2, 3, 4, 5].

const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};

// console.log(createRange(2, 5));

// 2. Create a function named countElements
// ○ Parameter(s): array(an array of strings)
// ○ Functionality: construct and return an object with the array values as keys and
// the number of times that key appears in the array as values.e.g. \
// countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2, c: 1 }.
