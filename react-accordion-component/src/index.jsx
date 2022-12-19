import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';
const items = [
  {
    title: 'Hypertext Markup Language',
    content: 'HTML'
  },
  {
    title: 'Cascading Style Sheets',
    content: 'CSS'
  },
  {
    title: 'JavaScript',
    content: 'JS'
  }
];
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion content={items}/>);
