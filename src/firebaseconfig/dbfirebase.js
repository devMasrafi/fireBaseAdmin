import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebaseConfig from "./firebaseConfig";

export const app = initializeApp(firebaseConfig)
export const dbfirebase = getDatabase()