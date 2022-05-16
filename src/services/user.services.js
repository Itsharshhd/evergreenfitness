import fitnessFirestore from "../firebase/config";
import app from "../firebase/config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


const userCollectionRef = collection(app.fitnessFirestore, "users");
class UserDataService {
  addUsers = (id,newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateUser = (id,userData) => {
    const userDoc = doc(app.fitnessFirestore, "users", id);
    return updateDoc(userDoc, userData);
  };

  deleteUser = (id) => {
    const userDoc = doc(app.fitnessFirestore, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(app.fitnessFirestore, "users", id);
    return getDoc(userDoc);
  };
}

export default new UserDataService();