import React, {useContext, useState} from 'react';
import UserDataContext from '../context/userdata';
import StatisticsBox from '../components/StatisticsBox';
// import StatisticsPanel from '../components/StatisticsPanel';
import './Statistics.css'

function Statistics() {
    const userData = useContext(UserDataContext);
    return (
        <div>
            {/* <StatisticsPanel userData={userData}></StatisticsPanel> */}
            <StatisticsBox userData={userData}></StatisticsBox>
        </div>
    )
}

export default Statistics