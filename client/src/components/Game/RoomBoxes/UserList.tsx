import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../../Util/ContentBox/BoxTitle';
import BoxContent from '../../Util/ContentBox/BoxContent';

const ListStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 200px;
    height: 360px;
    
    div {
        float: left;
    }
`;

const UserIconStyle = styled.div`
    background-image: url('');
    margin: 1px;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    background-size: 100%;
`;

const UserNameStyle = styled.div`
    padding: 2px 0px 0px 3px;
    
    &:hover {
        cursor: pointer;
        background-color: #F4F4F4;
    }
`;

export const UserList: React.FC = () => {
    return (
        <>
            <ListStyle>
                <BoxTitle>
                    테스트
                </BoxTitle>
                <BoxContent>
                    <UserIconStyle/>
                    <UserIconStyle/>
                    <UserNameStyle>유저네임</UserNameStyle>
                </BoxContent>
            </ListStyle>
        </>
    );
};

export default UserList;
