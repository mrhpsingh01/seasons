import './SeasonDisplay.css';
import React from 'react';

const Spinner = (props) =>{
    return (
        <div className='ui segment'>
            <p></p>
            <div className="ui active dimmer">
                <div className="ui large text loader">{props.message}</div>;
            </div>
        </div>
    );
};

Spinner.defaultProps ={
    message : 'Loading...'
};

export default Spinner;