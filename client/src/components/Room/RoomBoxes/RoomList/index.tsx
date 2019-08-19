import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoxTitle from '../../../../utils/ContentBox/BoxTitle';
import BoxContent from '../../../../utils/ContentBox/BoxContent';
import { useWebSocket } from '../../../../index';
import { useUser } from '../../../../hooks/useUser';
import RoomInfo from './RoomInfo';
import RoomCreateButton from './RoomCreateButton';

const ListStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 790px;
    height: 360px;
`;

const RoomListWrapperStyle = styled.div`
    width: 780px;
    height: 330px;
    overflow-x: hidden;
    overflow-y: scroll;
`;

interface RoomDetail {
    readonly id: number;
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
        if (user !== undefined) {
            ws.emit('makeroom', {
                id: id,
                owner: user.uuid,
                title: '테스트' + id,
                type: 'test',
                max: 10
            });
        }
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
                <RoomListWrapperStyle>
                    {
                        rooms.map((data, index) => {
                            return (
                                <RoomInfo key={index} id={data.id} title={data.title} type={data.type}
                                          now={data.users.length} max={data.max} isLock={false} isStarted={false}/>
                            );
                        })
                    }

                    <RoomCreateButton onClick={addRoom}/>
                </RoomListWrapperStyle>
            </BoxContent>
        </ListStyle>
    );
};

export default RoomList;
