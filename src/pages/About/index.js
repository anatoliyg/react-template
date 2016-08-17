import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';
//import d3 from "d3";
//var rd3 = require('react-d3');

const listItems = [
  { title: 'Expand me', content: 'Thank you' },
  { title: 'Click me', content: 'Saved me' },
  { title: 'Tap me', content: 'Hey, watch it!' },
  { title: 'Open me', content: 'I am free' }
];


//debugger;
//console.log(rd3);

export default () => (
  <article className="home">
    <Header title="About" className="header-blue" />
    <List items={listItems} collapsible />
  </article>
);
