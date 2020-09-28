import React from 'react'

const PageHeader = (props) => {
    // let premise = props.premise
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <div className="navbar-brand col-sm-3 col-md-2 mr-0">Hospital Kajang</div>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <div className="nav-link">Daftar Keluar</div>
                </li>
            </ul>
        </nav>  
    )
}

export default PageHeader
