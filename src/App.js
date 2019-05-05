import React from 'react';
import './App.css';

import DisplayContainer from './components/DisplayContainer';
import ListFormContainer from './components/ListFormContainer';
import AnotherComponent from './components/AnotherComponent';

const App = () => (
    <div className='App'>
        <DisplayContainer display={2} />
        <DisplayContainer />
        <ListFormContainer />
        <AnotherComponent />
    </div>
);

export default App;
