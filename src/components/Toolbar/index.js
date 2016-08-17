import React from 'react';
import { Link } from 'react-router';

import NavTop from 'assets/img/nav-top.png';
import NavBottom from 'assets/img/nav-bottom.png';

import './toolbar.scss';



export default () => (
  <nav className="navbar" role="navigation">
    <img className='bg-bottom'src={NavBottom} role='presentation'/>
    <img className='bg-top' src={NavTop} role='presentation'/>
    <div className='fake-clicks'>
  		<Link to="/">Home</Link>
	    <Link to="/gsgs">GSGS</Link>
	    <Link to="/gsgs/go">gsgs go</Link>
  	</div>
  </nav>
);
