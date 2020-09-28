import React from 'react'

const PageTetapanPengguna = (props) => {
    const [daftar, setDaftar] = React.useState(false)
    const [pengguna, setPengguna ] = React.useState([])

    const batalDaftar = () => {
        setDaftar(false)
    }

    const SenaraiPengguna = (props) => {
        return (
            <div>
                <div className="text-right mb-2">
                    <div className="btn btn-primary btn-sm" onClick={()=> setDaftar(true)}>Tambah Pengguna</div>
                </div>
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th className="text-center">No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Nama Pengguna</th>
                            <th>Tindakan</th>
                        </tr>
                    </thead>
                    <tbody>
                        { (pengguna.length === 0) ? (
                            <tr>
                                <td colSpan={5}><i>Tiada nama pengguna dalam rekod</i></td>
                            </tr>
                        ): (
                            pengguna.map((x,key)=>{
                                return (
                                    <tr key={key}>
                                        <td>{key+1}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        )}
                        
                    </tbody>
                </table>
            </div>
        )
    }

    const DaftarPengguna = () => {
        return (
            <div className="card">
                <div className="card-header">Maklumat Pengguna</div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>Nama Pengguna</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Kata Laluan</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Kata Laluan Pengesahan</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group text-right">
                            <div className="btn-group">
                                <div className="btn btn-outline-secondary btn-sm" onClick={() => batalDaftar()}>Batal</div>
                                <div className="btn btn-primary btn-sm">Daftar Pengguna</div>
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
                <h1 className="h2">Tetapan Pengguna</h1>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    { (daftar) ? <DaftarPengguna /> : <SenaraiPengguna />}
                </div>
            </div>
        </div>
    )
}

export default PageTetapanPengguna