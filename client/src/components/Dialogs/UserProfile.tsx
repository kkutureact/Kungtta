import React from 'react';
import Modal from '../../utils/Modal/Modal';
import ModalOption from '../../utils/Modal/ModalOption';
import ModalButton from '../../utils/Modal/ModalButton';

interface UserType {
    readonly nickname: string;
    readonly profile: string;
}

interface Props{
    readonly User: UserType;
    readonly isOpen: boolean;
    readonly setBeOpen: any;
}

export const UserProfile: React.FC<Props> = ({ User, isOpen, setBeOpen }) => {

    const nickname = User!!.nickname;

    return (
        <Modal title={`${nickname}님의 프로필`} isOpen={isOpen} setBeOpen={setBeOpen}>
            <ModalOption title={'테스트'}>

            </ModalOption>

            <ModalButton>Button</ModalButton>
        </Modal>
    );
};

export default UserProfile;
