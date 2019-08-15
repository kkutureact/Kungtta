import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    display: block;

    background-color: #EEEEEE;
    border: none;
	border-radius: 5px;
	padding: 5px;
`;

interface Props {
    readonly href?: string;
    readonly onClick?: React.MouseEventHandler;
}

export const SmallButton: React.FC<Props> = ({ children, href, onClick }) => {
    return (
        <ButtonStyle>
            <a href={href} onClick={onClick}>
                {children}
            </a>
        </ButtonStyle>
    );
};

export default SmallButton;