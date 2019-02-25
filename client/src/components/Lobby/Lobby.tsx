import React from 'react';
import backgroundimage from '../../images/kkutu/gamebg.png';
import styled, { keyframes } from 'styled-components';

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

export const Lobby: React.FC = () => {
    return (
        <>
            <Background/>
        </>
    );
}

export default Lobby;