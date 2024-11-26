import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db } from "../firebase";
  import { User } from "../types/User";
  
  // Collection reference
  const userCollection = collection(db, "users");
  
  // Create
  export const createUser = async (user: User): Promise<void> => {
    await addDoc(userCollection, user);
  };
  
  // Read
  export const getUsers = async (): Promise<User[]> => {
    const data = await getDocs(userCollection);
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as User[];
  };
  
  // Update
  export const updateUser = async (id: string, user: Partial<User>): Promise<void> => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, user);
  };
  
  // Delete
  export const deleteUser = async (id: string): Promise<void> => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  