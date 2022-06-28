
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, untoggle } from './buttonSlice';
import { setGif, restartGif } from '../restart-button/restartButtonSlice';
import { hide } from '../favorite-content/FavoriteDisplaySlicer';

const iconSize = 50;

function AboutIcon (props) { 
    const color = useSelector((state) => state.button.color[props.id]);
    const dispatch = useDispatch();

    const individualTogle = (id) => {
        dispatch(untoggle());
        dispatch(toggle(id));

        dispatch(hide());

        if (id === 2) {
            dispatch(restartGif());
            setTimeout(() => { dispatch(setGif()) }, 0);
        }
    }

    return (
        <span onClick={() => individualTogle(props.id)} className="hover:cursor-pointer">
            <props.icon size={iconSize} color={color}/>
        </span>
    );
}

export default AboutIcon;