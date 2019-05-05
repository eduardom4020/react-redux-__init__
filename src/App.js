import React from 'react';
import './App.css';

import Display from './components/Display';
import DisplayContainer from './components/DisplayContainer';
import ListForm from './components/ListForm';

const App = () => (
    <div className='App'>
        <span>Display View Component</span>
        <Display />
        <span>Display Container Component</span>
        <DisplayContainer />
        <ListForm />
    </div>
);

export default App;
