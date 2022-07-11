
import React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames/bind';

function AboutDiv (props) { 
    const divState = useSelector((state) => state.button.divState[props.id]);
    console.log(divState);

    const divClasses = classnames(
        'h-full w-2/3 absolute top-0 transform transition duration-300 2xl:w-2/3',
        {"opacity-100"  : divState === "selected"},
        {"opacity-0 translate-x-full"    : divState === "unselected"},
        props.color,
    )

    return (
        <div className={divClasses}>
            {props.content}
        </div>
    );
}

export default AboutDiv;