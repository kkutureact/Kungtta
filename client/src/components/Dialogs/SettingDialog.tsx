import React, { useEffect, useState } from 'react';
import Modal from '../../utils/Modal';
import ModalOption from '../../utils/Modal/ModalOption';
import ModalButton from '../../utils/Modal/ModalButton';
import { SoundManager } from '../../utils/Sound';
import Cookies from 'universal-cookie';

interface Props {
    readonly isOpen: boolean;
    readonly setBeOpen: any;
}

export const SettingDialog: React.FC<Props> = ({ isOpen, setBeOpen }) => {
    const [volume, setVolume] = useState<number>(5);
    const [effectVolume, setEffectVolume] = useState<number>(5);
    const cookies = new Cookies();

    useEffect(() => {
        if (cookies.get('backgroundsound') !== undefined && cookies.get('soundeffect') !== undefined) {
            setVolume(cookies.get('backgroundsound') / 0.1);
            setEffectVolume(cookies.get('soundeffect') / 0.1);
        }
    }, []);

    return (
        <Modal title={'설정'} isOpen={isOpen} setBeOpen={setBeOpen} width={'350px'}>
            <ModalOption title={'배경음악 음량'}>
                <input type={'range'} min={0} max={10} value={volume}
                       onChange={(evt) => setVolume(parseInt(evt.target.value))}/>
            </ModalOption>

            <ModalOption title={'효과음 음량'}>
                <input type={'range'} min={0} max={10} value={effectVolume}
                       onChange={(evt) => setEffectVolume(parseInt(evt.target.value))}/>
            </ModalOption>

            <ModalButton onClick={() => {
                SoundManager.setBackgroundVolume(volume * 0.1);
                SoundManager.setSoundEffectVolume(effectVolume * 0.1);
                setBeOpen(false);

                SoundManager.setBackgroundCookie(volume * 0.1);
                SoundManager.setSoundEffectCookie(effectVolume * 0.1);
            }}>적용</ModalButton>
        </Modal>
    );
};

export default SettingDialog;
