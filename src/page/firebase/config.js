// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7f2sgLfkX862u00pJmTnPbkSXLR5Wc6c",
  authDomain: "project1-69a6e.firebaseapp.com",
  projectId: "project1-69a6e",
  storageBucket: "project1-69a6e.appspot.com",
  messagingSenderId: "196452320617",
  appId: "1:196452320617:web:55a9f256f3c1ef831ce9f8",
  measurementId: "G-STWQB3MG4Q"
};

// import { collection, getDocs } from "firebase/firestore";

// const allBlogs = await getDocs(collection(db, "blog"));
// allBlogs.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)


export default db;
 
