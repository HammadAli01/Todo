import React, { useState } from 'react';
import { Todoform } from '../components/Todoform';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from '../features/todos/todosSlice';
const initialInputData = { data: '', error: null };
export const Addtask = () => {
  //for adding a new todo
  const navigate = useNavigate();
  const [inputData, setInputData] = useState(initialInputData);
  const dispatch = useDispatch();
  const handleInputData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleAddButton = () => {
    if (!inputData.data.trim()) {
      setInputData({ ...inputData, error: 'Input cannot be empty' });
      return;
    }
    dispatch(addTodo({ text: inputData.data.trim(), isCompleted: false }));
    setInputData(initialInputData);
    navigate('/list');
  };
  return (
    <Todoform
      headerText='Add your new todo'
      inputName='data'
      placeholder='Ex. Shopping'
      inputChangeHandler={handleInputData}
      inputValue={inputData.data}
      error={inputData.error}
      handleSubmit={handleAddButton}
      buttonText='Add'
    />
  );
};
