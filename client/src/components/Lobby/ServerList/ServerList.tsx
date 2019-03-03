import React from 'react';
import styled from 'styled-components';
import Server from './Server';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const List = styled.div`
    float: right;
    margin-top: -130px;
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

const Icon = styled(FontAwesomeIcon)`
    margin: 0px 5px;
    cursor: pointer;
`;

export const ServerList: React.FC = () => {
    return (
        <List>
            <ListBox>
                <ListTitle>
                    <Icon icon={faSyncAlt}/>
                    <label>서버 목록</label>
                    <CountPeople>&nbsp; 총 0명</CountPeople>
                </ListTitle>
                <div>
                    <Server name={"테스트1"} isOnline={true} size={5}/>
                    <Server name={"테스트2"} isOnline={true} size={10}/>
                    <Server name={"테스트3"} isOnline={true} size={15}/>
                    <Server name={"테스트4"} isOnline={true} size={20}/>
                    <Server name={"테스트5"} isOnline={true} size={25}/>
                </div>
            </ListBox>
        </List>
    );
}

export default ServerList;