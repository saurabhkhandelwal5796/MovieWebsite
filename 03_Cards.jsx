



import React, { Component } from 'react';
import Image from './06_Image';
import Heading from './05_Heading';
import Title from './07_Title';
import Link from './08_Link'

function Card(props) {
    // console.log(props);
    return (
        <>
            
        <div className="card">
        <Image imgsrc =  {props.imgsrc}/>
        <div className="card__info">
        <Title title = {props.title}/>
        <Heading sname = {props.sname}/>
        <Link link = {props.link}/>

        </div>
        </div>
           



        
        </>

    );
}

export default Card;

