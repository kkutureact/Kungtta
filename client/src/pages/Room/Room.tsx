import React from 'react';
import RoomList from '../../components/Room/RoomBoxes/RoomList/RoomList';
import RoomLayout from '../../layouts/RoomLayout';

export const Room: React.FC = () => {

    return (
        <RoomLayout>
            <RoomList/>
        </RoomLayout>
    );
};

export default Room;
