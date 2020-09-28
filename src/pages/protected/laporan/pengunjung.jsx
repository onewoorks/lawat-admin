import React from 'react'

import Attendance from '../../../components/attendance.jsx'

const PageLaporanPengungunjung = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Laporan Pengunjung</h1>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <Attendance />
                </div>
            </div>
        </div>
    )
}

export default PageLaporanPengungunjung