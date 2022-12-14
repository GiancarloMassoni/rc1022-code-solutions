import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>{props.name}</button>;

}

const clickMeBtn = <CustomButton name="Click Me!" />;

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(clickMeBtn);
