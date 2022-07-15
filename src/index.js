import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Comment from './comment';
import { faker } from '@faker-js/faker';

const App = () =>{
    return (
        <div className='container'>
            <Comment time = '03.00 AM'/>
            <Comment time = '12.30 PM'/>
            <Comment time = '03.25 PM'/>
            <Comment time = '06.10 PM'/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)