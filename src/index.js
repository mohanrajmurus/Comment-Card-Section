import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Comment from './comment';
import { faker } from '@faker-js/faker';

const App = () =>{
    return (
        <div>
            <Comment time = '7.00'/>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)