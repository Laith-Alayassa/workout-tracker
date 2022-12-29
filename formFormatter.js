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

function formatFormForFirebaseUpload(data) {
  function findNumberOfSets(exerciseCounter) {
    let setsCounter = 0;
    for (let k in data) {
      if (k.startsWith(`reps Workout: ${exerciseCounter}`)) setsCounter++;
    }
    return setsCounter;
  }

  function findSetsInfo(exerciseCounter) {
    numSets = findNumberOfSets(exerciseCounter, data);
    let setsObj = {};
    for (let i = 0; i < numSets; i++) {
      let set = {};

      set.reps = data[`reps Workout: ${exerciseCounter}, S: ${i}`];
      set.weight = data[`weight Workout: ${exerciseCounter}, S: ${i}`];
      setsObj[i] = set;
    }
    return setsObj;
  }

  const template = {};
  data.templateName ? (template.name = data.templateName) : "";
  template.lastPerformed = new Date().toLocaleDateString();
  let exerciseCounter = 0;
  for (const key in data) {
    if (key.startsWith("exercise")) {
      let exercise = {};
      repsAndSets = findSetsInfo(exerciseCounter);
      exercise.name = data[key];
      exercise.sets = repsAndSets;
      template.exercises = {
        ...template.exercises,
        [exerciseCounter]: { exercise },
      };
      exerciseCounter++;
    }
  }

  return template;
}

export { formatFormForFirebaseUpload, data };
