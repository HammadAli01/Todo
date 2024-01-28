import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todoitem } from '../components/Todoitem';
import { getTodos } from '../features/todos/todosSlice';
export const Listing = () => {
  // rendering all todos
  const todos = useSelector((state) => state.todoReducer.todos);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true before fetching
        setLoading(true);
        await dispatch(getTodos());
        // Set loading to false after fetching
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todos: ', error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className='listing'>
      <h1>Tasks</h1>
      <div className='list'>
        {loading ? (
          <p className='loading-text'>Loading Todos...</p>
        ) : // Display todos if not loading
        todos?.length > 0 ? (
          todos.map((todo, index) => <Todoitem task={todo} key={index} />)
        ) : (
          <p>Kindly add some todos first</p>
        )}
      </div>
    </div>
  );
};
