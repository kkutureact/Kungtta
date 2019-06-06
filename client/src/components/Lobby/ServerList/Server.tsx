import React from 'react';
import styled from 'styled-components';
import blue from '../../../assets/images/blue_gauge.png';
import {Link} from 'react-router-dom';

const ContainerStyle = styled.div`
    float: left;
    margin: 2px 0px;
    width: 320px;
    height: 16px;
    font-size: 13px;
    cursor: pointer;
    color: #EEEEEE;
    
    &>div {
        float: left;
    }
      
    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const StatusIconStyle = styled.div<{ isOnline: boolean }>`
    background-color: ${props => props.isOnline ? '#3E3' : '#777'};
    border-radius: 6px;
    margin: 2px;
    width: 12px;
    height: 12px;
`;

const StatusNameStyle = styled.div`
    width: 60px;
`;

const StatusGraphStyle = styled.div`
    width: 190px;
    height: 100%;
    box-shadow: 0px 1px 1px #141414;
    
    &>label {
        position: relative;
        display: block;
        top: -14px;
        width: 100%;
        text-align: center;
        font-size: 11px;
    }
`;

const GraphStyle = styled.div<{ width: number }>`
    width: ${props => props.width}%;
    height: 100%;
    background-image: url(${blue});
`;

const StatusEnterStyle = styled.div`
    width: 50px;
    text-align: center;
`;

interface Props {
    readonly name: string;
    readonly isOnline: boolean;
    readonly size: number;
    readonly channel: number;
}

export const Server: React.FC<Props> = ({name, isOnline, size, channel}) => {
    return (
        <Link to={`/rooms/${channel}`}>
            <ContainerStyle>
                <StatusIconStyle isOnline={isOnline}/>
                <StatusNameStyle>{name}</StatusNameStyle>
                <StatusGraphStyle>
                    <GraphStyle width={size}/>
                    <label>{isOnline ? `${size}/500` : '-'}</label>
                </StatusGraphStyle>
                <StatusEnterStyle>{isOnline ? '접속' : '-'}</StatusEnterStyle>
            </ContainerStyle>
        </Link>
    );
};

export default Server;
