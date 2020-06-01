import React from 'react'
import axios from 'axios'
import { useAuth0 } from './react-auth0-spa'

import Home from './pages/public/index.jsx'
import ProtectedHome from './pages/protected/Index.jsx'

function App() {
    const { isAuthenticated, loginWithRedirect, loading} = useAuth0()

    if (loading) {
        return <div>Loading...</div>
    }

    const Public = () => <Home />

    return (
        <div>
            {!isAuthenticated && (
                <div>
                    <Public />
                    <button onClick={() => loginWithRedirect({})}>
                        Log in
                    </button>
                </div>
            )}

            {isAuthenticated && <ProtectedHome />}
        </div>
    )
}

export default App
