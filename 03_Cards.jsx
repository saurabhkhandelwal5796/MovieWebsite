/*
1) total 3 div banae
    ist div me all cards,className = "cards"
    2nd div me only image,className = "card","card__img"
    3rd div me title,sname,link,button , className = "card__info,card__category,
                                                card__title,"
        yeh neeche Image,Heading,Title,Link inko import kara hai, isliye inko ,
        <Imgae> aise</Imgae> tag lagake props.imgsrc lagake usekarah hai
*/



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

