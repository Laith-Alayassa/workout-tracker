const data = {
  templateName: "Back day",
  exercise0: "First E",
  exercise1: "Second",
  exercise2: "Third",

  "reps Workout: 0, S: 0": "10",
  "reps Workout: 0, S: 1": "10",
  "reps Workout: 1, S: 0": "10",
  "reps Workout: 1, S: 1": "10",
  "reps Workout: 2, S: 0": "12",
  "reps Workout: 2, S: 1": "12",

  "weight Workout: 0, S: 0": "50",
  "weight Workout: 0, S: 1": "50",
  "weight Workout: 1, S: 0": "50",
  "weight Workout: 1, S: 1": "50",
  "weight Workout: 2, S: 0": "30",
  "weight Workout: 2, S: 1": "35",
};

// let template = {};
// let exerciseCounter = 0;
// for (const key in data) {
//   if (!key.startsWith("exercise")) {
//     //
//   }

//   let exercise = {};
//   let setCounter = 0;

//   for (const key2 in data) {
//     if (!key2.startsWith(`weight Workout: ${exerciseCounter}`)) {
//       //
//     }
//     let newSet = { [setCounter]: data[key2] };
//     exercise = { ...exercise, newSet };
//     setCounter++;
//   }
// ,
//   template = { ...template, exercise };
//   exerciseCounter++;
//   console.log("====");
// }

// console.log("====================================");
// console.log(template);
// console.log("====================================");

function fillTemplate(data) {
  const template = {};
  template.name = data.templateName;
  let exerciseCounter = 0;
  for (const key in data) {
    if (key.startsWith("exercise")) {
      repsAndSets = findSetsInfo(exerciseCounter);
      template.exercises = {
        ...template.exercises,
        [exerciseCounter]: repsAndSets,
      };
      exerciseCounter++;
    }
  }

  console.log(template);
}

function findSetsInfo(exerciseCounter) {
  numSets = findNumberOfSets(exerciseCounter, data);
  let setsObj = {};
  for (let i = 0; i < numSets; i++) {
    let set = {};

    set.reps = data[`reps Workout: ${exerciseCounter}, S: ${i}`];
    set.weight = data[`weight Workout: ${exerciseCounter}, S: ${i}`];
    setsObj = { ...setsObj, set };
  }
  return setsObj;
}

function findNumberOfSets(exerciseCounter) {
  let setsCounter = 0;
  for (let k in data) {
    if (k.startsWith(`reps Workout: ${exerciseCounter}`)) setsCounter++;
  }
  return setsCounter;
}

fillTemplate(data);
