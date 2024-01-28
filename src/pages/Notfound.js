import React from 'react';

export const Notfound = () => {
  //when no route matches this component is rendered
  return (
    <div class='not-found-container'>
      <h1>404</h1>
      <h5>Page Not Found</h5>
      <p>The path requested could not be found on the server</p>
    </div>
  );
};
