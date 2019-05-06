import React, {useState} from 'react';
import styled from 'styled-components';
import TopMenuButton from './TopMenuButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCog,
    faDiceThree,
    faPlay,
    faRedo,
    faShoppingCart,
    faTrophy,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../utils/Modal/Modal';
import ModalOption from '../../../utils/Modal/ModalOption';
import ModalButton from '../../../utils/Modal/ModalButton';
import {BackgroundSound, ChatSound} from '../../../utils/Sound';

const TopMenusStyle = styled.div`
    float: left;
    width: 1010px;
    height: 30px;
`;

export const TopMenus: React.FC = () => {
    const [options, setOptions] = useState(false);
    const [volume, setVolume] = useState(5);
    const [effectVolume, setEffectVolume] = useState(5);

    return (
        <TopMenusStyle>
            <TopMenuButton color={'#cccccc'} isTiny={true} onClick={() => setOptions(!options)}><FontAwesomeIcon icon={faCog}/></TopMenuButton>
            <Modal title={'설정'} isOpen={options} setBeOpen={setOptions}>
                <ModalOption title={'배경음악 음량'}>
                    <input type={'range'} min={0} max={10} value={volume} onChange={(evt) => setVolume(parseInt(evt.target.value))}></input>
                </ModalOption>

                <ModalOption title={'효과음 음량'}>
                    <input type={'range'} min={0} max={10} value={effectVolume} onChange={(evt) => setEffectVolume(parseInt(evt.target.value))}></input>
                </ModalOption>

                <ModalButton onClick={() => {
                    BackgroundSound.volume(volume*0.1);
                    ChatSound.volume(effectVolume*0.1);
                    setOptions(false);
                }}>적용</ModalButton>
            </Modal>
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