import React from 'react';

const Display = ({list=[]}) => (
    <ul>
        {
            list.map(content => (
                <li>{content}</li>
            ))
        }
    </ul>
);

export default Display;