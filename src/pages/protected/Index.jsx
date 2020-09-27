import React from 'react'
import PageHeader from '../../components/PageHeader.jsx'
import SideMenu from '../../components/sidemenu.jsx'
import Dashboard from './Dashboard.jsx'
import { Switch, Route } from 'react-router-dom'

import PageTetapanLokasi from './tetapan/lokasi.jsx'

// import PageTetapanLokasi from ''

const Home = () => {
    let uuid = window.location.pathname.replace('/', '')
    let premise = {
        "uuid": uuid,
        "image": "",
        "nama_cawangan": "HOSPITAL KAJANG"
    }
    return (
        <div>
            
            <div className="container-fluid">
            <PageHeader premise={premise} />
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <SideMenu />
                    </nav>
                    <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4 mt-2" >
                        <Switch>
                            <Route exact path='/'><Dashboard premise={premise} /></Route>
                            <Route exact path='/tetapan/lokasi' component={PageTetapanLokasi} />
                        </Switch>
                    </div>
                </div>
            </div>  
        </div>
        
    )
}

export default Home