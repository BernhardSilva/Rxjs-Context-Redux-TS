//Redux

import React from 'react';
import { useSelector } from 'react-redux';
import { GentlemanStore } from '../../../redux/store';


const ComponentRedux2: React.FC = () => {
    const userState = useSelector((state: ReturnType<typeof GentlemanStore.getState>) => state.user);

    return (
        <div>
             <h3>Redux user value is:</h3>
            <h4>Name: {userState.name}</h4>
            <h4>Email: {userState.email}</h4>
        </div>
    );
};

export default ComponentRedux2;