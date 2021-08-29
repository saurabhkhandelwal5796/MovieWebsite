

import React, { Component } from 'react'
import Card from "./03_Cards"; 
import Sdata from "./04_Sdata"




const App = () => {
    return (
        <>
  <h1 className = "heading_style">Best Movies.com </h1>
  
  
  {Sdata.map((element) => {
    return (
        <Card
            key = {element.id}
            imgsrc = {element.imgscr}
            title = {element.title}
            sname = {element.sname}
            link ={element.link}      
        />

    )
  })
  }
  </>

    )
}

export default App;
