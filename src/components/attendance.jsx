import React from 'react'
import axios from 'axios'
import moment from 'moment'

import TableAttendance from '../components/table_attandance.jsx'

const Attendance = (props) => {
    const [theDate, setTheDate] = React.useState([])
    const [pickDate, setPickDate] = React.useState(moment().format('DD/MM/YYYY'))


    React.useEffect(()=>{
        axios.post(
            `${process.env.REACT_APP_API}/attendance/date-group/semua`,
            {
                uuid: window.location.pathname.replace('/', '')
            }
        ).then(response => setTheDate(response.data))
    },[])

    const changeTableData = (picked) => {
        setPickDate(picked)
    }

    const ListTheDate = () => {
        return theDate.map( (x, key) => {
            return (
                <li key={key} className="nav-item">
                    <div
                        onClick={() => changeTableData(moment(x.the_date).format('DD/MM/YYYY'))} 
                        className={`nav-link ${ (pickDate === moment(x.the_date).format('DD/MM/YYYY')) ? 'active' :''}`} >{moment(x.the_date).format('DD/MM/YYYY')}</div>
                </li>
            )
        })
    }
    return (
        <div>
            <div className="tabscroll">
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <div
                        onClick={() => changeTableData(moment().format('DD/MM/YYYY'))} 
                        className={`nav-link ${ (pickDate === moment().format('DD/MM/YYYY')) ? 'active' :''}`} >{moment().format('DD/MM/YYYY')}</div>
                </li>
                <ListTheDate />
            </ul>

            <TableAttendance pickedDate={pickDate} uuid={props.uuid} />
            </div>
            
        </div>
    )
}

export default Attendance
