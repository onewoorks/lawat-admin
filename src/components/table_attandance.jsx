import React from 'react'
import axios from 'axios'
import moment from 'moment'

const TableAttendance = (props) => {
    let pickedDate = props.pickedDate.split('/')
    let formatingDate =
        pickedDate[2] + '-' + pickedDate[1] + '-' + pickedDate[0]
    const [listAttendance, setListAttendance] = React.useState([])
    React.useEffect(() => {
        let premise_uuid = window.location.pathname.replace('/', '')
        axios
            .post(`${process.env.REACT_APP_API}/attendance/list`, {
                uuid: premise_uuid,
                tarikh: formatingDate,
            })
            .then((response) => setListAttendance(response.data))
    }, [formatingDate])

    const Rows = () => {
        return listAttendance.map((x, key) => {
            return (
                <tr key={key}>
                    <td className="text-center">{key + 1}</td>
                    <td className="text-center">
                        {moment(x.datetime).format('DD/MM/YYYY')}
                    </td>
                    <td className="text-center">
                        {moment(x.datetime).format('h:m A')}
                    </td>
                    <td className="text-uppercase">
                        {x.attendee_payloads.nama_penuh}
                    </td>
                    <td>{x.attendee_payloads.no_telefon}</td>
                    <td className="text-center">
                        {x.attendee_payloads.bacaan_suhu}
                    </td>
                </tr>
            )
        })
    }

    const EmptyRows = () => {
        return (
            <tr>
                <td colSpan="6" className="text-center">
                    <img src="./logo192.png" alt="lawat" />
                    <div className="mb-5">Tiada kehadiran hari ini {props.pickedDate}</div>
                </td>
            </tr>
        )
    }
    return (
        <div>
            <table className="table table-bordered table-sm">
                <caption style={{ display: 'none' }}>Senarai kehadiran</caption>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Tarikh</th>
                        <th>Waktu</th>
                        <th>Nama</th>
                        <th>No Telefon</th>
                        <th>Bacaan Suhu</th>
                    </tr>
                </thead>
                <tbody>
                    {listAttendance.length > 0 ? <Rows /> : <EmptyRows />}
                </tbody>
            </table>
        </div>
    )
}

export default TableAttendance
