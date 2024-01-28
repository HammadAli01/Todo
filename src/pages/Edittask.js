import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateOneTodo } from '../features/todos/todosSlice';
import { Todoform } from '../components/Todoform';
const initialInputData = { data: '', error: null };
export const Edittask = () => {
  //Editing text of todo
  const { todoToUpdate } = useSelector((state) => state.todoReducer);
  const { id: docId } = useParams();

  const [inputData, setInputData] = useState({
    ...initialInputData,
    data: todoToUpdate,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleUpdateButton = async () => {
    if (!inputData.data.trim()) {
      setInputData({ ...inputData, error: 'Input cannot be empty' });
      return;
    }

    await dispatch(
      updateOneTodo({
        documentId: docId,
        fieldToUpdate: 'text',
        updatedData: inputData.data.trim(),
      })
    );
    setInputData(initialInputData);
    navigate('/list');
  };
  return (
    <Todoform
      headerText='Update your existing todo'
      inputName='data'
      placeholder='Ex. Shopping grocery to shopping clothes'
      inputChangeHandler={handleInputData}
      inputValue={inputData.data}
      error={inputData.error}
      handleSubmit={handleUpdateButton}
      buttonText='Update'
    />
  );
};
