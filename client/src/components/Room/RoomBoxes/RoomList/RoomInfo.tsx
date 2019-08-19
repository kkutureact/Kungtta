import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';

const RoomBoxStyle = styled.div<{ isStarted: boolean }>`
    float: left;
    background-color: ${props => props.isStarted ? '#FFBBBB' : '#E4E4E4'};
    padding: 5px;
    border-radius: 10px;
    margin: 3px;
    width: 364px;
    height: 64px;
    box-shadow: 0px 1px 1px #777777;
    cursor: pointer;
    transition: all 300ms ease;

    &:hover {
        background-color: ${props => props.isStarted ? '#FFCCCC' : '#F4F4F4'};
    }
`;

const RoomIdStyle = styled.div<{ isStarted: boolean }>`
    float: left;
    padding-top: 18px;
    border-right: 1px solid ${props => props.isStarted ? '#CC9999' : '#CCCCCC'};
    margin-right: 4px;
    width: 49px;
    height: 46px;
    font-size: 24px;
    font-weight: bold;
`;

const RoomTitleStyle = styled.div`
    float: left;
    padding-top: 5px;
    width: 270px;
    height: 20px;
    font-size: 16px;
    font-weight: bold;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const RoomPeopleStyle = styled.div`
    float: left;
    padding-top: 7px;
    width: 39px;
    height: 17px;
    text-align: center;
`;

const RoomTypeStyle = styled.div`
    float: left;
    width: 270px;
    margin-top: 5px;
`;

const RoomLockStyle = styled.div`
    float: left;
    padding-top: 8px;
    width: 39px;
    text-align: center;
    font-size: 20px;
`;

interface RoomInfoProps {
    readonly id: number;
    readonly title: string;
    readonly now: number;
    readonly max: number;
    readonly type: string;
    readonly isLock: boolean;
    readonly isStarted: boolean;
}

export const RoomInfo: React.FC<RoomInfoProps> = ({ id, title, now, max, type, isLock, isStarted }) => {
    return (
        <RoomBoxStyle isStarted={isStarted}>
            <RoomIdStyle isStarted={isStarted}>{id}</RoomIdStyle>
            <RoomTitleStyle>{title}</RoomTitleStyle>
            <RoomPeopleStyle>{now} / {max}</RoomPeopleStyle>
            <RoomTypeStyle>
                <div>
                    {type}
                </div>
            </RoomTypeStyle>
            <RoomLockStyle>
                <FontAwesomeIcon icon={isLock ? faLock : faUnlock}/>
            </RoomLockStyle>
        </RoomBoxStyle>
    );
};

export default RoomInfo;
