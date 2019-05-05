import React, {Fragment} from 'react';
import './styles/Displays.css';

const Display = ({list=[]}) => (
    <Fragment>
        <span>Displaying list as buttons</span>
        <br/>
        <div className='Inline'>
            {
                list.map(content => (
                    <button>{content}</button>
                ))
            }
        </div>
    </Fragment>
);

export default Display;