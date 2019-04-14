import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../Util/ContentBox/BoxTitle';
import BoxContent from '../../../Util/ContentBox/BoxContent';
import tempI from '../../../../assets/images/kkutu/guest_icon.png';
import UserInfo from './UserInfo';
import {useWebSocket} from '../../../../index';

const ListStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 200px;
    height: 360px;
    
    div {
        float: left;
    }
`;

interface UserListDetail {
    readonly nickname: string;
    readonly profile: string;
}

export const UserList: React.FC = () => {
    const ws = useWebSocket();
    const [userList, setUserList] = useState<UserListDetail[]>([]);

    useEffect(() => {
        const handler = (data: any) => {
            setUserList(Object.values(Object.values(data)[0]));
        }

        ws.addListener('user', handler);

        return () => {
            ws.removeListener('user', handler);
        };
    }, []);

    return (
        <>
            <ListStyle>
                <BoxTitle>
                    접속자 [{userList.length}명]
                </BoxTitle>
                <BoxContent>
                    {
                        userList.map((data, index) => {
                            return <UserInfo key={index} profile={data.profile !== 'guest' ? data.profile : tempI} level={tempI} name={data.nickname}/>;
                        })
                    }
                </BoxContent>
            </ListStyle>
        </>
    );
};

export default UserList;
