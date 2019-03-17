import React from 'react';
import styled from 'styled-components';

const TopButton = styled.button<{ color: string, isTiny: boolean}>`
    background-color: ${props => props.color};
    float: left;
    border: none;
    border-radius: 10px 10px 0px 0px;
    width: ${props => props.isTiny ? '20px' : '98px'};
    height: 20px;
    
    box-sizing: inherit;
    font-family: inherit;
    padding: 5px;
    
    transition: all 200ms ease;

    &:hover {
        margin-top: -5px;
        height: 25px;
    }
`;

interface Props {
    readonly color: string;
    readonly isTiny: boolean;
}

export const TopMenuButton: React.FC<Props> = ({ children, color, isTiny }) => {
    return (
        <>
            <TopButton color={color} isTiny={isTiny}>
                {children}
            </TopButton>
        </>
    );
};

export default TopMenuButton;
