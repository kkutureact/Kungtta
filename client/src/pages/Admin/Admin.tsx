import React, {useState} from 'react';
import styled from 'styled-components';
import ColorBackground from '../../utils/ColorBackground';
import Container from '../../utils/Container';
import SmallButton from '../../utils/Buttons/SmallButton';
import {useUser} from '../../hooks/useUser';
import AdminItem from './AdminItem';
import Axios from 'axios';
import config from '../../config';

const InputStyle = styled.input`
    font-family: inherit;
    border-radius: 5px;
    
    width: 500px;
`;

export const Admin: React.FC = () => {
    const [uuid, setUuid] = useState<string>('');
    const [data, setData] = useState<string>('');

    const user = useUser();
    const isAdmin = user !== undefined ? user.isAdmin : false;

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUuid(evt.target.value);
    };

    const onEnterKeyPress = (e: React.KeyboardEvent) => {
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

    if (isAdmin) {
        return (
            <>
                <Container>
                    <h2>끄투 관리자패널</h2>

                    <AdminItem name={'유저 조회'}>
                        <InputStyle value={uuid} onChange={onInputChange} onKeyPress={onEnterKeyPress}
                                    placeholder={'UUID 입력 (공백 시 자신의 정보를 조회합니다.)'}/>
                        <SmallButton onClick={findUser}>조회하기</SmallButton>
                        <pre>{JSON.stringify(data, null, "\t")}</pre>
                    </AdminItem>
                </Container>
                <ColorBackground color={'#111111'}/>
            </>
        );
    } else {
        return (
            <>
                <h1>관리자 전용 페이지입니다.</h1>
                <ColorBackground color={'#111111'}/>
            </>
        );
    }
};

export default Admin;
