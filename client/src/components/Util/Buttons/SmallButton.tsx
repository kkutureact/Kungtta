import React from 'react';
import styled from 'styled-components';

const Button = styled.button`    
    display: block;
    
    background-color: #EEEEEE;
    border: none;
	border-radius: 5px;
	padding: 5px;
`;

interface Props {
    readonly href?: string;
    readonly onClick?: () => void;
}

export const SmallButton: React.FC<Props> = ({children, href, onClick}) => {
    return (
        <>
            <Button>
                <a href={href} onClick={onClick}>
                    {children}
                </a>
            </Button>
        </>
    );
};

export default SmallButton;