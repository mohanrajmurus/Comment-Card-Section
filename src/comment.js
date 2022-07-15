import React from 'react';
import './style.css';
import { faker } from '@faker-js/faker';


const Comment = (props) => {
    return (
        <div className='comment'>
            <div className='avatar'>
                <img src = {faker.image.avatar()} alt = {faker.name.firstName()}></img>
            </div>
            <div className='comment-details'>
                <div className='name-time'>
                    <div className='name'>{faker.name.firstName()}</div>
                    <div className='time'>Today,{props.time}</div>
                </div>
                <div className='text'>
                    <p>{faker.random.words(6)}</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;