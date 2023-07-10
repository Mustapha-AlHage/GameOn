import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDOBysCgGekFr0qqtZAbgfLs3Q5-qgYPSg",
  authDomain: "gameon-e9da9.firebaseapp.com",
  databaseURL: "https://gameon-e9da9-default-rtdb.firebaseio.com",
  projectId: "gameon-e9da9",
  storageBucket: "gameon-e9da9.appspot.com",
  messagingSenderId: "94833479137",
  appId: "1:94833479137:web:2b20396567700240fa96a0",
  measurementId: "G-0BVC6T0ZKG",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
