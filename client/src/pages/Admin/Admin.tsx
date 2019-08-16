import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorBackground from '../../utils/ColorBackground';
import Container from '../../utils/Container';
import SmallButton from '../../utils/Buttons/SmallButton';
import { useUser } from '../../hooks/useUser';
import AdminItem from '../../components/Admin/AdminItem';
import Axios from 'axios';
import config from '../../config';

const InputStyle = styled.input`
    font-family: inherit;
    border-radius: 5px;

    width: 500px;
`;

const UnixTimeLinkStyle = styled.a`
    font-size: 15px;
    text-decoration: none;
    color: #FFFFFF;
`;

export const Admin: React.FC = () => {
    const [isAdmin, setBeAdmin] = useState<boolean>(false);
    const [data, setData] = useState<string>('');
    const [uuid, setUuid] = useState<string>('');
    const [banUuid, setBanUuid] = useState<string>('');
    const [banReason, setBanReason] = useState<string>('당신은 관리자에 의하여 차단된 사용자입니다.');
    const [banExp, setBanExp] = useState<number>(0);
    const [muteUuid, setMuteUuid] = useState<string>('');
    const [muteExp, setMuteExp] = useState<number>(0);

    const user = useUser();

    useEffect(() => {
        if (user !== undefined && user.isAdmin) {
            setBeAdmin(true);
        }
    }, [user]);

    const inputStateFunctions: any = {
        finduser: (v: string) => setUuid(v),
        banuuid: (v: string) => setBanUuid(v),
        banreason: (v: string) => setBanReason(v),
        banexp: (v: number) => setBanExp(v),
        muteuuid: (v: string) => setMuteUuid(v),
        muteexp: (v: number) => setMuteExp(v)
    };

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => inputStateFunctions[evt.target.name](evt.target.value);

    const FindUserInputEnterKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            findUser();
        }
    };
    const findUser = () => {
        Axios.get(`${config.endpointAPI}/auth/profile/${uuid}`, { 'withCredentials': true })
            .then(res => {
                setData(res.data);
            })
            .catch((err) => {
                if (err.response.status === 404) {
                    setData(err.response.data);
                } else {
                    setData('Error ' + err);
                }
            });
    };

    const banUser = () => {
        Axios.post(`${config.endpointAPI}/admin/ban/${banUuid}`, {
            'reason': banReason,
            'exp': banExp
        }, { 'withCredentials': true })
            .then(() => {
                alert('밴 완료!');
            })
            .catch(err => alert(err));
    };

    const unbanUser = () => {
        Axios.delete(`${config.endpointAPI}/admin/unban/${banUuid}`, { 'withCredentials': true })
            .then(() => {
                alert('밴 해제 완료!');
            })
            .catch(err => alert(err));
    };

    const muteUser = () => {
        Axios.put(`${config.endpointAPI}/admin/mute/${muteUuid}`, { 'exp': muteExp }, { 'withCredentials': true })
            .then(() => {
                alert('뮤트 완료!');
            })
            .catch(err => alert(err));
    };

    const unmuteUser = () => {
        Axios.put(`${config.endpointAPI}/admin/unmute/${muteUuid}`, { 'exp': 0 }, { 'withCredentials': true })
            .then(() => {
                alert('뮤트 해제 완료!');
            })
            .catch(err => alert(err));
    };

    if (isAdmin) {
        return (
            <>
                <Container>
                    <h2>끄투 관리자패널<UnixTimeLinkStyle href='https://www.toolfk.com/lang_ko_convert-unixtime' target='_blank'> [UnixTime 변환기]</UnixTimeLinkStyle></h2>

                    <AdminItem name={'유저 조회'}>
                        <InputStyle name={'finduser'} value={uuid} onChange={onInputChange}
                                    onKeyPress={FindUserInputEnterKeyPress}
                                    placeholder={'UUID 입력 (공백 시 자신의 정보를 조회합니다.)'}/>
                        <SmallButton onClick={findUser}>조회하기</SmallButton>
                        <pre>{JSON.stringify(data, null, '\t')}</pre>
                    </AdminItem>

                    <p>* 해제일 0은 영구 처벌</p>
                    <AdminItem name={'유저 밴'}>
                        <InputStyle name={'banuuid'} value={banUuid} onChange={onInputChange}
                                    placeholder={'UUID 입력'}/>
                        <InputStyle name={'banreason'} value={banReason} onChange={onInputChange}
                                    placeholder={'사유'}/>
                        <InputStyle name={'banexp'} value={banExp} onChange={onInputChange}
                                    placeholder={'해제일 (UnixTime)'}/>
                        <SmallButton onClick={banUser}>처리하기</SmallButton>
                        <SmallButton onClick={unbanUser}>풀어주기</SmallButton>
                        <p>* 처리 시 해당 플레이어는 로그아웃 됩니다.</p>
                    </AdminItem>
                    <AdminItem name={'유저 뮤트'}>
                        <InputStyle name={'muteuuid'} value={muteUuid} onChange={onInputChange}
                                    placeholder={'UUID 입력'}/>
                        <InputStyle name={'muteexp'} value={muteExp} onChange={onInputChange}
                                    placeholder={'해제일 (UnixTime)'}/>
                        <SmallButton onClick={muteUser}>처리하기</SmallButton>
                        <SmallButton onClick={unmuteUser}>풀어주기</SmallButton>
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
