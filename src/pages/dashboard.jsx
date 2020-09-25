import React from 'react'
import Attendance from '../components/attendance.jsx'
import DashboardLocationStat from '../components/dashboard/location_stats.jsx'

const Dashboard = (props) => {
    return (
        <div className='row'>
            <div className='col-5'>
                <DashboardLocationStat />
            </div>
            <div className='col-7'>
                <Attendance uuid={props.premise.uuid} />
            </div>
            
        </div>
    )
}

export default Dashboard
