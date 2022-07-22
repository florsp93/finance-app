import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  getDocs,
  collection,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaBivatAhksSsXjA5Nc5juKlJrGMRy2JE",
  authDomain: "finance-app-d3e5a.firebaseapp.com",
  projectId: "finance-app-d3e5a",
  storageBucket: "finance-app-d3e5a.appspot.com",
  messagingSenderId: "65297684041",
  appId: "1:65297684041:web:bc7c414547549dab21d198",
  measurementId: "G-0Z97BHB041",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();

export const createOrUpdateData = async (itemToAdd) => {
  console.log(itemToAdd);
  const docRef = await addDoc(collection(db, "flor"), itemToAdd); //genera automaticamente el ID del documento
  console.log("Document written with ID: ", docRef.id);
};

export const getItemsFromDatabase = async () => {
  const collectionRef = collection(db, "flor");
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    console.log(doc.id);
  });
};
