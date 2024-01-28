import React from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleOneTodo,
  setTodoToUpdate,
  deleteOneTodo,
} from '../features/todos/todosSlice';
import { useNavigate } from 'react-router-dom';
export const Todoitem = ({ task: { docId, text, isCompleted } }) => {
  // Reuseable component to render the todo in listing page
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = (docId) => {
    dispatch(setTodoToUpdate(text));
    navigate(`/edit/${docId}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteOneTodo(id));
  };
  return (
    <div className='task'>
      <div className='task-start-container'>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={() =>
            dispatch(
              toggleOneTodo({
                documentId: docId,
                fieldToUpdate: 'isCompleted',
                updatedData: !isCompleted,
              })
            )
          }
        />
        <label className={isCompleted ? 'strikethrough-text' : null}>
          {text}
        </label>
      </div>
      <div className='task-end-container'>
        <button onClick={() => handleEdit(docId)}>Edit</button>
        <button onClick={() => handleDelete(docId)}>Delete</button>
      </div>
    </div>
  );
};
