import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJsNq_AFu6xQd88U9ZK5xScs86Bg5FZGE",
  authDomain: "webportfolio-8935c.firebaseapp.com",
  projectId: "webportfolio-8935c",
  storageBucket: "webportfolio-8935c.appspot.com",
  messagingSenderId: "33789391548",
  appId: "1:33789391548:web:9d97d2f2568780116c56b9",
  measurementId: "G-ZW55D781RZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyDJsNq_AFu6xQd88U9ZK5xScs86Bg5FZGE",
//   authDomain: "webportfolio-8935c.firebaseapp.com",
//   projectId: "webportfolio-8935c",
//   storageBucket: "webportfolio-8935c.appspot.com",
//   messagingSenderId: "33789391548",
//   appId: "1:33789391548:web:9d97d2f2568780116c56b9",
//   measurementId: "G-ZW55D781RZ",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
