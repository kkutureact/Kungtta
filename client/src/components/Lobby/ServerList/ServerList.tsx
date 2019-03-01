import React from 'react';
import styled from 'styled-components';
import Server from './Server';

import blue from '../../../images/blue_gauge.png';

const List = styled.div`
    float: right;
    margin-top: -120px;
    width: 50%;
`;

const ListBox = styled.div`
    float: right;
    width: 320px;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ListTitle = styled.h3`
    padding: 2px 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    margin: 0px;
    font-weight: normal;
`;

const CountPeople = styled.label`
    color: #AAA;
    font-size: 13px;
`;

const Servers = styled.div`
    float: left;
    margin: 2px 0px;
    width: 320px;
    height: 16px;
    font-size: 13px;
    cursor: pointer;
    
    &>div {
        float: left;
    }
`;

export const ServerList: React.FC = () => {
    return (
        <List>
            <ListBox>
                <ListTitle>
                    <i>아이콘</i>
                    <label>서버 목록</label>
                    <CountPeople>&nbsp; 총 0명</CountPeople>
                </ListTitle>
                <Servers>
                    <Server name={"감자"} isOnline={true} size={5}/>
                </Servers>
            </ListBox>
        </List>
    );
}

export default ServerList;