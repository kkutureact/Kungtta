import React from 'react';
import styled from 'styled-components';

const MessageStyle = styled.div<{ isNotice?: boolean }>`
    float: left;
    margin: 2px 0px;
    width: 100%;
    overflow: hidden;
    ${props => props.isNotice ? 'background-color: #CCCCCC;' : ''}
`;

const MessageHeaderStyle = styled.div<{ isNotice?: boolean }>`
    float: left;
    margin-right: 9px;
    width: 100px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    ${props => props.isNotice ? 'color: #1767CA;' : ''}

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
    readonly isNotice?: boolean;
    readonly nickname: string;
    readonly text: string;
    readonly time: string;
}

export const Message: React.FC<Props> = ({ isNotice, nickname, text, time }) => {
    return (
        <MessageStyle isNotice={isNotice}>
            <MessageHeaderStyle isNotice={isNotice}>{nickname}</MessageHeaderStyle>
            <MessageBodyStyle>{text}</MessageBodyStyle>
            <MessageFooterStyle>{time}</MessageFooterStyle>
        </MessageStyle>
    );
};

export default Message;