import React from 'react';
import styled from 'styled-components';
import backgroundimage from '../../assets/images/kkutu/gamebg.png';
import NavigationBar from '../Header/NavigationBar';
import Container from '../Util/Container';
import TopMenuButton from './TopMenuButton';
import UserList from './RoomBoxes/UserList';
import RoomList from './RoomBoxes/RoomList';
import MyProfile from './RoomBoxes/MyProfile';
import Chat from './RoomBoxes/Chat';


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
`;

const Box = styled.div`
    float: left;
    margin-top: 80px;
    width: 1010px;
`;

const TopMenus = styled.div`
    float: left;
    width: 1010px;
    height: 30px;
`;

export const Rooms: React.FC = () => {


    return (
        <>
            <NavigationBar/>
            <Container>
                <Box>
                    <TopMenus>
                        <TopMenuButton color={'#cccccc'} isTiny={true}>가</TopMenuButton>
                        <TopMenuButton color={'#daa9ff'} isTiny={true}>가</TopMenuButton>
                        <TopMenuButton color={'#8ec0f3'} isTiny={false}>가</TopMenuButton>
                        <TopMenuButton color={'#b0d2f3'} isTiny={false}>가</TopMenuButton>
                        <TopMenuButton color={'#b3e7b7'} isTiny={false}>가</TopMenuButton>
                        <TopMenuButton color={'#73d07a'} isTiny={false}>가</TopMenuButton>
                        <TopMenuButton color={'#d9ff82'} isTiny={false}>가</TopMenuButton>
                        <TopMenuButton color={'#ffb7d3'} isTiny={false}>가</TopMenuButton>
                    </TopMenus>

                    <UserList/>
                    <RoomList/>
                    <MyProfile/>
                    <Chat/>
                </Box>
            </Container>
            <Background/>
        </>
    );
};

export default Rooms;
