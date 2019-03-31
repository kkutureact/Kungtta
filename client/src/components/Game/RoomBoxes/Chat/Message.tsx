import React from 'react';
import styled from 'styled-components';

const MessageStyle = styled.div`
    float: left;
    margin: 2px 0px;
    width: 100%;
    overflow: hidden;
`;

const MessageHeaderStyle = styled.div`
    float: left;
    margin-right: 9px;
    width: 100px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    
    &:hover {
        background-color: #FFF;
    }
`;

const MessageBodyStyle = styled.div`
    float: left;
    width: calc(100% - 190px);
    min-height: 14px;
`;

const MessageFooterStyle = styled.div`
    float: left;
    padding-top: 2px;
    width: 75px;
    font-size: 11px;
    text-align: right;
    color: #999999;
`;

interface Props {
    readonly nickname: string;
    readonly text: string;
    readonly time: string;
}

export const Message: React.FC<Props> = ({nickname, text, time}) => {
    return (
        <MessageStyle>
            <MessageHeaderStyle>{nickname}</MessageHeaderStyle>
            <MessageBodyStyle>{text}</MessageBodyStyle>
            <MessageFooterStyle>{time}</MessageFooterStyle>
        </MessageStyle>
    );
};

export default Message;