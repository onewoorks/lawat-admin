import React from 'react'
import { useAuth0 } from '../react-auth0-spa'

const NavBar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

    let premise = props.premise
    return (
        <div>
            <nav className="navbar fixed-top navbar-expend-lg navbar-dark bg-dark ">
                <div className="navbar-brand">
                    <img
                        src="./logo192.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-2"
                        alt=""
                    />
                    Lawat Premis Covid-19
                </div>
                <div className="text-light">
                    {!isAuthenticated && (
                        <button onClick={() => loginWithRedirect({})}>
                            Log in
                        </button>
                    )}

                    {isAuthenticated && (
                        <button onClick={() => logout()}>Log out</button>
                    )}
                </div>
            </nav>

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
        </div>
    )
}

export default NavBar
