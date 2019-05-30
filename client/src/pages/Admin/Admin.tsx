import React, {useState} from 'react';
import styled from 'styled-components';
import ColorBackground from '../../utils/ColorBackground';
import Container from '../../utils/Container';
import SmallButton from '../../utils/Buttons/SmallButton';
import {useUser} from '../../hooks/useUser';
import AdminItem from '../../components/Admin/AdminItem';
import Axios from 'axios';
import config from '../../config';

const InputStyle = styled.input`
    font-family: inherit;
    border-radius: 5px;
    
    width: 500px;
`;

export const Admin: React.FC = () => {
    const [data, setData] = useState<string>('');
    const [uuid, setUuid] = useState<string>('');
    const [banUuid, setBanUuid] = useState<string>('');
    const [muteUuid, setMuteUuid] = useState<string>('');

    const user = useUser();
    const isAdmin = user !== undefined ? user.isAdmin : false;

    const onFindUserInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUuid(evt.target.value);
    };
    const onBanUserInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setBanUuid(evt.target.value);
    };
    const onMuteUserInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setMuteUuid(evt.target.value);
    };

    const FindUserInputEnterKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            findUser();
        }
    };
    const findUser = () => {
        Axios.get(`${config.endpointHost}/auth/profile/${uuid}`, {'withCredentials': true})
            .then(res => {
                setData(res.data);
            })
            .catch(err => setData('Error ' + err));
    };

    const banUser = (status: boolean) => {
        Axios.put(`${config.endpointHost}/admin/ban/${banUuid}`, { 'status': status },{'withCredentials': true})
            .then(() => {
                alert('처리 완료! 현재 상태: ' + status);
            })
            .catch(err => alert(err));
    };

    const muteUser = (status: boolean) => {
        Axios.put(`${config.endpointHost}/admin/mute/${muteUuid}`, { 'status': status }, {'withCredentials': true})
            .then(() => {
                alert('처리 완료! 현재 상태: ' + status);
            })
            .catch(err => alert(err));
    };

    if (isAdmin) {
        return (
            <>
                <Container>
                    <h2>끄투 관리자패널</h2>

                    <AdminItem name={'유저 조회'}>
                        <InputStyle value={uuid} onChange={onFindUserInputChange}
                                    onKeyPress={FindUserInputEnterKeyPress}
                                    placeholder={'UUID 입력 (공백 시 자신의 정보를 조회합니다.)'}/>
                        <SmallButton onClick={findUser}>조회하기</SmallButton>
                        <pre>{JSON.stringify(data, null, '\t')}</pre>
                    </AdminItem>

                    <AdminItem name={'유저 밴'}>
                        <InputStyle value={banUuid} onChange={onBanUserInputChange}
                                    placeholder={'UUID 입력'}/>
                        <SmallButton onClick={() => banUser(true)}>처리하기</SmallButton>
                        <SmallButton onClick={() => banUser(false)}>풀어주기</SmallButton>
                        <p>* 처리 시 해당 플레이어는 로그아웃 됩니다.</p>
                    </AdminItem>
                    <AdminItem name={'유저 뮤트'}>
                        <InputStyle value={muteUuid} onChange={onMuteUserInputChange}
                                    placeholder={'UUID 입력'}/>
                        <SmallButton onClick={() => muteUser(true)}>처리하기</SmallButton>
                        <SmallButton onClick={() => muteUser(false)}>풀어주기</SmallButton>
                        <p>* 처리 시 해당 플레이어는 로그아웃 됩니다.</p>
                    </AdminItem>

                </Container>
                <ColorBackground color={'#111111'}/>
            </>
        );
    }
    return (
        <>
            <h1>관리자 전용 페이지입니다.</h1>
            <ColorBackground color={'#111111'}/>
        </>
    );
};

export default Admin;
