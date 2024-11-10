import React from 'react';

const Card = ({coffee}) => {
    const {name, image,origin,category,type,description,making_process,rating,popularity } = coffee
    
    return (
        <div className=''>
           <img src={image} alt="" />
        </div>
    );
};

export default Card;