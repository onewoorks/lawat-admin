import React from 'react'
import Attendance from '../../components/attendance.jsx'
import DashboardLocationStat from '../../components/dashboard/location_stats.jsx'

const Dashboard = (props) => {


    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                        <button className="btn btn-sm btn-outline-secondary">
                            Share
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                            Export
                        </button>
                    </div>
                    <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-5">
                    <DashboardLocationStat />
                </div>
                <div className="col-7">
                    <Attendance uuid={props.premise.uuid} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
