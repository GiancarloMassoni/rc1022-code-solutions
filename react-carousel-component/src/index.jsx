import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const img = [
  'https://gamertweak.com/wp-content/uploads/2021/12/anti-mage-dota-2-heroes.jpg',
  'https://www.dotafire.com/images/hero/icon/alchemist.png',
  'https://www.dotafire.com/images/hero/icon/axe.png',
  'https://www.dotafire.com/images/hero/icon/faceless-void.png',
  'https://www.dotafire.com/images/hero/icon/tiny.png'
];
root.render(<Carousel images={img}/>);
