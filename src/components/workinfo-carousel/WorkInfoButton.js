import React from 'react';
import { useDispatch } from 'react-redux';
import { togle, untogle } from './WorkInfoSlicer';
import { useSelector } from 'react-redux';

function WorkInfoButton (props) { 
    const isTogled = useSelector((state) => state.workInfo.isTogled);
    const btnClass = isTogled ? useSelector((state) => state.workInfo.togledClass) : 
                                useSelector((state) => state.workInfo.untogledClass);
    const dispatch = useDispatch();
    const setButton = () => {
        dispatch(untogle());
        dispatch(togle(props.id));
    }
    return (
        <div className={btnClass}
            onClick={setButton}>
            <h1 className="text-center font-bold text-white text-2xl group-hover:text-black">
                {props.text}
            </h1>
        </div>
    );
}

export default WorkInfoButton;