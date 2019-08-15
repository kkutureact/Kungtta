import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    float: right;
    width: 80px;
    height: 20px;
    padding: 5px;
    margin-right: 5px;

    font-family: inherit;
    font-size: 12px;
    box-sizing: inherit;

    border: 1px solid #AAAAAA;
    border-radius: 10px;
    background-color: #EEEEEE;
    transition: all 200ms ease;

    &:active {
        color: #EEEEEE;
        background-color: #444444;
    }
`;

interface Props {
    readonly onClick?: React.MouseEventHandler;
}

export const ModalButton: React.FC<Props> = ({ onClick, children }) => {
    return (
        <ButtonStyle onClick={onClick}>
            {children}
        </ButtonStyle>
    );
};

export default ModalButton;