import React, {useEffect} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import backgroundimage from '../../assets/images/kkutu/gamebg.png';
import NavigationBar from '../Header/NavigationBar';
import Container from '../Util/Container';
import UserList from './RoomBoxes/UserList';
import RoomList from './RoomBoxes/RoomList';
import MyProfile from './RoomBoxes/MyProfile';
import Chat from './RoomBoxes/Chat';
import TopMenus from './TopMenus';
import {Howl} from 'howler';
// @ts-ignore
import bgm from '../../assets/audios/lobby.mp3';

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
    useEffect(() => {
        const sound = new Howl({
            src: [bgm],
            autoplay: true,
            loop: true
        });
        Howler.volume(0.5);

        history.listen(() => {
            sound.stop();
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
            <BackgroundStyle/>
        </>
    );
};

export default withRouter(Rooms);