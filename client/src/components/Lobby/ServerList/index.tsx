import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Server from './Server';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import config from '../../../config';

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
    const [size, setSize] = useState<number[]>([0, 0, 0, 0, 0]);
    const [online, setBeOnline] = useState<boolean[]>([true, true, true, true, true]);

    const refreshServerList = () => {
        for (let i = 0; i < 5; i++) {
            Axios.get(`${config.gameServers[i].http}/onlines`, { 'withCredentials': true })
                .then(res => {
                    setSize(previousSize => {
                        const nextSize = previousSize.slice();
                        nextSize[i] = res.data;
                        return nextSize;
                    });
                    setBeOnline(previousSize => {
                        const nextSize = previousSize.slice();
                        nextSize[i] = true;
                        return nextSize;
                    });
                })
                .catch((err) => {
                    setBeOnline(previousSize => {
                        const nextSize = previousSize.slice();
                        nextSize[i] = false;
                        return nextSize;
                    });
                    console.log(err);
                });
        }
    };

    useEffect(() => {
        refreshServerList();
    }, []);

    return (
        <ListStyle>
            <ListBoxStyle>
                <ListTitleStyle>
                    <span onClick={refreshServerList}>
                        <IconStyle icon={faSyncAlt}/>
                    </span>
                    <label>채널 목록</label>
                    <CountPeopleStyle>&nbsp; 입장 할 채널을 선택해주세요.</CountPeopleStyle>
                </ListTitleStyle>
                <div>

                    <Server name={'가람'} isOnline={online[0]} size={size[0]} channel={0}/>
                    <Server name={'나래'} isOnline={online[1]} size={size[1]} channel={1}/>
                    <Server name={'다옴'} isOnline={online[2]} size={size[2]} channel={2}/>
                    <Server name={'솔길'} isOnline={online[3]} size={size[3]} channel={3}/>
                    <Server name={'한울'} isOnline={online[4]} size={size[4]} channel={4}/>

                </div>
            </ListBoxStyle>
        </ListStyle>
    );
};

export default ServerList;
