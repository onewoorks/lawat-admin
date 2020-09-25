import React from 'react'
import PageHeader from '../../components/PageHeader.jsx'
import Dashboard from '../dashboard.jsx'

const Home = () => {
    let uuid = window.location.pathname.replace('/', '')
    let premise = {
        "uuid": uuid,
        "image": "",
        "nama_cawangan": "HOSPITAL KAJANG"
    }
    return (
        <div>
            <PageHeader premise={premise} />
            <Dashboard premise={premise} />
        </div>
        
    )
}

export default Home