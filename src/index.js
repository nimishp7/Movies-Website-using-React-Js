import React from "react";
import  ReactDOM  from "react-dom";
import "./Cards";
import Cards from "./Cards";
import './index.css';
import Sdata from './Sdata';

function ncard(val){
  return(
    <Cards 
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
}
ReactDOM.render(
  <>
  <h1 className="heading">List of top five Netflix movies</h1>
 
 
  {Sdata.map(ncard)};
  </>,document.getElementById('root')
);
