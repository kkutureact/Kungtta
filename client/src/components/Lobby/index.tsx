import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/kkutu/short_logo.png';
import Jjoriping from './Jjoriping';
import ServerList from './ServerList';
import UpdateLog from './UpdateLog';
import Banner from './Banner';
import Container from '../../utils/Container';

const BoxStyle = styled.div`
    margin-top: 100px;

    @media (max-width: 600px) {
        margin-top: 50px;
    }
`;

const TopStyle = styled.div`
    float: left;
    width: 100%;
`;

const StartBannerStyle = styled.div`
    float: left;
    padding-left: 70px;
`;

const KKutuLogoStyle = styled.img`
    margin-top: -20px;
`;

const TitleStyle = styled.h3`
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
            <BoxStyle>
                <br/>
                <TopStyle>
                    <StartBannerStyle>
                        <TitleStyle>쿵따 Kungtta</TitleStyle>
                        <KKutuLogoStyle src={logo}/>
                    </StartBannerStyle>
                    <Jjoriping/>
                    <ServerList/>
                </TopStyle>
                <UpdateLog/>
                <Banner/>
            </BoxStyle>
        </Container>
    );
};

export default Lobby;