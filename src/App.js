import React from 'react'
// import axios from 'axios'
// import { useAuth0 } from './react-auth0-spa'
import { BrowserRouter as Router } from 'react-router-dom'

// import Home from './pages/protected/index.jsx'
import ProtectedHome from './pages/protected/index.jsx'
import CetakLokasi from './pages/protected/cetak/lokasi.jsx'

import { Switch, Route } from 'react-router-dom'

function App() {
    // const { isAuthenticated, loginWithRedirect, loading} = useAuth0()

    // if (loading) {
    //     return <div>Loading...</div>
    // }
    // const Public = () => <Home />
    return (
                <div className="">
                    <Router>
                        <Switch>
                            <Route path="/cetak/:module/:id" component={CetakLokasi} /> 
                            <Route path="/" component={ProtectedHome} />
                        </Switch>
                    </Router>
                    
                </div>
    )
    // return (
    //     <div>
    //         {!isAuthenticated && (
    //             <div>
    //                 <Public />
    //                 <button onClick={() => loginWithRedirect({})}>
    //                     Log in
    //                 </button>
    //             </div>
    //         )}

    //         {isAuthenticated && <ProtectedHome />}
    //     </div>
    // )
}

export default App
