import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from 'firebase/firestore';
import { db } from './cofiguration';
const collectionRef = collection(db, 'todos');
//Service functions that interact with firebase
export const getAllTodos = async () => {
  try {
    let result = await getDocs(collectionRef);
    const dataArr = [];
    result.forEach((doc) => {
      const dataWithId = { docId: doc.id, ...doc.data() };
      dataArr.push(dataWithId);
    });

    return dataArr;
  } catch (error) {
    console.error('Error got in getting todos ', error);
    return error.message;
  }
};
export const addingTodo = async (todo) => {
  try {
    await addDoc(collectionRef, todo);
  } catch (error) {
    console.error('Error adding todo:', error);
    return error.message;
  }
};
export const deleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, 'todos', id));
  } catch (error) {
    console.error('Error deleting todo:', error);
    return error.message;
  }
};
export const updateTodo = async ({
  documentId,
  fieldToUpdate,
  updatedData,
}) => {
  try {
    return await updateDoc(doc(db, 'todos', documentId), {
      [fieldToUpdate]: updatedData,
    });
  } catch (error) {
    console.error('Error updating todo:', error);
    return error.message;
  }
};
