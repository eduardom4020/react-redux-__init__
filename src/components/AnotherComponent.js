import React from 'react';
import DisplayContainer from './DisplayContainer';

const AnotherComponent = () => (
    <div>
        <br/>
        <br/>
        <span>Inside another component</span>
        <br/>
        <DisplayContainer display={2} />
    </div>
);

export default AnotherComponent;