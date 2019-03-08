import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/kkutu/short_logo.png';
import Jjoriping from "./Jjoriping";
import ServerList from "./ServerList/ServerList";
import UpdateLog from "./UpdateLog";
import Banner from "./Banner/Banner";

const Container = styled.div`
    margin: 0 auto;
    position: relative;
    max-width: 960px;
    width: 960px;
    
    margin-top: 100px;
    
    @media (max-width: 600px) {
        margin-top: 50px;
    }
`;

const Top = styled.div`
    float: left;
    width: 100%;

`;

const StartBanner = styled.div`
    float: left;
    padding-left: 70px;
`;

const KKutuLogo = styled.img`
    margin-top: -20px;
`;

const Title = styled.h3`
    width: 200px;
	text-align: center;
	text-shadow: 0px 0px 4px #333;
	font-weight: bold;
	font-size: 15px;
	margin: 0px;
`;

export const Lobby: React.FC = () => {
    return (
        <Container>
            <br/>
            <Top>
                <StartBanner>
                    <Title>글자로 놀자! 끄투온라인</Title>
                    <KKutuLogo src={logo}></KKutuLogo>
                </StartBanner>
                <Jjoriping/>
                <ServerList/>
            </Top>
            <UpdateLog/>
            <Banner/>
        </Container>
    );
}

export default Lobby;