import React from 'react';
import Header from 'components/Header';

// const listItems = [
//   { title: 'One' },
//   { title: 'Two' },
//   { title: 'Three' },
//   { title: 'Four' }
// ];
//<List items={listItems} />

export default (props) => (
  <article className="women">
    <Header title="gsgs wrapper component" className="header-red" />
    <h1>needs to spit out children</h1>
    {props.children}
  </article>
);
