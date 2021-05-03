import React, {
    useEffect,
    useState
} from 'react';
import Dashboard from './pages/Dashboard';
import Development from './pages/Development';
import Network from './pages/Network';
import GlobalStyle, { Buttons } from './styles/global';


export default function App() {
    const [pages, setPages] = useState<JSX.Element>();

    function loadPages(reactTag: JSX.Element) {
        setPages(reactTag)
    }

    useEffect(() => {
        setPages(<Dashboard />)
    }, [])

    return (
        <>
            <Buttons>
                <button id="Dashboard" onClick={() => loadPages(<Dashboard />)}>Dashboard</button>
                <button id="Development" onClick={() => loadPages(<Development />)}>Development</button>
                <button id="Network" onClick={() => loadPages(<Network />)}>Network</button>
            </Buttons>
            {pages}
            <GlobalStyle />
        </>
    )
}


