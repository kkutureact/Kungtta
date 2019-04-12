import React, {useState} from 'react';
import styled from 'styled-components';
import TopMenuButton from './TopMenuButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCog, faUserFriends, faDiceThree, faPlay, faShoppingCart, faBook, faRedo, faTrophy} from '@fortawesome/free-solid-svg-icons';
import Modal from '../../Util/Modal';

const TopMenusStyle = styled.div`
    float: left;
    width: 1010px;
    height: 30px;
`;

export const TopMenus: React.FC = () => {
    const [options, setOptions] = useState(false);

    return (
        <TopMenusStyle>
            <TopMenuButton color={'#cccccc'} isTiny={true} onClick={() => setOptions(!options)}><FontAwesomeIcon icon={faCog}/></TopMenuButton>
            <Modal title={'설정'} isOpen={options} setBeOpen={setOptions}>내용</Modal>
            <TopMenuButton color={'#daa9ff'} isTiny={true}><FontAwesomeIcon icon={faUserFriends}/></TopMenuButton>
            <TopMenuButton color={'#8ec0f3'} isTiny={false}><FontAwesomeIcon className={'fa-fw'} icon={faDiceThree}/> 방 만들기</TopMenuButton>
            <TopMenuButton color={'#b0d2f3'} isTiny={false}><FontAwesomeIcon className={'fa-fw'} icon={faPlay}/> 빠른시작</TopMenuButton>
            <TopMenuButton color={'#b3e7b7'} isTiny={false}><FontAwesomeIcon className={'fa-fw'} icon={faShoppingCart}/> 상점</TopMenuButton>
            <TopMenuButton color={'#73d07a'} isTiny={false}><FontAwesomeIcon className={'fa-fw'} icon={faBook}/> 사전</TopMenuButton>
            <TopMenuButton color={'#d9ff82'} isTiny={false}><FontAwesomeIcon className={'fa-fw'} icon={faRedo}/> 리플레이</TopMenuButton>
            <TopMenuButton color={'#ffb7d3'} isTiny={false}><FontAwesomeIcon className={'fa-fw'} icon={faTrophy}/> 순위</TopMenuButton>
        </TopMenusStyle>
    );
};

export default TopMenus;