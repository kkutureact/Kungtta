import React from "react";
import styled from "styled-components";

const Button = styled.button<{ color: string }>`    
    display:inline-block;

    width: 230px;
    height: 50px;
    font-size: 15px;
    background-color: ${props => props.color};
    text-align: center;
	color: #EEEEEE;
    cursor: pointer;
	
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
}

export const KkutuButton: React.FC<Props> = ({children, color}) => {
    return (
        <>
            <Button color={color}>
                {children}
            </Button>
        </>
    );
}

export default KkutuButton;