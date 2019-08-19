import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../../utils/ContentBox/BoxTitle';
import BoxContent from '../../../../utils/ContentBox/BoxContent';
import { useWebSocket } from '../../../../index';
import { useUser } from '../../../../hooks/useUser';

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

interface RoomDetail {
    readonly title: string;
    readonly users: any[];
    readonly type: string;
    readonly isStarted: boolean;
    readonly max: number;
}

export const RoomList: React.FC = () => {
    const ws = useWebSocket();
    const user = useUser();
    const [rooms, setRooms] = useState<RoomDetail[]>([]);

    const addRoom = () => {
        const id = Math.floor(Math.random() * 999) + 1;
        if (user !== undefined) ws.emit('makeroom', { id: id, owner: user.uuid, title: '테스트'+id, type: 'test', max: 10 });
    };

    useEffect(() => {
        ws.emit('room');

        const onRoomReceive = (data: any) => {
            setRooms(Object.values(Object.values(data)[0]));
        };

        ws.addListener('room', onRoomReceive);

        return () => {
            ws.removeListener('room', onRoomReceive);
        };
    }, []);

    return (
        <ListStyle>
            <BoxTitle>방 목록 [{rooms.length}개]</BoxTitle>
            <BoxContent>
                {
                    rooms.map((data, index) => {
                        return (
                            <RoomBoxStyle key={index} isMakeRoom={false}>
                                <div>방이름: {data.title} 최대인원: {data.max} 방장:{data.users[0].nickname}</div>
                            </RoomBoxStyle>
                        );
                    })
                }

                <RoomBoxStyle isMakeRoom={true} onClick={addRoom}>
                    <div>방 만들기</div>
                </RoomBoxStyle>
            </BoxContent>
        </ListStyle>
    );
};

export default RoomList;
