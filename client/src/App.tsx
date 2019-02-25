import React from 'react';
import Lobby from './components/Lobby/Lobby';
import NavigationBar from "./components/NavigationBar/NavigationBar";

export const App: React.FC = () => {
    return (
        <>
            <NavigationBar/>
            <Lobby/>
        </>
    );
}

export default App;