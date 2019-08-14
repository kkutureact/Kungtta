import React from 'react';
import styled from 'styled-components';
import Modal from '../../utils/Modal/Modal';
import ModalOption from '../../utils/Modal/ModalOption';
import ModalButton from '../../utils/Modal/ModalButton';
import Moremi from '../Moremi/Moremi';

const ProfileStyle = styled.div`
    float: left;
`;

interface UserType {
    readonly nickname: string;
    readonly profile: string;
}

interface Props{
    readonly User: UserType;
    readonly isOpen: boolean;
    readonly setBeOpen: any;
}

export const UserProfileDialog: React.FC<Props> = ({ User, isOpen, setBeOpen }) => {
    const nickname = User!!.nickname;

    return (
        <Modal title={`${nickname}님의 프로필`} isOpen={isOpen} setBeOpen={setBeOpen} width={'300px'}>
            <ProfileStyle>
                <Moremi/>
            </ProfileStyle>

            <ModalOption title={'테스트'}>

            </ModalOption>

            <ModalButton>Button</ModalButton>
        </Modal>
    );
};

export default UserProfileDialog;
