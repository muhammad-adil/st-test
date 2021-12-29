import React from 'react';
import Card from '../components/Card.js';
import ActionHeader from '../components/ActionHeader.js';


function Articles() {
  return (
    <div>
      <ActionHeader />
      <Card/>
    </div>
    // <div className='articles container'>
    //   <h2>Dashboard <span>&gt;</span> Articles</h2>
    //   <Article/>

    // </div>
  );
}

export default Articles;
