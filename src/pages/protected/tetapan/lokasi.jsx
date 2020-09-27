import React from 'react'
import axios from 'axios'

const PageTetapanLokasi = (props) => {
    const [lokasi, setLokasi] = React.useState([])
    const [tambahLokasi, setTambahLokasi] = React.useState(false)
    const [ubahLokasi, setUbahLokasi ] = React.useState({})
    let form_lokasi = []

    React.useEffect(() => {
        axios.get(`http://localhost:3009/lokasi/hkj`).then((response) => {
            setLokasi(response.data)
        })
    }, [])

    const batal_daftar = () => {
        form_lokasi = []
        setUbahLokasi({})
        setTambahLokasi(false)
    }

    const confirm_daftar = () => {
        axios.post(`http://localhost:3009/lokasi/add-new`, {
            nama_cawangan: form_lokasi.nama_cawangan,
            alamat: form_lokasi.alamat,
            no_telefon: form_lokasi.no_telefon,
            image: '',
            cawangan_induk: 'hkj',
        }).then(response=> {
            window.location.reload()
        })
    }

    const confirm_ubah = () => {
        axios.put(`http://localhost:3009/lokasi/ubah`, {
            nama_cawangan: (typeof form_lokasi.nama_cawangan === 'undefined') ? ubahLokasi.nama_cawangan : form_lokasi.nama_cawangan ,
            alamat: (typeof form_lokasi.alamat === 'undefined') ? ubahLokasi.alamat : form_lokasi.alamat,
            no_telefon: (typeof form_lokasi.no_telefon === 'undefined') ? ubahLokasi.no_telefon : form_lokasi.no_telefon,
            uuid: ubahLokasi.uuid
        }).then(response=>{
            window.location.reload()
        })
    }

    const ubah_premise = (premise) => {
        form_lokasi = {
            nama_cawangan: premise.nama_cawangan,
            alamat: premise.alamat,
            no_telefon: premise.no_telefon,
            uuid: premise.uuid
        }
        setUbahLokasi(form_lokasi)
        setTambahLokasi(true)
    }

    const maklumat_lokasi = (input) => {
        let key = Object.keys(input)
        form_lokasi[key] = input[key]
    }

    const SenaraiLokasi = () => {
        return (
            <div>
                <div className="text-right">
                    <div
                        className="btn btn-primary btn-sm mb-2"
                        onClick={() => setTambahLokasi(true)}
                    >
                        Tambah Lokasi
                    </div>
                </div>

                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Lokasi</th>
                            <th>Detail Lokasi</th>
                            <th>Tindakan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lokasi.map((x, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{x.nama_cawangan}</td>
                                    <td>{x.alamat}</td>
                                    <td className="text-center">
                                        <div className="btn-group">
                                            <div className="btn btn-outline-secondary btn-sm">
                                                <a
                                                    href={`/cetak/lokasi/${x.uuid}`}
                                                    rel="noopener noreferrer"
                                                    target={'_blank'}
                                                >
                                                    Cetak QR
                                                </a>
                                            </div>
                                            <div className="btn btn-outline-secondary btn-sm"
                                            onClick={()=> ubah_premise(x)}>
                                                Ubah
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    const FormDaftar = () => {
        console.log(ubahLokasi)
        return (
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Nama Lokasi</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(input) =>
                                        maklumat_lokasi({
                                            nama_cawangan: input.target.value,
                                        })
                                    }
                                    defaultValue={ubahLokasi.nama_cawangan}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>
                                Lokasi <i>(Nama Bangunan)</i>
                            </label>
                            <div>
                                <textarea
                                    rows={3}
                                    className="form-control"
                                    onChange={(input) =>
                                        maklumat_lokasi({
                                            alamat: input.target.value,
                                        })
                                    }
                                    defaultValue={ubahLokasi.alamat}
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>No Telefon</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(input) =>
                                        maklumat_lokasi({
                                            no_telefon: input.target.value,
                                        })
                                    }
                                    defaultValue={ubahLokasi.no_telefon}
                                />
                            </div>
                        </div>

                        <div className="form-group text-right">
                            <div className="btn-group btn-group-sm">
                                <div className="btn btn-outline-secondary"
                                onClick={()=> batal_daftar()}>
                                    Batal
                                </div>
                                { (typeof ubahLokasi.uuid === 'undefined') ? (
                                    <div
                                    className="btn btn-primary"
                                    onClick={() => confirm_daftar()}
                                >
                                    Daftar Lokasi
                                </div>
                                ) : (
                                    <div className="btn btn-warning" onClick={() => confirm_ubah()}>Ubah</div>
                                 ) }
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Tetapan Lokasi</h1>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {tambahLokasi ? <FormDaftar /> : <SenaraiLokasi />}
                </div>
            </div>
        </div>
    )
}

export default PageTetapanLokasi
