import React from "react";
import './3.2.Keywords.css';

export default function Keywords (props) {
  return (
    <div className={props.className}>
      <h1>Keywords</h1>

      <div className='content-container'>
        {props.keywords.map((keyword,index) => {
          return <span key={`keyword-${index}`}>{keyword}</span>;
        })}
      </div>
    </div>
  )
}