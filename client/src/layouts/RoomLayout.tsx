import React, {useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import backgroundimage from '../assets/images/kkutu/gamebg.png';
import Container from '../utils/Container';
import UserList from '../components/Room/RoomBoxes/UserList/UserList';
import MyProfile from '../components/Room/RoomBoxes/MyProfile/MyProfile';
import Chat from '../components/Room/RoomBoxes/Chat/Chat';
import TopMenus from '../components/Room/TopMenus';
import Footer from '../components/Footer/Footer';
import {useWebSocket} from '../index';
import {useUser} from '../hooks/useUser';
import {BackgroundSound} from '../utils/Sound';
import Header from '../components/Header/Header';

const BackgroundStyle = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	pointer-events: none;
	z-index: -1;

	background-size: 200px 200px;
	background-image: url(${backgroundimage});
`;

const BoxStyle = styled.div`
    float: left;
    margin-top: 80px;
    width: 1010px;
`;

export const RoomLayout: React.FC<RouteComponentProps> = ({history, children}) => {
    const ws = useWebSocket();
    const user = useUser();

    useEffect(() => {
        BackgroundSound.play();
    }, []);

    useEffect(() => {
        const makeUserQuit = () => {
            if (user !== undefined) ws.emit('quit', {uuid: user.uuid, vendor: user.vendor});
        };
        window.addEventListener('beforeunload', makeUserQuit);

        if (user !== undefined) ws.emit('join', {uuid: user.uuid, nickname: user.nickname, profile: user.profile});
        ws.once('ban', () => history.push('/loginban'));

        const unlisten = history.listen(() => {
            BackgroundSound.stop();
            makeUserQuit();
            unlisten();
        });

        return () => window.removeEventListener('beforeunload', makeUserQuit);
    }, [user]);

    return (
        <>
            <Header/>
            <Container>
                <BoxStyle>
                    <TopMenus/>
                    <UserList/>
                    {children}
                    <MyProfile/>
                    <Chat/>
                </BoxStyle>
            </Container>
            <Footer/>
            <BackgroundStyle/>
        </>
    );
};

export default withRouter(RoomLayout);
