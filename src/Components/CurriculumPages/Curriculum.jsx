import React from 'react';
import malik from '../../Files/Annotation.png';
import './Curriculum.css';

function MonCV() {
  return (
    <div className="Cv_Page">
      <h1 className='Cv_Title'>Curriculum Vitae</h1>
      <img className="page_cv" src={malik} alt="malik"/>
    </div>
  )
}

export default MonCV;