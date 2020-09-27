import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = (props) => {
    return (
        <div className="sidebar-sticky h-100">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link to="/">
                        <div className="nav-link active">
                            <span data-feather="home"></span>
                            Dashboard <span className="sr-only">(current)</span>
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/">
                        <div className="nav-link">
                            <span data-feather="file"></span>
                            Lokasi
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/">
                        <div className="nav-link">
                            <span data-feather="users"></span>
                            Pengunjung
                        </div>
                    </Link>
                </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Laporan</span>
                <div className="d-flex align-items-center text-muted">
                    <span data-feather="plus-circle"></span>
                </div>
            </h6>
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <Link to="/">
                        <div className="nav-link">
                            <span data-feather="file-text"></span>
                            Bulan Ini
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/">
                        <div className="nav-link">
                            <span data-feather="file-text"></span>
                            Mengikut Lokasi
                        </div>
                    </Link>
                </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Tetapan</span>
                <div className="d-flex align-items-center text-muted">
                    <span data-feather="plus-circle"></span>
                </div>
            </h6>
            <ul className="nav flex-column mb-2">
                <li className="nav-item">
                    <Link to="/">
                        <div className="nav-link">
                            <span data-feather="file-text"></span>
                            Pengguna
                        </div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tetapan/lokasi">
                        <div className="nav-link">
                            <span data-feather="file-text"></span>
                            Lokasi
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu
