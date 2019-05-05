import React from 'react';
import './App.css';

import Display from './components/Display';
import ListForm from './components/ListForm';

const App = () => (
    <div className='App'>
        <Display 
            list={['A', 'React', 'Redux', 'Class']}
        />
        <ListForm />
    </div>
);

export default App;
