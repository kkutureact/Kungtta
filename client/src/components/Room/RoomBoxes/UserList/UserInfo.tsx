import React, { useState } from 'react';
import styled from 'styled-components';
import UserProfileDialog from '../../../Dialogs/UserProfileDialog';

const User = styled.div`
    width: 190px;

    &:hover {
        cursor: pointer;
        background-color: #F4F4F4;
    }
`;

const UserIconStyle = styled.div<{ url: string }>`
    background-image: url(${props => props.url});
    margin: 1px;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    background-size: 100%;
`;

const UserNameStyle = styled.div`
    padding: 2px 0px 0px 3px;
`;

interface Props {
    readonly profile: string;
    readonly level: string;
    readonly name: any;
}

export const UserInfo: React.FC<Props> = ({ profile, level, name }) => {
    const [isOpen, setBeOpen] = useState<boolean>(false);

    const data = { nickname: name, profile: profile };
    return (
        <>
            <User onClick={() => setBeOpen(!isOpen)}>
                <UserIconStyle url={profile}/>
                <UserIconStyle url={level}/>
                <UserNameStyle>{name}</UserNameStyle>
            </User>
            <UserProfileDialog User={data} isOpen={isOpen} setBeOpen={setBeOpen}/>
        </>
    );
};

export default UserInfo;
