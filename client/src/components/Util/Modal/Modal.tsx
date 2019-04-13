import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const ModalStyle = styled.div<{ isOpen: boolean }>`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    padding: 5px;
    border-radius: 10px;
    color: #111111;
    box-shadow: 0px 1px 1px #141414;
    background-color: #EEEEEE;
    z-index: 2;
`;

const ModalHeadStyle = styled.div`
    padding: 3px;
    border-bottom: 1px solid #CCCCCC;
    border-radius: 5px;
    margin-bottom: 5px;
    height: 12px;
    color: #222222;
    font-size: 11px;
    background-color: #DDDDDD;
    cursor: move;
`;

const TitleStyle = styled.div`
    width: 280px;
    float: left;
`;

const CloseButtonStyle = styled.div`
    float: right;
    border-radius: 6px;
    margin-top: 1px;
    width: 12px;
    height: 12px;
    background-color: #EE5555;
    cursor: auto;
    
    &:hover {
      background-color: #EE7777;
    }
`;

const ModalBodyStyle = styled.div`
  font-size: 13px;
`;

interface Props {
    readonly isOpen: boolean;
    readonly setBeOpen: React.Dispatch<React.SetStateAction<boolean>>
    readonly title: string;
}

export const Modal: React.FC<Props> = ({isOpen, setBeOpen, title, children}) => {
    return (
        <Draggable defaultPosition={{x: 200, y: 200}} handle={'.ModalDraggable'}>
            <ModalStyle isOpen={isOpen}>
                <ModalHeadStyle className={'ModalDraggable'}>
                    <TitleStyle>{title}</TitleStyle>
                    <CloseButtonStyle onClick={() => setBeOpen(false)}/>
                </ModalHeadStyle>
                <ModalBodyStyle>
                    {children}
                </ModalBodyStyle>
            </ModalStyle>
        </Draggable>
    );
};

export default Modal;