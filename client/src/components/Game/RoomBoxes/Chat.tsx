import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import BoxTitle from '../../Util/ContentBox/BoxTitle';
import BoxContent from '../../Util/ContentBox/BoxContent';

import {useWebSocket} from '../../../index';
import {useUser} from '../../../hooks/useUser';

const ContainerStyle = styled.div`
    color: #111111;
    box-shadow: 0px 2px 1px #DDDDDD;
    background-color: #EEEEEE;
    float: left;
    padding: 5px;
    width: 790px;
    height: 190px;
`;

const MessagesStyle = styled.div`
    height: 120px;
    width: 100%;
    overflow-y: scroll;
`;

const MessagesInputStyle = styled.input`
    float: left;
    margin-top: 5px;
    width: calc(100% - 85px);
    height: 20px;
    
    font-family: inherit;
    padding: 5px;
    border: 1px solid #AAAAAA;
    border-radius: 10px 0px 0px 10px;
    resize: none;
`;

const MessagesSendStyle = styled.button`
    float: left;
    margin-top: 5px;
    width: 60px;
    height: 20px;

    box-sizing: inherit;
    font-family: inherit;
    padding: 5px;
    border: 1px solid #AAAAAA;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: #EEEEEE;
    transition: all 200ms ease;
`;

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
    width: 70px;
    font-size: 11px;
    text-align: right;
    color: #999999;
`;

interface ChatDetail {
    readonly nickname: string;
    readonly text: string;
}

export const Chat: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [chatlog, setChatLog] = useState<ChatDetail[]>([]);
    const ws = useWebSocket();
    const user = useUser();

    const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(evt.target.value);
    };

    const onEnterKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendChat();
        }
    };

    const sendChat = () => {
        if (inputValue !== '') {
            ws.emit('chat', {nickname: user !== undefined ? user.nickname : 'test', text: inputValue});
            setInputValue('');
        }
    };

    useEffect(() => {
        const handler = (data: any) => {
            setChatLog(chatlog => [...chatlog, data]);
        };

        ws.addListener('chat', handler);

        return () => {
            ws.removeListener('chat', handler);
        };
    }, []);

    return (
        <>
            <ContainerStyle>
                <BoxTitle>채팅</BoxTitle>
                <BoxContent>
                    <MessagesStyle>
                        {
                            chatlog.map((chat, index) => {
                                return (
                                    <MessageStyle key={index}>
                                        <MessageHeaderStyle>{chat.nickname}</MessageHeaderStyle>
                                        <MessageBodyStyle>{chat.text}</MessageBodyStyle>
                                        <MessageFooterStyle>time</MessageFooterStyle>
                                    </MessageStyle>
                                );
                            })
                        }
                    </MessagesStyle>
                    <MessagesInputStyle value={inputValue} onChange={onInputChange} onKeyDown={onEnterKeyPress}
                                        placeholder={'전송할 메세지를 입력해주세요.'}/>
                    <MessagesSendStyle onClick={sendChat}>전송</MessagesSendStyle>
                </BoxContent>
            </ContainerStyle>
        </>
    );
};

export default Chat;