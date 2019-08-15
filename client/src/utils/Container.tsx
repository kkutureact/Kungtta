import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    margin: 0 auto;
    position: relative;
    max-width: 960px;
    width: 960px;
`;

export const Container: React.FC = ({ children }) => {
    return (
        <ContainerStyle>
            {children}
        </ContainerStyle>
    );
};

export default Container;