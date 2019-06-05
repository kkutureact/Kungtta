import React from 'react';
import styled from 'styled-components';

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
    readonly onClick?: React.MouseEventHandler;
}

export const UserInfo: React.FC<Props> = ({ profile, level, name, onClick }) => {
    return (
        <User onClick={onClick}>
            <UserIconStyle url={profile}/>
            <UserIconStyle url={level}/>
            <UserNameStyle>{name}</UserNameStyle>
        </User>
    );
};

export default UserInfo;
