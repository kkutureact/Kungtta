import React from 'react';
import styled from 'styled-components';
import Server from './Server';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const ListStyle = styled.div`
    float: right;
    margin-top: -130px;
    width: 50%;
`;

const ListBoxStyle = styled.div`
    float: right;
    width: 320px;
    background-color: rgba(0, 0, 0, 0.4);
`;

const ListTitleStyle = styled.h3`
    padding: 2px 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 15px;
    margin: 0px;
    font-weight: normal;
`;

const CountPeopleStyle = styled.label`
    color: #AAA;
    font-size: 13px;
`;

const IconStyle = styled(FontAwesomeIcon)`
    margin: 0px 5px;
    cursor: pointer;
`;

export const ServerList: React.FC = () => {
    return (
        <ListStyle>
            <ListBoxStyle>
                <ListTitleStyle>
                    <IconStyle icon={faSyncAlt}/>
                    <label>서버 목록</label>
                    <CountPeopleStyle>&nbsp; 총 0명</CountPeopleStyle>
                </ListTitleStyle>
                <div>
                    <Server name={"테스트1"} isOnline={true} size={5}/>
                    <Server name={"테스트2"} isOnline={true} size={10}/>
                    <Server name={"테스트3"} isOnline={true} size={15}/>
                    <Server name={"테스트4"} isOnline={true} size={20}/>
                    <Server name={"테스트5"} isOnline={true} size={25}/>
                </div>
            </ListBoxStyle>
        </ListStyle>
    );
}

export default ServerList;