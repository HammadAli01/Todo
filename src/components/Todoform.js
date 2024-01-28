import React from 'react';

export const Todoform = ({
  //A generic component for adding and updating todos
  headerText,
  inputName,
  placeholder,
  inputChangeHandler,
  inputValue,
  error,
  handleSubmit,
  buttonText,
}) => {
  return (
    <div className='task-container'>
      <h1>{headerText}</h1>
      <div className='input-data'>
        <input
          placeholder={placeholder}
          value={inputValue}
          name={inputName}
          onChange={(e) => inputChangeHandler(e)}
        />
        <label>{error}</label>
      </div>
      <button onClick={handleSubmit}>{buttonText}</button>
    </div>
  );
};
