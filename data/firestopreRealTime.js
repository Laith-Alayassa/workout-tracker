import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  child,
  onSnapshot,
} from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://workout-tracker-bb-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

function writeTemplateData(formInfo) {
  const db = getDatabase();
  const reference = ref(db, "users/");
  console.log("from write temp func: ===");
  console.log(formInfo);

  push(reference, userInfo);
  console.log("Done");
}

function getUserData(userId) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function writeFormData(formattedData) {
  const db = getDatabase();
  const reference = ref(db, "users/");

  console.log(formattedData);
  push(reference, formattedData);

  console.log("Done");
}

async function getFormData() {
  let exercisesPLZ = [];
  const dbRef = ref(getDatabase());
  let snapshot = await get(child(dbRef, `users/`));
  if (snapshot.exists()) {
    snapshot.forEach(function (childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      exercisesPLZ.push(childData);
    });
    return exercisesPLZ;
  } else {
    console.log("No data available");
  }

  return exercisesPLZ;
}

// async function getFormDataOnSnapshot() {
//   const db = getDatabase
//   const dbRef = ref(getDatabase());
//   let snapshot = await get(child(dbRef, `users/`));
//   if (snapshot.exists()) {
//     snapshot.forEach(function (childSnapshot) {
//       var key = childSnapshot.key;
//       var childData = childSnapshot.val();
//       exercisesPLZ.push(childData);
//     });
//     return exercisesPLZ;
//   } else {
//     console.log("No data available");
//   }

//   return exercisesPLZ;
// }

function writeUserData(userId, name, email) {
  const db = getDatabase();
  const reference = ref(db, "users/");
  const userInfo = {
    templates: {
      chestWorkout: {
        lastPerformed: "jan-20-2022",
        exercises: {
          benchPress: {
            weightPR: 220,
            repsPR: 20,
            sets: {
              1: {
                reps: 10,
                weight: 160,
              },
              2: {
                reps: 10,
                weight: 160,
              },
            },
          },
          inclineCable: {
            weightPR: 220,
            repsPR: 20,
            sets: {
              1: {
                reps: 10,
                weight: 160,
              },
              2: {
                reps: 10,
                weight: 160,
              },
            },
          },
        },
      },
      backWorkout: {
        lastPerformed: "jan-20-2022",
        exercises: {
          benchPress: {
            weightPR: 220,
            repsPR: 20,
            sets: {
              1: {
                reps: 10,
                weight: 160,
              },
              2: {
                reps: 10,
                weight: 160,
              },
            },
          },
          inclineCable: {
            weightPR: 220,
            repsPR: 20,
            sets: {
              1: {
                reps: 10,
                weight: 160,
              },
              2: {
                reps: 10,
                weight: 160,
              },
            },
          },
        },
      },
    },
  };
  push(reference, userInfo);
  //   set(ref(db, "users/" + userId), {
  //     username: name,
  //     email: email,
  //   });
  console.log("Done");
}

export {
  writeUserData,
  getUserData,
  writeTemplateData,
  writeFormData,
  getFormData,
};
