import React from 'react';
import Link from 'gatsby-link';

import '../styles/nav.css'

const Nav = () => (
  <div className="nav">
    <div className="nav-item title">
      sage
    </div>
      <div className="nav-item">
        <Link className="nav-link" to="/meal-plan">
          meal plan
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/grocery-list">
          grocery list
        </Link>
      </div>
      <div className="nav-item">
        <Link className="nav-link" to="/recipes">
          recipes
        </Link>
      </div>
  </div>
);

export default Nav;