import React from 'react'

const PageHeader = (props) => {
    let premise = props.premise
    return (
        <div className="jumbotron" style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col-2">
                        <img
                            src={premise.image}
                            alt={premise.nama_cawangan}
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-9">
                        <h1 className="display-4">
                            {premise.nama_cawangan} - {premise.cawangan_induk}
                        </h1>
                        <div className="lead">
                            <div>{premise.alamat}</div>
                            <div>{premise.no_telefon}</div>
                            <div>{premise.maklumat_tambahan}</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PageHeader