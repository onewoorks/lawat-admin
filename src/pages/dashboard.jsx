import React from 'react'
import Attendance from '../components/attendance.jsx'

const Dashboard = (props) => {
    return (
        <div>
            <Attendance uuid={props.premise.uuid} />
        </div>
    )
}

export default Dashboard
