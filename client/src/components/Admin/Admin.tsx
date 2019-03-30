import React, {useState} from 'react';
import styled from 'styled-components';
import ColorBackground from '../Util/ColorBackground';
import Container from '../Util/Container';
import SmallButton from '../Util/Buttons/SmallButton';
import {useUser} from '../../hooks/useUser';
import AdminItem from './AdminItem';
import Axios from 'axios';

const TextArea = styled.textarea`
    font-family: inherit;
    border-radius: 5px;
`;

const Input = styled.input`
    font-family: inherit;
    border-radius: 5px;
    
    width: 500px;
`;

export const Admin: React.FC = () => {
    const [uuid, setUuid] = useState<string>('');
    const [data, setData] = useState<string>('');

    const user = useUser();
    const isAdmin = user !== undefined ? user.isAdmin : false;

    const inputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUuid(evt.target.value);
    };

    const findUser = () => {
        Axios.get(`http://localhost:8080/auth/profile/${uuid}`, {'withCredentials': true})
            .then(res => {
                setData(JSON.stringify(res.data));
            })
            .catch(err => setData('Error ' + err));
    };

    if (isAdmin) {
        return (
            <>
                <Container>
                    <h2>끄투 관리자패널</h2>

                    <AdminItem name={'유저 조회'}>
                        <Input value={uuid} onChange={inputChangeHandler}
                               placeholder={'UUID 입력 (공백 시 자신의 정보를 조회합니다.)'}/>
                        <SmallButton onClick={findUser}>조회하기</SmallButton>
                        <p>{data}</p>
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
