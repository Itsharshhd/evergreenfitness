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


const productCollectionRef = collection(app.fitnessFirestore, "store");
class ProductDataService {
  addProduct = (newProduct) => {
    return addDoc(productCollectionRef, newProduct);
  };

  updateProduct = (id,productData) => {
    const productDoc = doc(app.fitnessFirestore, "store", id);
    return updateDoc(productDoc, productData);
  };

  deleteProduct = (id) => {
    const productDoc = doc(app.fitnessFirestore, "store", id);
    return deleteDoc(productDoc);
  };

  getAllProducts = () => {
    return getDocs(productCollectionRef);
  };

  getProduct = (id) => {
    const productDoc = doc(app.fitnessFirestore, "store", id);
    return getDoc(productDoc);
  };
}

export default new ProductDataService();