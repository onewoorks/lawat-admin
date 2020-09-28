import React from 'react'
import axios from 'axios'

const LaporanLokasi = (props) => {
    const [lokasi, setLokasi] = React.useState([])

    React.useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_API}/lokasi/statistik-hadir`
        ).then(response=> {
            setLokasi(response.data)
        })
    },[])

    const DataLokasi = () => {
        let table_data = lokasi.map((x,key)=>{
            console.log(x)
                return (
                    <tr key={key}>
                        <td className="text-center">{key+1}</td>
                        <td>{x.lokasi}</td>
                        <td>{x.bangunan}</td>
                        <td className="text-center"></td>
                        <td className="text-center">{x.hadir_minggu_ini}</td>
                        <td className="text-center">{x.hadir_bulan_ini}</td>
                        <td className="text-center"></td>
                    </tr>
                )
            })
        return table_data
    }

    return (
        <div>
            <table className="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th>Lokasi</th>
                        <th>Bangunan Lokasi</th>
                        <th className="text-center">Hari Ini</th>
                        <th className="text-center">Minggu Ini</th>
                        <th className="text-center">Bulan Ini</th>
                        <th className="text-center">Keseluruhan</th>
                    </tr>
                </thead>
                <tbody>
                    <DataLokasi />
                </tbody>
            </table>
        </div>
    )
}

export default LaporanLokasi