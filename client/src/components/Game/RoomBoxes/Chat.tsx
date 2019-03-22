import React from 'react';
import styled from 'styled-components';
import BoxTitle from '../../Util/ContentBox/BoxTitle';
import BoxContent from '../../Util/ContentBox/BoxContent';

const ContainerStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 790px;
    height: 190px;
    
    div {
        float: left;
    }
`;


export const Chat: React.FC = () => {
    return (
        <>
            <ContainerStyle>
                <BoxTitle>채팅</BoxTitle>
                <BoxContent>
                    채팅 내용
                </BoxContent>
            </ContainerStyle>
        </>
    );
};

export default Chat;