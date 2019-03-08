import React from 'react';
import styled from "styled-components";

const Div = styled.div<{ color: string }>`
    position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	z-index: -1;
	background-color: ${props => props.color};
`;

interface Props {
    readonly color: string;
}

export const ColorBackground: React.FC<Props> = ({ color }) => {
    return(
        <>
            <Div color={color}/>
        </>
    );
}

export default ColorBackground;