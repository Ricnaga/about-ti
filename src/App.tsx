import React, {
    useEffect,
    useState,
    useCallback
} from 'react';

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Customers from './pages/Customers'

const App:React.FC = () => {
    const [ pages, setPages] = useState<JSX.Element>();

    const loadPages  = useCallback( (reactTag: JSX.Element) => {
        setPages(reactTag)
    }, [])

    useEffect(() => {
        setPages(<Dashboard/>)
    }, [])

    return (
        <>
        <button id="Dashboard" onClick={() => loadPages(<Dashboard />)}>Dashboard</button>
        <button id="Users" onClick={() => loadPages(<Users />)}>Users</button>
        <button id="Customers" onClick={() => loadPages(<Customers />)}>Customers</button>
        {pages}
        </>
    )
}

export default App;
