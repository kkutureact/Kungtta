import React from 'react';
import styled, {keyframes} from 'styled-components';
import backgroundimage from '../../images/kkutu/gamebg.png';
import logo from '../../images/kkutu/short_logo.png';
import Jjoriping from "./Jjoriping";
import ServerList from "./ServerList/ServerList";

const BackgroundScrollAnimation = keyframes`
    from {
        background-position: 0 0;
    }
    to {
        background-position: -200px -200px;
    }
`;

const Style = styled.div`
    margin-left: 350px;
    width: 1010px;
    margin-top: 50px;
    float: left;
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

const TopInfo = styled.div`
    float: left;
    width: 100%;
`

const StartBanner = styled.div`
    float: left;
    padding-left: 70px;
`;

const KKutuLogo = styled.img`
    margin-top: -20px;
`

const Title = styled.h3`
    width: 200px;
	text-align: center;
	text-shadow: 0px 0px 4px #333;
	font-weight: bold;
	font-size: 15px;
	margin: 0px;
`

export const Lobby: React.FC = () => {
    return (
        <Style>
            <br/>
            <TopInfo>
                <StartBanner>
                    <Title>글자로 놀자! 끄투온라인</Title>
                    <KKutuLogo src={logo}></KKutuLogo>
                </StartBanner>
                <Jjoriping/>
                <ServerList/>
            </TopInfo>
            <Background/>
        </Style>
    );
}

export default Lobby;