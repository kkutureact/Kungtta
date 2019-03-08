import React from 'react';
import { Route } from 'react-router-dom';
import styled, {keyframes} from "styled-components";

import Lobby from './components/Lobby/Lobby';
import NavigationBar from "./components/Header/NavigationBar";

import backgroundimage from "./assets/images/kkutu/gamebg.png";

const BackgroundScrollAnimation = keyframes`
    from {
        background-position: 0 0;
    }
    to {
        background-position: -200px -200px;
    }
`;

const Background = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: -1;

	background-size: 200px 200px;
	background-image: url(${backgroundimage});
	
	animation: ${BackgroundScrollAnimation} 4s linear infinite;
`;

export const App: React.FC = () => {
    return (
        <>
            <NavigationBar/>
            <Lobby/>
            <Background/>
        </>
    );
}

export default App;