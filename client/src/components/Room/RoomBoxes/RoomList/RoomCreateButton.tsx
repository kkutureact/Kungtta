import React from 'react';
import styled from 'styled-components';

const CreateRoomStyle = styled.div`
    float: left;
    padding: 5px;
    border-radius: 10px;
    margin: 3px;
    width: 364px;
    height: 64px;
    box-shadow: 0px 1px 1px #777777;
    cursor: pointer;
    background-color: #8EC0F3;
    transition: all 300ms ease;

    &:hover {
        background-color: #AADDFF;
    }
`;

const TextStyle = styled.div`
    float: none;
    padding: 20px 0px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
`;

interface RoomCreateButtonProps {
    readonly onClick?: React.MouseEventHandler;

}

export const RoomCreateButton: React.FC<RoomCreateButtonProps> = ({ onClick }) => {
    return (
        <CreateRoomStyle onClick={onClick}>
            <TextStyle>
                방 만들기
            </TextStyle>
        </CreateRoomStyle>
    );
};

export default RoomCreateButton;
