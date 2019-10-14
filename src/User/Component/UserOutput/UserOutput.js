import React, { useState } from 'react';
import './UserOutput.css';
import UserInput from '../UserInput/UserInput';

const userOutput = (props) => {
    
    const [userState, setUserState] = useState({
        user: props.user,
        untouchedStyle: true
    });

    const nameChangedHandler = (event) => {
        setUserState({
            user: {
                quote: userState.user.quote,
                name: event.target.value
            }
        });
    }

    const untouchedStyle = {
        backgroundColor: '#D4AF37',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://ei.marketwatch.com/Multimedia/2017/09/18/Photos/ZH/MW-FU512_gold_20170918131456_ZH.jpg?uuid=e4eb3b3e-9c94-11e7-ad57-9c8e992d421e")'
    };

    const getStyle = () => {
        return (userState.untouchedStyle) ? untouchedStyle : {};
    };

    return (
        <div className="User" style={getStyle()}>
            <p>"{userState.user.quote}"</p>
            <p>{userState.user.name}</p>
            <UserInput
                oldName={props.user.name}
                name={userState.user.name}
                changed={nameChangedHandler} />
        </div>
    )
}


export default userOutput;