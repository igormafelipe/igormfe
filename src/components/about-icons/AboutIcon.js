
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, untoggle } from './buttonSlice';
import { setGif, restartGif } from '../restart-button/restartButtonSlice';
import { hide } from '../favorite-content/FavoriteDisplaySlicer';
import classnames from 'classnames/bind';

function AboutIcon (props) {
    const isSelected = useSelector((state) => state.button.divState[props.id]);
    const dispatch = useDispatch();

    const individualTogle = (id) => {
        dispatch(untoggle());
        dispatch(toggle(id));

        dispatch(hide());

        if (id === 3) {
            console.log("her");
            dispatch(restartGif());
            setTimeout(() => { dispatch(setGif()) }, 0);
        }
    }

    const iconClass = classnames(
        'h-11 w-11 hover:stroke-yellow-300 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14',
        {"text-yellow-300"  : isSelected === "selected"},
        {"text-black stroke-white"    : isSelected === "unselected"},
    )

    return (
        <span className="hover:cursor-pointer" onClick={() => individualTogle(props.id)}>
            <props.icon className={iconClass}/>
        </span>
    );
}

export default AboutIcon;