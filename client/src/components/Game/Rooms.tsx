import React, {useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import backgroundimage from '../../assets/images/kkutu/gamebg.png';
import NavigationBar from '../Header/NavigationBar';
import Container from '../Util/Container';
import UserList from './RoomBoxes/UserList/UserList';
import RoomList from './RoomBoxes/RoomList';
import MyProfile from './RoomBoxes/MyProfile';
import Chat from './RoomBoxes/Chat/Chat';
import TopMenus from './TopMenus';
import Footer from '../Footer/Footer';
import {useWebSocket} from '../../index';
import {useUser} from '../../hooks/useUser';
import {BackgroundSound} from '../Util/Sound';

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

export const Rooms: React.FC<RouteComponentProps<{ server: string }>> = ({match, history}) => {
    const ws = useWebSocket();
    const user = useUser();

    useEffect(() => {
        if (user !== undefined) ws.emit('join', {uuid: user.uuid, nickname: user.nickname, profile: user.profile});

        BackgroundSound.play();

        ws.once('ban', () => history.push('/loginban'));

        history.listen(() => {
            BackgroundSound.stop();
            if (user !== undefined) ws.emit('quit', {uuid: user.uuid, vendor: user.vendor});
        });
    }, []);

    return (
        <>
            <NavigationBar/>
            <Container>
                <BoxStyle>
                    <TopMenus/>

                    <UserList/>
                    <RoomList/>
                    <MyProfile/>
                    <Chat/>
                </BoxStyle>
            </Container>
            <Footer/>
            <BackgroundStyle/>
        </>
    );
};

export default withRouter(Rooms);