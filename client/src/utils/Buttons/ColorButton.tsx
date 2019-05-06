import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.a<{ color: string }>`    
    display:inline-block;

    width: 230px;
    height: 50px;
    font-size: 15px;
    background-color: ${props => props.color};
    line-height: 50px;
    
	color: #EEEEEE;
    cursor: pointer;
    text-decoration: none;
	
    border: none;
	border-radius: 10px;
	
	margin-top: 6.3px;
	
	transition: all 200ms ease;
    
    &:hover {
	    font-size: 17px;
	}
`;

interface Props {
    readonly color: string;
    readonly href?: string;
}

export const ColorButton: React.FC<Props> = ({children, color, href}) => {
    return (
        <ButtonStyle color={color} href={href}>
            {children}
        </ButtonStyle>
    );
};

export default ColorButton;