import React from 'react'

import LaporanLokasi from '../../../components/laporan/lokasi.jsx'

const PageLaporanLokasi = (props) => {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Laporan Lokasi</h1>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <LaporanLokasi />
                </div>
            </div>
        </div>
    )
}

export default PageLaporanLokasi