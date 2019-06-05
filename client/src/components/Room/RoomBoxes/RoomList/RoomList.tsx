import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../../utils/ContentBox/BoxTitle';
import BoxContent from '../../../../utils/ContentBox/BoxContent';

const ListStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 790px;
    height: 360px;
    
    div {
        float: left;
    }
`;

const RoomBoxStyle = styled.div<{ isMakeRoom: boolean }>`
    background-color: ${props => props.isMakeRoom ? '#8EC0F3' : '#E4E4E4'};
    padding: 5px;
    border-radius: 10px;
    margin: 3px;
    width: 364px;
    height: 64px;
    box-shadow: 0px 1px 1px #777777;
    cursor: pointer;
    transition: all 300ms ease;
    
    div {
        float: none;
        padding: 20px 0px;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
    }
    
    &:hover {
        background-color: ${props => props.isMakeRoom ? '#AADDFF' : '#F4F4F4'};
    }
`;

export const RoomList: React.FC = () => {
    return (
        <ListStyle>
            <BoxTitle>방 목록 [0개]</BoxTitle>
            <BoxContent>
                <RoomBoxStyle isMakeRoom={true}>
                    <div>방 만들기</div>
                </RoomBoxStyle>
                <RoomBoxStyle isMakeRoom={false}>
                    <div>방 만들기</div>
                </RoomBoxStyle>
            </BoxContent>
        </ListStyle>
    );
};

export default RoomList;
