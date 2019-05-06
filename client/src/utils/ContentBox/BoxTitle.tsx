import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
    border-bottom-color: #CCCCCC;
    border-radius: 5px;
    color: #222222;
    background-color: #DDDDDD;
    padding: 3px;
    border-bottom: 1px solid #333333;
    margin-bottom: 5px;
    margin: 0px;
    font-size: 11px;
`;

export const BoxTitle: React.FC = ({ children }) => {
    return (
        <>
            <TitleStyle>
                {children}
            </TitleStyle>
        </>
    );
};

export default BoxTitle;