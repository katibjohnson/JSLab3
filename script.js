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

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

const deleteSubmissionByName = (array, name) => {
  let targetedindex = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(targetedindex, 1);
};

// deleteSubmissionByName(submissions, "Jane");
// console.log(submissions);

// Declare a function named editSubmission
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

// Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name.Use the
// find method.

const findSubmissionByName = (array, name) => {
  let foundobject = array.find((student) => {
    return student.name === name;
  });
  return foundobject;
};

console.log(findSubmissionByName(submissions, "Jane"));

// Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score.Use the
// forEach method to loop through the whole array.

const findLowestScore = (array) => {
  let lowestscore = array[0];
  array.forEach((thisobject) => {
    if (thisobject.score < lowestscore.score) {
      lowestscore = thisobject;
    }
  });
  return lowestscore;
};

console.log(findLowestScore(submissions));

// Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score.Use a for...of loop.

const findAverageScore = (array) => {
  let sum = 0;
  let counter = 0;
  for (let item of array) {
    sum += item.score;
    counter++;
  }
  return sum / counter;
};

console.log(findAverageScore(submissions));

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

console.log(filterPassing(submissions));

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

console.log(filter90AndAbove(submissions));

// Create a function named createRange
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

console.log(createRange(2, 5));

// 2. Create a function named countElements
// ○ Parameter(s): array(an array of strings)
// ○ Functionality: construct and return an object with the array values as keys and
// the number of times that key appears in the array as values.e.g. \
// countElements(['a', 'b', 'a', 'c', 'a', 'b']) returns { a: 3, b: 2, c: 1 }.
